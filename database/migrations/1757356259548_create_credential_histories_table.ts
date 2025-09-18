import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CredentialHistories extends BaseSchema {
  protected tableName = 'credential_histories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.user_id').onDelete('CASCADE')
      table.string('old_user_name').nullable()
      table.string('old_password').nullable()
      table.timestamp('changed_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
