import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany} from '@adonisjs/lucid/orm'
import type {ManyToMany} from "@adonisjs/lucid/types/relations";
import User from './user.js'
import Question from './question.js'

export default class Exam extends BaseModel {
  public static table = 'exams'

  @column({ isPrimary: true })
  public examId!: number

  @column()
  public title!: string

  @column()
  public answersIncluded?: boolean

  @column()
  public noOfQuestions!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt?: DateTime

  @manyToMany(() => User, {
    pivotTable: 'exam_users',
    pivotColumns: ['last_attempted', 'time_elapsed', 'no_of_attempts', 'no_of_questions', 'correct_answers', 'wrong_answers'],
  })
  public participants!: ManyToMany<typeof User>

  @manyToMany(() => Question, {
    pivotTable: 'exam_questions',
    pivotColumns: ['question_type'],
  })
  public questions!: ManyToMany<typeof Question>
}
