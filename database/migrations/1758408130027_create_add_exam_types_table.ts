import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddExamTypeToExams extends BaseSchema {
  protected tableName = 'exams'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('exam_type', ['combination', 'airbrakes', 'general']).defaultTo('combination')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('exam_type')
    })
  }
}
