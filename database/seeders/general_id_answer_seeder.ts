import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Question from "#models/question";

export default class generalIdAnswerSeeder extends BaseSeeder {
  public async run() {
    const updates = []
    const startQ = 136
    const endQ = 369

    for (let q = startQ; q <= endQ; q++) {
      const offset = q - startQ // 0 for q=136, 1 for q=137, etc.

      // Calculate answer IDs based on the correct formulas
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

    const firstWrong1AnswerId = 640
    const lastWrong1AnswerId = 640 + (2 * (endQ - startQ)) // 640 + 466 = 1106

    const firstWrong2AnswerId = 641
    const lastWrong2AnswerId = 641 + (2 * (endQ - startQ)) // 641 + 466 = 1107

    console.log(`Linked general questions ${startQ}-${endQ} (234 questions)`)
    console.log(`Correct answers: ${firstCorrectAnswerId}-${lastCorrectAnswerId}`)
    console.log(`Wrong answers (1st wrong): ${firstWrong1AnswerId}-${lastWrong1AnswerId}`)
    console.log(`Wrong answers (2nd wrong): ${firstWrong2AnswerId}-${lastWrong2AnswerId}`)

    // Verification
    console.log(`\nVerification examples:`)
    console.log(`Question 136 → Correct: 406, Wrong1: 640, Wrong2: 641`)
    console.log(`Question 200 → Correct: ${406 + (200-136)} = 470, Wrong1:${640 + 2*(200-136)} = ${640 + 128} = 768, Wrong2: ${641 + 2*(200-136)} = ${641 + 128} = 769`)
    console.log(`Question 369 → Correct: 639, Wrong1: 1106, Wrong2: 1107`)
  }
}
