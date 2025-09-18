import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Questions extends BaseSchema {
  protected tableName = 'questions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('question_id')
      table.string('question_cate').nullable()
      table.text('question_text').notNullable()

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
