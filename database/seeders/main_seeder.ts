import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class MainSeeder extends BaseSeeder {
  private async runSeeder(Seeder: any) {
    await new Seeder(this.client).run()
  }

  async run() {
    const { default: QuestionCombSeeder } = await import('./questions_comb_seeder.js')
    const { default: combAnswerSeeder } = await import('./comb_answer_seeder.js')
    const { default: combIdQuestionSeeder } = await import('./comb_id_answer_seeder.js')
    const { default: wrongCombAnswerSeeder } = await import('./wrong_answer_comb_seeder.js')
    const {default : questionAirBrakesSeeder } = await import('./questions_airbrake_seeder.js')
    const {default : airBrakesAnswerSeeder} = await import('./air_brakes_answer_seeder.js')
    const {default : airBrakesIdAnswerSeeder} = await import('./airbrakes_id_answer_seeder.js')
    const {default : wrongAirBrakesAnswerSeeder } = await import('./wrong_airbrakes_answer_seeder.js')
    const {default : questionGeneralSeeder} = await import('./questions_general_seeder.js')
    const {default : generalAnswerSeeder} = await import('./general_answer_seeder.js')
    const {default : generalIdAnswerSeeder} = await import('./general_id_answer_seeder.js')
    const {default : wrongGeneralAnswerSeeder} = await import('./wrong_general_answer_seeder.js')

    await this.runSeeder(QuestionCombSeeder)

    await this.runSeeder(combAnswerSeeder)

    await this.runSeeder(combIdQuestionSeeder)

    await this.runSeeder(wrongCombAnswerSeeder)

    await this.runSeeder(questionAirBrakesSeeder)

    await this.runSeeder(airBrakesAnswerSeeder)

    await this.runSeeder(airBrakesIdAnswerSeeder)

    await this.runSeeder(wrongAirBrakesAnswerSeeder)

    await this.runSeeder(questionGeneralSeeder)

    await this.runSeeder(generalAnswerSeeder)

    await this.runSeeder(generalIdAnswerSeeder)

    await this.runSeeder(wrongGeneralAnswerSeeder)

    console.log('seeding done.')
  }
}
