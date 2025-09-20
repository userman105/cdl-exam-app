import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller'
import {middleware} from "#start/kernel";
import UserController from "#controllers/users_controller";
import ExamAttemptsController from "#controllers/exam_attempts_controller";
import ExamsController from "#controllers/exams_controller";


router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])
router.post('/exams', [ExamsController, 'create'])

router
  .group(() => {
    router.get('/me', [AuthController, 'me'])
    router.post('/logout', [AuthController, 'logout'])
    router.post('/exams/:examId/start', [ExamAttemptsController, 'start'])
    router.post('/exams/:examId/submit', [ExamAttemptsController, 'submit'])
    router.patch('/profile', [UserController,'updateProfile'])
  })
  .middleware([middleware.auth()])
