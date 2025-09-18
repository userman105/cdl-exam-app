import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class CredentialHistory extends BaseModel {
  public static table = 'credential_histories'

  @column({ isPrimary: true })
  public id!: number

  @column()
  public userId!: number

  @column()
  public oldUserName?: string

  @column()
  public oldPassword?: string

  @column.dateTime({ autoCreate: true })
  public changedAt?: DateTime

  @belongsTo(() => User)
  public user!: BelongsTo<typeof User>
}
