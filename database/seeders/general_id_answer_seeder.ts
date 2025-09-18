import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Question from "#models/question";

export default class extends BaseSeeder {public async run() {
  const updates = []
  for (let i = 136; i <= 230; i++) {
    updates.push(
      Question.query().where('question_id', i).update({
        correctAnswerId: i + 366,
      })
    )
  }
  await Promise.all(updates)
  console.log('Linked questions 136-230 with answer IDs 502-560')
}
}
