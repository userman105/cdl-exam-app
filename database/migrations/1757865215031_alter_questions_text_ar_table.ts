import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AlterQuestionsAddTextAr extends BaseSchema {
  protected tableName = 'questions'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('question_text_ar').notNullable()

    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('question_text_ar')
    })
  }
}
