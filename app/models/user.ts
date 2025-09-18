import { BaseModel, column, beforeSave, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import CredentialHistory from './credentials_history.js'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

export default class User extends BaseModel {
  /**
   * Configure access tokens provider for this model
   * Docs: https://docs.adonisjs.com/guides/authentication/access-tokens-guard
   */
  static accessTokens = DbAccessTokensProvider.forModel(User, {
    table: 'access_tokens',
    type: 'auth_token',
    expiresIn: '24h',
    prefix: 'oat_',
    tokenSecretLength: 40,
  })

  public static table = 'users'

  @column({ isPrimary: true })
  declare user_id: number

  @column()
  declare fName: string

  @column()
  declare lName: string

  @column()
  declare userName: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare mobileNumber?: string

  @column()
  declare subscribed: boolean

  @column()
  declare typeOfSubscription?: 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'ONE_TIME'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare lastLogin?: DateTime

  @hasMany(() => CredentialHistory)
  declare credentialsHistory: HasMany<typeof CredentialHistory>

  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
}
