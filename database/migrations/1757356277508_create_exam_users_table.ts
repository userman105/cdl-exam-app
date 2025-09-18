import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ExamUsers extends BaseSchema {
  protected tableName = 'exam_users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().references('users.user_id').onDelete('CASCADE')
      table.integer('exam_id').unsigned().references('exams.exam_id').onDelete('CASCADE')
      table.primary(['user_id', 'exam_id'])

      table.timestamp('last_attempted', { useTz: true }).nullable()
      table.integer('time_elapsed').nullable() // in minutes
      table.integer('no_of_attempts').defaultTo(0)
      table.integer('no_of_questions').notNullable()
      table.integer('correct_answers').defaultTo(0)
      table.integer('wrong_answers').defaultTo(0)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
