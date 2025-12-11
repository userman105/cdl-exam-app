import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Question from "#models/question";

export default class generalIdAnswerSeeder extends BaseSeeder {
  public async run() {
    const updates = []
    const startQ = 136
    const endQ = 369 // Updated to 369

    for (let q = startQ; q <= endQ; q++) {
      const offset = q - startQ // 0 for q=136, 1 for q=137, etc.

      // Calculate answer IDs based on your formulas
      const correctAnswerId = 406 + offset

      updates.push(
        Question.query().where('question_id', q).update({
          correctAnswerId: correctAnswerId,
        })
      )
    }

    await Promise.all(updates)

    // Calculate the range of answer IDs
    const firstCorrectAnswerId = 406
    const lastCorrectAnswerId = 406 + (endQ - startQ) // 406 + 233 = 639

    const firstWrong1AnswerId = 501
    const lastWrong1AnswerId = 501 + (2 * (endQ - startQ)) // 501 + 466 = 967

    const firstWrong2AnswerId = 502
    const lastWrong2AnswerId = 502 + (2 * (endQ - startQ)) // 502 + 466 = 968

    console.log(`Linked general questions ${startQ}-${endQ}`)
    console.log(`Correct answers: ${firstCorrectAnswerId}-${lastCorrectAnswerId}`)
    console.log(`Wrong answers (1st wrong): ${firstWrong1AnswerId}-${lastWrong1AnswerId}`)
    console.log(`Wrong answers (2nd wrong): ${firstWrong2AnswerId}-${lastWrong2AnswerId}`)
  }
}
