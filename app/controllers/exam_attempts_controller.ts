import type { HttpContext } from '@adonisjs/core/http'
import ExamUser from '#models/exam_user'
import Exam from '#models/exam'
import { DateTime } from 'luxon'
import Answer from '#models/answer'

export default class ExamAttemptsController {
  /**
   * Start or resume an exam attempt
   */

  async showExam({ params, response }: HttpContext) {
    try {
      const exam = await Exam.query()
        .where('examId', params.id)
        .preload('questions')
        .firstOrFail()

      const questionsWithAnswers = await Promise.all(
        exam.questions.map(async (question) => {
          const correctAnswer = await Answer.find(question.correctAnswerId)

          if (!correctAnswer) {
            throw new Error(`No correct answer found for question ${question.questionId}`)
          }

          // Dynamic wrong answer calculation based on exam type
          let wrong1Id: number
          let wrong2Id: number

          if (exam.examType === 'airbrakes') {
            // Airbrakes: questions 65-135
            const offset = question.questionId - 65
            wrong1Id = 264 + offset * 2
            wrong2Id = 265 + offset * 2
          } else if (exam.examType === 'general') {
            // General: questions 136+
            const offset = question.questionId - 136
            wrong1Id = 501 + 2 * offset
            wrong2Id = 502 + 2 * offset
          } else {
            // Combination or default: original formula
            wrong1Id = 64 + (question.questionId - 1) * 2 + 1
            wrong2Id = 64 + (question.questionId - 1) * 2 + 2
          }

          const wrongAnswers = await Answer.query().whereIn('answerId', [wrong1Id, wrong2Id])

          // shuffle answers
          const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5)

          return {
            questionId: question.questionId,
            questionText: question.questionText,
            questionTextAr: question.questionTextAr,
            answers: allAnswers.map((a) => ({
              answerId: a.answerId,
              answerText: a.answerText,
              answerTextAr: a.answerTextAr,
            })),
          }
        })
      )

      return response.json({
        examId: exam.examId,
        title: exam.title,
        examType: exam.examType,
        totalQuestions: questionsWithAnswers.length,
        questions: questionsWithAnswers,
      })
    } catch (error) {
      console.error(error)
      return response.status(500).json({ error: 'Failed to load exam' })
    }
  }

  async start({ auth, params, response }: HttpContext) {
    const user = auth.user!
    const examId = Number(params.examId)

    const exam = await Exam.findOrFail(examId)

    // Note: Your ExamUser model uses composite primary keys
    let examUser = await ExamUser.query()
      .where('userId', user.user_id)
      .where('examId', examId)
      .first()

    if (!examUser) {
      examUser = await ExamUser.create({
        userId: user.user_id,
        examId,
        noOfQuestions: exam.noOfQuestions,
        noOfAttempts: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        status: 'in_progress',
        currentQuestionId: 1,
      })
    }

    return response.json({ exam, progress: examUser })
  }

  /**
   * Submit a single question's answer
   */
  async submit({ auth, params, request, response }: HttpContext) {
    const user = auth.user!
    const examId = Number(params.examId)

    const { isCorrect, timeElapsed, isLastQuestion } = request.only([
      'isCorrect',
      'timeElapsed',
      'isLastQuestion',
    ])

    // Use query builder for composite key
    const examUser = await ExamUser.query()
      .where('userId', user.user_id)
      .where('examId', examId)
      .firstOrFail()

    examUser.lastAttempted = DateTime.now()
    examUser.timeElapsed = timeElapsed

    if (isCorrect) {
      examUser.correctAnswers += 1
    } else {
      examUser.wrongAnswers += 1
    }

    // Move to next question unless finished
    if (isLastQuestion) {
      examUser.status = 'finished'
    } else {
      examUser.currentQuestionId += 1
    }

    await examUser.save()

    return response.json({
      message: isCorrect ? 'Correct answer' : 'Wrong answer',
      progress: examUser,
    })
  }
  /**
   * Pause an exam attempt
   */
  async pause({ request, auth, response }: HttpContext) {
    const user = auth.user!
    const { examId, currentQuestionId, timeElapsed } = request.only([
      'examId',
      'currentQuestionId',
      'timeElapsed',
    ])


    const examUser = await ExamUser.query()
      .where('examId', examId)  // Fixed: using examId to match your model
      .where('userId', user.user_id)  // Fixed: using userId to match your model
      .firstOrFail()

    examUser.merge({
      currentQuestionId,
      timeElapsed,
      status: 'paused',
      lastAttempted: DateTime.now(),  // Update last attempted time
    })
    await examUser.save()

    return response.json({
      message: 'Exam paused successfully',
      progress: examUser
    })
  }
  /**
   * Resume exam attempt
   */
  async resume({ auth, params, response }: HttpContext) {
    const user = auth.user!
    const examId = Number(params.examId)

    const examUser = await ExamUser.query()
      .where('userId', user.user_id)
      .where('examId', examId)
      .firstOrFail()

    if (examUser.status === 'finished') {
      return response.badRequest({ error: 'Exam already finished' })
    }

    return response.json({
      message: 'Resuming exam',
      progress: examUser,
    })
  }
}
