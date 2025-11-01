import { BaseModel, column, beforeSave, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import CredentialHistory from './credentials_history.js'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

export default class User extends BaseModel {
  public static table = 'users'
  static accessTokens = DbAccessTokensProvider.forModel(User)

  @column({ isPrimary: true })
  public user_id!: number

  @column()
  public fName!: string

  @column()
  public lName?: string | null = null

  @column()
  public userName!: string

  @column()
  public email!: string

  @column({ serializeAs: null })
  public password?: string | null = null

  @column()
  public mobileNumber?: string

  // =====================
  // Subscription Tracking
  // =====================

  @column()
  public subscribed!: boolean

  @column()
  public typeOfSubscription?: 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'ONE_TIME'

  // Start and end timestamps (in UTC)
  @column.dateTime()
  public subscription_started_at?: DateTime | null = null

  @column.dateTime()
  public subscription_ends_at?: DateTime | null = null

  @column()
  public google_photo_url?: string | null = null

  public get isSubscriptionActive(): boolean {
    if (!this.subscription_ends_at) return false
    return DateTime.utc() <= this.subscription_ends_at
  }

  // =====================
  // Timestamps
  // =====================

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @column.dateTime()
  public lastLogin?: DateTime

  // =====================
  // OTP Verification
  // =====================

  @column()
  public otp_code?: string | null = null

  @column.dateTime()
  public otp_expires_at?: DateTime | null = null

  @column()
  public is_verified: boolean = false

  // =====================
  // Relations
  // =====================

  @hasMany(() => CredentialHistory)
  public credentialsHistory!: HasMany<typeof CredentialHistory>

  // =====================
  // Hooks
  // =====================

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      // @ts-ignore
      user.password = await hash.make(user.password)
    }
  }
}
