import {BaseSeeder} from '@adonisjs/lucid/seeders'
import Question from '#models/question'

export default class combIdAnswerSeeder extends BaseSeeder {
  public async run() {
    const updates = []
    for (let i = 1; i <= 64; i++) {
      updates.push(
        Question.query().where('question_id', i).update({
          correctAnswerId: i,
        })
      )
    }

    await Promise.all(updates)
    console.log('Linked 64 questions with their correct answers')
  }
}
