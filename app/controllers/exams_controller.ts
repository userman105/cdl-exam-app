// app/controllers/exams_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import Exam, { ExamType } from '#models/exam'
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

    const { title, questionIds, examType } = request.only(['title', 'questionIds', 'examType'])

    // Validate examType
    if (examType && !Object.values(ExamType).includes(examType)) {
      return response.status(400).json({
        error: 'Invalid exam type. Must be one of: combination, airbrakes, general'
      })
    }

    // Create exam record with examType
    const exam = await Exam.create({
      title,
      noOfQuestions: questionIds.length,
      examType: examType || ExamType.COMBINATION, // Default to combination if not provided
    })

    // Link questions
    const examQuestions = questionIds.map((qid: number) => ({
      examId: exam.examId,
      questionId: qid,
    }))
    await ExamQuestion.createMany(examQuestions)

    return response.status(201).json({
      message: 'Exam created successfully',
      exam: {
        examId: exam.examId,
        title: exam.title,
        noOfQuestions: exam.noOfQuestions,
        examType: exam.examType,
        createdAt: exam.createdAt,
        updatedAt: exam.updatedAt,
      },
      questions: questionIds,
    })
  }

  /**
   * Get all exams
   */
  async index({ response }: HttpContext) {
    const exams = await Exam.query().select('examId', 'title', 'noOfQuestions', 'examType', 'createdAt')
    return response.json(exams)
  }

  /**
   * Get single exam with questions
   */
  async show({ params, response }: HttpContext) {
    try {
      const exam = await Exam.query()
        .where('examId', params.examId)
        .preload('questions')
        .firstOrFail()

      return response.json(exam)
    } catch (error) {
      console.log(error)
      return response.status(404).json({ error: 'Exam not found' })
    }
  }
}
