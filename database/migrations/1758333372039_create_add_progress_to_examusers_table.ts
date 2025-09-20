import {BaseSchema} from '@adonisjs/lucid/schema'

export default class AddProgressToExamUsers extends BaseSchema {
  protected tableName = 'exam_users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('current_question_id').unsigned().nullable()
      table.enum('status', ['in_progress', 'paused', 'finished']).defaultTo('in_progress')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('current_question_id')
      table.dropColumn('status')
    })
  }
}
