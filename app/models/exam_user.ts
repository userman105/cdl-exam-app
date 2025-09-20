// app/models/exam_user.ts
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import User from '#models/user'
import Exam from '#models/exam'
import { DateTime } from 'luxon'

export default class ExamUser extends BaseModel {
  public static table = 'exam_users'

  @column({ isPrimary: true })
  declare userId: number

  @column({ isPrimary: true })
  declare examId: number

  @column.dateTime()
  declare lastAttempted: DateTime | null

  @column()
  declare timeElapsed: number | null

  @column()
  declare noOfAttempts: number

  @column()
  declare noOfQuestions: number

  @column()
  declare correctAnswers: number

  @column()
  declare wrongAnswers: number

  // Relationships
  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Exam, {
    foreignKey: 'examId',
  })
  declare exam: BelongsTo<typeof Exam>
}
