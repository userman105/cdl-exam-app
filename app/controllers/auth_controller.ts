import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { DateTime } from 'luxon'

function debugToken(token: any, user: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 DEBUG INFO:')
    console.log('  Raw Token:', token.value!.release())
    console.log('  User ID:', user.user_id) // Note: using user_id from your model
    console.log('  Token Type:', token.type)
    console.log('  Expires:', token.expiresAt)
    console.log('  Token Identifier:', token.identifier)
    console.log('─'.repeat(40))
  }
}

export default class AuthController {
  /**
   * Register a new user
   */
  async googleRedirect({ ally }: HttpContext) {
    return ally.use('google').redirect()
  }

  // Step 2: Handle callback from Google
  async googleCallback({ ally, response }: HttpContext) {
    const google = ally.use('google')

    if (google.accessDenied()) {
      return response.unauthorized({ error: 'Access denied' })
    }

    if (google.stateMisMatch()) {
      return response.badRequest({ error: 'State mismatch' })
    }

    if (google.hasError()) {
      return response.badRequest({ error: google.getError() })
    }

    const userData = await google.user()

    // Check if email exists in DB
    const user = await User.findBy('email', userData.email)

    if (!user) {
      return response.notFound({
        error: 'No user is attached to this email',
        email: userData.email,
      })
    }

    // If a user exists, issue an access token
    const token = await User.accessTokens.create(user, ['*'], { expiresIn: '24h' })

    return response.json({
      message: 'Google login successful',
      user,
      token: token.toJSON(),
    })
  }
  async register({ request, response }: HttpContext) {
    try {
      const data = request.only(['fName', 'lName', 'userName', 'email', 'password', 'mobileNumber'])
      const user = await User.create(data)

      return response.status(201).json({
        user: {
          user_id: user.user_id,
          fName: user.fName,
          lName: user.lName,
          userName: user.userName,
          email: user.email,
          mobileNumber: user.mobileNumber,
        },
      })
    } catch (error) {
      console.error('Registration error:', error)
      return response.status(400).json({ error: 'Registration failed' })
    }
  }

  /**
   * Login and get an access token
   */
  async login({ request, response }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])

      const user = await User.findBy('email', email)
      if (!user) {
        return response.status(401).json({ error: 'Invalid credentials' })
      }

      const isValid = await hash.verify(user.password, password)
      if (!isValid) {
        return response.status(401).json({ error: 'Invalid credentials' })
      }

      // Create access token
      const token = await User.accessTokens.create(user, ['*'], {
        expiresIn: '24h',
      })

      // Update last login
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
        },
      })
    } catch (error) {
      console.error('Login error:', error)
      return response.status(500).json({ error: 'Login failed' })
    }
  }

  /**
   * Get the currently logged-in user
   */
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

  /**
   * Logout the user (invalidate token)
   */
  async logout({ auth, response }: HttpContext) {
    try {
      // Method that should work in v6
      await auth.use('api').invalidateToken()
      return response.json({ message: 'Logged out successfully' })
    } catch (error) {
      console.error('Logout error:', error)
      return response.status(500).json({ error: 'Logout failed' })
    }
  }
}
