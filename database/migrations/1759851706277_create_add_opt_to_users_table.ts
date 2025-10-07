import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddOtpToUsers extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('otp_code').nullable()
      table.timestamp('otp_expires_at').nullable()
      table.boolean('is_verified').defaultTo(false)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('otp_code')
      table.dropColumn('otp_expires_at')
      table.dropColumn('is_verified')
    })
  }
}
