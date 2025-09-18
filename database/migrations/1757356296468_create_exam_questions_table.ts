import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ExamQuestions extends BaseSchema {
  protected tableName = 'exam_questions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('exam_id').unsigned().references('exams.exam_id').onDelete('CASCADE')
      table
        .integer('question_id')
        .unsigned()
        .references('questions.question_id')
        .onDelete('CASCADE')
      table.primary(['exam_id', 'question_id'])

      table.string('question_type').nullable()

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
