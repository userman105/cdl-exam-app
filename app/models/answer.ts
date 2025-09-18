import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Question from './question.js'

export default class Answer extends BaseModel {
  public static table = 'answers'

  @column({ isPrimary: true })
  public answerId!: number

  @column()
  public questionId?: number

  @column()
  public answerText!: string

  @column()
  public answerTextAr!: string


  @belongsTo(() => Question, {
    foreignKey: 'questionId',
  })
  public question!: BelongsTo<typeof Question>
}
