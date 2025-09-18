import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Answers extends BaseSchema {
  protected tableName = 'answers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('answer_id')
      table
        .integer('question_id')
        .unsigned()
        .references('question_id')
        .inTable('questions')
        .onDelete('CASCADE')
      table.text('answer_text').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
