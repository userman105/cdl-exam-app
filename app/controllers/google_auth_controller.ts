// app/controllers/google_auth_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import { OAuth2Client } from 'google-auth-library'
import User from '#models/user'
import env from '#start/env'

export default class GoogleAuthController {
  private client = new OAuth2Client(
    env.get('GOOGLE_CLIENT_ID'),
    env.get('GOOGLE_CLIENT_SECRET'),
    env.get('GOOGLE_REDIRECT_URI')
  )


  async redirect({ response }: HttpContext) {
    const url = this.client.generateAuthUrl({
      access_type: 'offline',
      scope: ['profile', 'email'],
    })
    return response.redirect(url)
  }

  async callback({ request, response }: HttpContext) {
    try {
      const { code } = request.qs()
      const { tokens } = await this.client.getToken(code)

      const payload = await this.verifyGoogleToken(tokens.id_token!)
      if (!payload?.email) {
        return response.unauthorized({ error: 'No email returned from Google' })
      }

      return this.loginOrReject(payload.email, response)
    } catch (err) {
      console.error('Google callback error:', err)
      return response.internalServerError({ error: 'Google login failed' })
    }
  }

  async mobile({ request, response }: HttpContext) {
    try {
      const idToken = request.input('id_token')
      if (!idToken) {
        return response.badRequest({ error: 'Missing id_token' })
      }

      const payload = await this.verifyGoogleToken(idToken)
      if (!payload?.email) {
        return response.unauthorized({ error: 'No email returned from Google' })
      }

      return this.loginOrReject(payload.email, response)
    } catch (err) {
      console.error('Google mobile login error:', err)
      return response.internalServerError({ error: 'Google login failed' })
    }
  }

  private async verifyGoogleToken(idToken: string) {
    const ticket = await this.client.verifyIdToken({
      idToken,
      audience: env.get('GOOGLE_CLIENT_ID'),
    })
    return ticket.getPayload()
  }

  private async loginOrReject(email: string, response: HttpContext['response']) {
    const user = await User.findBy('email', email)

    if (!user) {
      return response.unauthorized({
        error: 'No account found with this email. Please register first.'
      })
    }


    const token = await User.accessTokens.create(user)

    return response.json({
      user: {
        user_id: user.user_id,
        fName: user.fName,
        lName: user.lName,
        userName: user.userName,
        email: user.email,
        mobileNumber: user.mobileNumber,
      },
      token: {
        type: 'bearer',
        token: token.value!.release(),
      },
    })
  }
}
