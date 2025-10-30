// app/controllers/auth_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { DateTime } from 'luxon'
import AuthAccessToken from '#models/auth_access_token'
import { sendOtpMail } from '#services/otp_service'

function debugToken(token: any, user: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(' DEBUG INFO:')
    console.log('  Raw Token:', token.value!.release())
    console.log('  User ID:', user.user_id)
    console.log('  Token Type:', token.type)
    console.log('  Expires:', token.expiresAt)
    console.log('  Token Identifier:', token.identifier)
    console.log('─'.repeat(40))
  }
}

export default class AuthController {
  /**
   * Google OAuth
   */
  async googleRedirect({ ally }: HttpContext) {
    return ally.use('google').redirect()
  }

  async googleCallback({ ally, response }: HttpContext) {
    const google = ally.use('google')

    if (google.accessDenied()) return response.unauthorized({ error: 'Access denied' })
    if (google.stateMisMatch()) return response.badRequest({ error: 'State mismatch' })
    if (google.hasError()) return response.badRequest({ error: google.getError() })

    const userData = await google.user()
    const user = await User.findBy('email', userData.email)

    if (!user) {
      return response.notFound({
        error: 'No user is attached to this email',
        email: userData.email,
      })
    }

    if (!user.is_verified) {
      return response.unauthorized({
        error: 'Please verify your email before logging in with Google.',
      })
    }

    const token = await User.accessTokens.create(user, ['*'])

    return response.json({
      message: 'Google login successful',
      user,
      token: token.toJSON(),
    })
  }

  /**
   * Register user + send OTP
   */
  async register({ request, response }: HttpContext) {
    try {
      const data = request.only([
        'fName',
        'lName',
        'userName',
        'email',
        'password',
        'mobileNumber',
      ])

      const existingUser = await User.query()
        .where('email', data.email)
        .orWhere('user_name', data.userName)
        .first()

      if (existingUser) {
        return response.status(400).json({
          success: false,
          error: 'Username or email already in use',
        })
      }

      const user = await User.create(data)

      const otp = Math.floor(100000 + Math.random() * 900000).toString()
      user.otp_code = otp
      user.otp_expires_at = DateTime.now().plus({ minutes: 10 })
      user.is_verified = false
      await user.save()

      await sendOtpMail(user, otp)

      return response.status(201).json({
        success: true,
        message: 'Registration successful. OTP sent to your email for verification.',
        email: user.email,
      })
    } catch (error: any) {
      console.log('Registration error:', error)

      if (error.code === '23505') {
        return response.status(400).json({
          success: false,
          error: 'Username or email already in use',
        })
      }

      return response.status(500).json({
        success: false,
        error: error.message || 'Registration failed',
        details: error.stack || error,
      })
    }
  }

  /**
   * Verify OTP
   */
  async verifyEmail({ request, response }: HttpContext) {
    const { email, otp } = request.only(['email', 'otp'])
    const user = await User.findBy('email', email)

    if (!user) return response.status(404).json({ error: 'User not found' })
    if (user.is_verified) return response.json({ message: 'User already verified' })
    if (!user.otp_code || user.otp_code !== otp) {
      return response.status(400).json({ error: 'Invalid OTP' })
    }
    if (DateTime.now() > user.otp_expires_at!) {
      return response.status(400).json({ error: 'OTP expired' })
    }

    user.is_verified = true
    user.otp_code = null
    user.otp_expires_at = null
    await user.save()

    return response.json({ message: 'Email verified successfully' })
  }

