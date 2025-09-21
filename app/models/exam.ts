import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Question from './question.js'

export enum ExamType {
  COMBINATION = 'combination',
  AIRBRAKES = 'airbrakes',
  GENERAL = 'general'
}

export default class Exam extends BaseModel {
  public static table = 'exams'

  @column({ isPrimary: true })
  declare examId: number

  @column()
  declare title: string

  @column()
  declare noOfQuestions: number

  @column()
  declare examType: ExamType

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Question, {
    pivotTable: 'exam_questions',
    localKey: 'examId',
    pivotForeignKey: 'exam_id',
    relatedKey: 'questionId',
    pivotRelatedForeignKey: 'question_id',
    pivotColumns: ['question_type'],
  })
  declare questions: ManyToMany<typeof Question>

  @manyToMany(() => User, {
    pivotTable: 'exam_users',
    localKey: 'examId',
    pivotForeignKey: 'examId',
    relatedKey: 'userId',
    pivotRelatedForeignKey: 'userId',
    pivotColumns: ['last_attempted', 'time_elapsed', 'no_of_attempts', 'no_of_questions', 'correct_answers', 'wrong_answers'],
  })
  declare participants: ManyToMany<typeof User>
}
