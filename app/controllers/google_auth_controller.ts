// app/controllers/google_auth_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import { OAuth2Client } from 'google-auth-library'
import User from '#models/user'

export default class GoogleAuthController {
  private client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  )

  // Step 1: Redirect to Google
  async redirect({ response }: HttpContext) {
    const url = this.client.generateAuthUrl({
      access_type: 'offline',
      scope: ['profile', 'email'],
    })
    return response.redirect(url)
  }

  // Step 2: Handle callback
  async callback({ request, response }: HttpContext) {
    try {
      const { code } = request.qs()
      const { tokens } = await this.client.getToken(code)
      this.client.setCredentials(tokens)

      const ticket = await this.client.verifyIdToken({
        idToken: tokens.id_token!,
        audience: process.env.GOOGLE_CLIENT_ID,
      })

      const payload = ticket.getPayload()
      if (!payload?.email) {
        return response.unauthorized({ error: 'No email returned from Google' })
      }

      // Check if user exists in DB
      const user = await User.findBy('email', payload.email)
      if (!user) {
        return response.unauthorized({ error: 'No user attached to this email' })
      }

      // Issue Adonis access token
      const token = await User.accessTokens.create(user, ['*'], {
        expiresIn: '24h',
      })

      return response.json({ user, token: token.toJSON() })
    } catch (err) {
      console.error(err)
      return response.internalServerError({ error: 'Google login failed' })
    }
  }

  async mobile({ request, response }: HttpContext) {
    try {
      const idToken = request.input('id_token')
      if (!idToken) {
        return response.badRequest({ error: 'Missing id_token' })
      }

      const ticket = await this.client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      })

      const payload = ticket.getPayload()
      if (!payload?.email) {
        return response.unauthorized({ error: 'No email returned from Google' })
      }

      // Check if user exists in DB
      const user = await User.findBy('email', payload.email)
      if (!user) {
        return response.unauthorized({ error: 'No user attached to this email' })
      }

      // Issue Adonis access token
      const token = await User.accessTokens.create(user, ['*'], {
        expiresIn: '24h',
      })

      return response.json({ user, token: token.toJSON() })
    } catch (err) {
      console.error(err)
      return response.internalServerError({ error: 'Google login failed' })
    }
  }
}
