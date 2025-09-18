import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ExamQuestion extends BaseModel {
  public static table = 'exam_questions'

  @column({ isPrimary: true })
  public examId!: number

  @column({ isPrimary: true })
  public questionId!: number

  @column()
  public questionType?: string
}
