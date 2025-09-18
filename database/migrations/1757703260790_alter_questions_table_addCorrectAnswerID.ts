import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AlterQuestionsAddCorrectAnswerId extends BaseSchema {
  protected tableName = 'questions'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('correct_answer_id')
        .unsigned()
        .references('answer_id')
        .inTable('answers')
        .onDelete('SET NULL')
        .nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['correct_answer_id'])
      table.dropColumn('correct_answer_id')
    })
  }
}
