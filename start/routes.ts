import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller'
import {middleware} from "#start/kernel";
import UserController from "#controllers/users_controller";
import ExamAttemptsController from "#controllers/exam_attempts_controller";
import ExamsController from "#controllers/exams_controller";


router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])
// dev only
router.post('/exams', [ExamsController, 'create'])

router.get('/exams/index',[ExamsController, 'index'])
router.get('/exams/:examId', [ExamsController, 'show'])
router.post('/exams/:examId/start', [ExamAttemptsController, 'start'])
router.get('/exam-attempts/:id',[ExamAttemptsController,'showExam'])
router.post('/exams/:examId/submit', [ExamAttemptsController, 'submit'])
router.post('/exams/:examId/pause', [ExamAttemptsController, 'pause'])
router.post('/:examId/resume', [ExamAttemptsController, 'resume'])

router
  .group(() => {
    router.get('/me', [AuthController, 'me'])
    router.post('/logout', [AuthController, 'logout'])
    router.patch('/profile', [UserController,'updateProfile'])
  })
  .middleware([middleware.auth()])
