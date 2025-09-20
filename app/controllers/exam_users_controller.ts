import type { HttpContext } from '@adonisjs/core/http'
import ExamUser from '#models/exam_user'

export default class ExamUsersController {
  /**
   * Pause an exam
   */
  async pause({ request, auth, response }: HttpContext) {
    const user = auth.user!
    const { examId, currentQuestionId, timeElapsed } = request.only([
      'examId',
      'currentQuestionId',
      'timeElapsed',
    ])

    const examUser = await ExamUser.query()
      .where('exam_id', examId)
      .andWhere('user_id', user.user_id)
      .firstOrFail()

    examUser.merge({
      currentQuestionId,
      timeElapsed,
      status: 'paused',
    })
    await examUser.save()

    return response.json({ message: 'Exam paused', examUser })
  }

  /**
   * Resume an exam
   */
  async resume({ request, auth, response }: HttpContext) {
    const user = auth.user!
    const { examId } = request.only(['examId'])

    const examUser = await ExamUser.query()
      .where('exam_id', examId)
      .andWhere('user_id', user.user_id)
      .firstOrFail()

    if (examUser.status !== 'paused') {
      return response.badRequest({ error: 'Exam is not paused' })
    }

    return response.json({
      message: 'Exam resumed',
      currentQuestionId: examUser.currentQuestionId,
      timeElapsed: examUser.timeElapsed,
    })
  }
}
