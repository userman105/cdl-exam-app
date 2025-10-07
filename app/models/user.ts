import { BaseModel, column, beforeSave, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import CredentialHistory from './credentials_history.js'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

export default class User extends BaseModel {
  static accessTokens = DbAccessTokensProvider.forModel(User)
  public static table = 'users'

  @column({ isPrimary: true })
  public user_id!: number

  @column()
  public fName!: string

  @column()
  public lName!: string

  @column()
  public userName!: string

  @column()
  public email!: string

  @column({ serializeAs: null })
  public password!: string

  @column()
  public mobileNumber?: string

  @column()
  public subscribed!: boolean

  @column()
  public typeOfSubscription?: 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'ONE_TIME'

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @column.dateTime()
  public lastLogin?: DateTime

  @column()
  public otp_code?: string | null=null

  @column.dateTime()
  public otp_expires_at?: DateTime | null = null

  @column()
  public is_verified: boolean = false

  @hasMany(() => CredentialHistory)
  public credentialsHistory!: HasMany<typeof CredentialHistory>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
}