  /**
   * Login
   */
  async login({ request, response }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])
      const user = await User.findBy('email', email)

      if (!user) return response.status(401).json({ error: 'Invalid credentials' })
      if (!user.is_verified) {
        return response.status(403).json({
          success: false,
          needsVerification: true,
          email: user.email,
          message: 'Account not verified. Please verify your email.',
        })
      }

      // @ts-ignore
      const isValid = await hash.verify(user.password, password)
      if (!isValid) return response.status(401).json({ error: 'Invalid credentials' })

      await AuthAccessToken.query().where('tokenable_id', user.user_id).delete()
      const token = await User.accessTokens.create(user, ['*'])

      user.lastLogin = DateTime.now()
      await user.save()

      debugToken(token, user)

      return response.json({
        user: {
          user_id: user.user_id,
          fName: user.fName,
          lName: user.lName,
          userName: user.userName,
          email: user.email,
          mobileNumber: user.mobileNumber,
          lastLogin: user.lastLogin,
        },
        token: {
          type: 'bearer',
          token: token.value!.release(),
          expiresAt: token.expiresAt,
          identifier: token.identifier,
        },
      })
    } catch (error) {
      console.error('Login error:', error)
      return response.status(500).json({ error: 'Login failed' })
    }
  }

  async me({ auth, response }: HttpContext) {
    try {
      await auth.authenticate()
      return response.json({
        user_id: auth.user!.user_id,
        fName: auth.user!.fName,
        lName: auth.user!.lName,
        userName: auth.user!.userName,
        email: auth.user!.email,
        mobileNumber: auth.user!.mobileNumber,
        subscribed: auth.user!.subscribed,
        typeOfSubscription: auth.user!.typeOfSubscription,
        lastLogin: auth.user!.lastLogin,
      })
    } catch (error) {
      console.error('Auth error:', error)
      return response.status(401).json({ error: 'Unauthorized' })
    }
  }

  async logout({ auth, response }: HttpContext) {
    try {
      const user = auth.user!
      await AuthAccessToken.query().where('tokenable_id', user.user_id).delete()
      return response.json({ message: 'Logged out successfully' })
    } catch (error) {
      console.error('Logout error:', error)
      return response.status(500).json({ error: 'Logout failed' })
    }
  }

  async check({ auth, response }: HttpContext) {
    try {
      await auth.check()
      return response.json({
        valid: true,
        user: auth.user,
      })
    } catch {
      return response.unauthorized({
        valid: false,
        error: 'Invalid or expired token',
      })
    }
  }

  /**
   * Resend OTP
   */
  public async resendOtp({ request, response }: HttpContext) {
    const oldEmail = request.input('oldEmail')
    const newEmail = request.input('newEmail') || oldEmail

    const user = await User.findBy('email', oldEmail)
    if (!user) {
      return response.status(404).json({ success: false, error: 'User not found' })
    }
    if (user.is_verified) {
      return response.status(400).json({ success: false, error: 'User already verified' })
    }
    if (newEmail !== oldEmail) {
      user.email = newEmail
      await user.save()
    }
    if (user.otp_expires_at && DateTime.now() < user.otp_expires_at.minus({ minutes: 9 })) {
      return response.status(429).json({ success: false, error: 'Please wait before requesting a new OTP' })
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    user.otp_code = otp
    user.otp_expires_at = DateTime.now().plus({ minutes: 10 })
    await user.save()

    await sendOtpMail(user, otp)
    return response.json({ success: true, message: 'New OTP sent successfully', email: user.email })
  }

  /**
   * Update email
   */
  public async updateEmail({ request, response }: HttpContext) {
    const oldEmail = request.input('old_email')
    const newEmail = request.input('new_email')

    const user = await User.findBy('email', oldEmail)
    if (!user) return response.status(404).json({ success: false, error: 'User not found' })

    const existing = await User.findBy('email', newEmail)
    if (existing) {
      return response.status(400).json({ success: false, error: 'Email already in use' })
    }

    user.email = newEmail
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    user.otp_code = otp
    user.otp_expires_at = DateTime.now().plus({ minutes: 10 })
    await user.save()

    await sendOtpMail(user, otp)
    return response.json({ success: true, message: 'Email updated and OTP sent' })
  }

  /**
   * Forgot Password Flow
   */
  public async requestPasswordReset({ request, response }: HttpContext) {
    const email = request.input('email')
    const user = await User.findBy('email', email)
    if (!user) return response.status(404).json({ success: false, error: 'User not found' })

    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    user.otp_code = otp
    user.otp_expires_at = DateTime.now().plus({ minutes: 10 })
    await user.save()

    await sendOtpMail(user, otp)
    return response.json({ success: true, message: 'OTP sent to your email for password reset' })
  }

  public async verifyPasswordResetOtp({ request, response }: HttpContext) {
    const { email, otp } = request.only(['email', 'otp'])
    const user = await User.findBy('email', email)
    if (!user) return response.status(404).json({ error: 'User not found' })
    if (!user.otp_code || user.otp_code !== otp) return response.status(400).json({ error: 'Invalid OTP' })
    if (DateTime.now() > user.otp_expires_at!) return response.status(400).json({ error: 'OTP expired' })

    return response.json({ success: true, message: 'OTP verified successfully. You can now reset your password.' })
  }

  public async resetPassword({ request, response }: HttpContext) {
    const { email, otp, newPassword } = request.only(['email', 'otp', 'newPassword'])
    const user = await User.findBy('email', email)
    if (!user) return response.status(404).json({ error: 'User not found' })
    if (!user.otp_code || user.otp_code !== otp) return response.status(400).json({ error: 'Invalid OTP' })
    if (DateTime.now() > user.otp_expires_at!) return response.status(400).json({ error: 'OTP expired' })

    user.password = newPassword
    user.otp_code = null
    user.otp_expires_at = null
    await user.save()

    return response.json({ success: true, message: 'Password has been reset successfully' })
  }
}
