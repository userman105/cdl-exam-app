import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Question from '#models/question'

export default class airBrakesIdAnswerSeeder extends BaseSeeder {
  public async run() {
    const updates = []
    for (let i = 65; i <= 135; i++) {
      updates.push(
        Question.query().where('question_id', i).update({
          correctAnswerId: i + 128,
        })
      )
    }

    await Promise.all(updates)
    console.log('Linked 71 questions (65-135) with their correct answers (IDs 193-263)')
  }
}
