import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Exams extends BaseSchema {
  protected tableName = 'exams'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('exam_id')
      table.string('title').notNullable()
      table.boolean('answers_included').notNullable()
      table.integer('no_of_questions').notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
