import { BaseSchema } from '@adonisjs/lucid/schema'
export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id') // autoincrement primary key
      table.string('f_name').notNullable()
      table.string('l_name').nullable()
      table.string('user_name').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('password').nullable()
      table.string('mobile_number').nullable()
      table.boolean('subscribed').defaultTo(false)
      table.enum('type_of_subscription', ['WEEKLY', 'MONTHLY', 'YEARLY', 'ONE_TIME']).nullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('last_login', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
