import type { HttpContext } from '@adonisjs/core/http'
import ExamUser from '#models/exam_user'
import Exam from '#models/exam'
import { DateTime } from 'luxon'

export default class ExamAttemptsController {
  /**
   * Start or continue an exam attempt
   */
  async start({ auth, params, response }: HttpContext) {
    const user = auth.user!
    const examId = Number(params.examId)

    // Ensure exam exists
    const exam = await Exam.findOrFail(examId)

    // Find or create exam-user record
    let examUser = await ExamUser.findBy({ user_id: user.user_id, examId })
    if (!examUser) {
      examUser = await ExamUser.create({
        userId: user.user_id,
        examId,
        noOfQuestions: exam.noOfQuestions,
        noOfAttempts: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
      })
    }

    return response.json({ exam, progress: examUser })
  }

  /**
   * Submit answers and update stats
   */
  async submit({ auth, params, request, response }: HttpContext) {
    const user = auth.user!
    const examId = Number(params.examId)

    const { correctCount, wrongCount, timeElapsed } = request.only([
      'correctCount',
      'wrongCount',
      'timeElapsed',
    ])

    // Find exam-user record
    const examUser = await ExamUser.findByOrFail({ userId: user.user_id, examId })

    // Update stats
    examUser.noOfAttempts += 1
    examUser.lastAttempted = DateTime.now()
    examUser.timeElapsed = timeElapsed
    examUser.correctAnswers += correctCount
    examUser.wrongAnswers += wrongCount

    await examUser.save()

    return response.json({ message: 'Exam submitted', progress: examUser })
  }
}
