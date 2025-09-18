import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'answers'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('answer_text_ar').notNullable()
    }
    )
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('answers_text_ar')
    })
  }
}
