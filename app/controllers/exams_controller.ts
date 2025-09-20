import type { HttpContext } from '@adonisjs/core/http'
import Exam from '#models/exam'
import ExamQuestion from '#models/exam_question'

export default class ExamsController {
  /**
   * Create a new exam (ADMIN only via ADMIN_KEY)
   */
  async create({ request, response }: HttpContext) {
    const { ADMIN_KEY } = process.env
    const providedKey = request.header('x-admin-key') || request.input('adminKey')

    if (!ADMIN_KEY || providedKey !== ADMIN_KEY) {
      return response.status(403).json({ error: 'Forbidden - invalid admin key' })
    }

    const { title, questionIds } = request.only(['title', 'questionIds'])

    // Create exam record
    const exam = await Exam.create({
      title,
      noOfQuestions: questionIds.length,
    })

    // Link questions
    const examQuestions = questionIds.map((qid: number) => ({
      examId: exam.examId,
      questionId: qid,

    }))

    await ExamQuestion.createMany(examQuestions)

    return response.status(201).json({
      message: 'Exam created successfully',
      exam,
      questions: questionIds,
    })
  }
}
