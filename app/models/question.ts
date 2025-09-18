import { BaseModel, column, manyToMany,} from '@adonisjs/lucid/orm'
import type {ManyToMany} from "@adonisjs/lucid/types/relations";
import Exam from './exam.js'

export default class Question extends BaseModel {
  public static table = 'questions'

  @column({ isPrimary: true })
  public questionId!: number

  @column()
  public questionCate?: string

  @column()
  public questionText!: string

  @column()
  public questionTextAr!: string

  @column()
  public correctAnswerId!: number

  @manyToMany(() => Exam, {
    pivotTable: 'exam_questions',
    pivotColumns: ['question_type'],
  })
  public exams!: ManyToMany<typeof Exam>
}
