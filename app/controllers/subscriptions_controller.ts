// app/controllers/subscription_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'
// @ts-ignore
import User from '#models/user'
import env from '#start/env'
import { google } from 'googleapis'

export default class SubscriptionController {
  /**
   * 🔹 Update user subscription after Google IAP verification
   * Route: POST /subscription/update
   */
  public async update({ request, auth, response }: HttpContext) {
    try {
      await auth.authenticate()
      const user = auth.user!

      const { iapToken, planType } = request.only(['iapToken', 'planType'])
      if (!iapToken || !planType) {
        return response.badRequest({
          success: false,
          error: 'Missing iapToken or planType',
        })
      }

      // 🔹 1. Map plan types to your Play Console product IDs
      const productMap: Record<string, string> = {
        weekly: 'weekly_plan',
        monthly: 'monthly_plan',
        yearly: 'yearly_plan',
      }

      const productId = productMap[planType.toLowerCase()]
      if (!productId) {
        return response.badRequest({
          success: false,
          error: 'Invalid plan type',
        })
      }

      // 🔹 2. Verify IAP token with Google Play Developer API
      const verification = await this.verifyPurchaseToken(productId, iapToken)
      if (!verification || (verification as any).error) {
        console.error('Google API verification failed:', (verification as any)?.error)
        return response.status(400).json({
          success: false,
          error: 'Invalid or expired Google IAP token',
        })
      }

      // 🔹 3. Calculate subscription start & end dates (aligned to full days)
      const now = DateTime.now().startOf('day')
      let endDate: DateTime

      switch (planType.toLowerCase()) {
        case 'weekly':
          endDate = now.plus({ days: 7 })
          break
        case 'monthly':
          endDate = now.plus({ months: 1 })
          break
        case 'yearly':
          endDate = now.plus({ years: 1 })
          break
        default:
          endDate = now
      }

      // 🔹 4. Update user subscription in DB
      user.merge({
        subscribed: true,
        typeOfSubscription: planType.toUpperCase(),
        subscription_started_at: now,
        subscription_ends_at: endDate.endOf('day'),
      })
      await user.save()

      return response.json({
        success: true,
        message: `Subscription updated successfully to ${planType}`,
        subscription: {
          planType,
          start: now.toISODate(),
          end: endDate.toISODate(),
        },
      })
    } catch (error) {
      console.error('Subscription update error:', error)
      return response.status(500).json({
        success: false,
        error: 'Internal Server Error',
        details: error.message,
      })
    }
  }

  /**
   * 🔹 Verify the Google IAP token
   */
  private async verifyPurchaseToken(productId: string, iapToken: string) {
    try {
      const packageName = env.get('ANDROID_PACKAGE_NAME')

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: env.get('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
          private_key: env.get('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY')?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/androidpublisher'],
      })

      const androidPublisher = google.androidpublisher({ version: 'v3', auth })
      const res = await androidPublisher.purchases.subscriptions.get({
        packageName,
        subscriptionId: productId,
        token: iapToken,
      })

      return res.data
    } catch (err: any) {
      console.error('verifyPurchaseToken error:', err.response?.data || err.message)
      return { error: err.response?.data || err.message }
    }
  }
}
