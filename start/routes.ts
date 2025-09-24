import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller'
import {middleware} from "#start/kernel";
import UserController from "#controllers/users_controller";
import ExamAttemptsController from "#controllers/exam_attempts_controller";
import ExamsController from "#controllers/exams_controller";
import GoogleAuthController from "#controllers/google_auth_controller";

router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])
// dev only
router.post('/exams', [ExamsController, 'create'])


//google OAuth2
router.get('/auth/google', [GoogleAuthController, 'redirect'])
router.get('/auth/google/callback', [GoogleAuthController, 'callback'])
router.get('/exam-attempts/:id',[ExamAttemptsController,'showExam'])
router.post('/auth/google/callback', [GoogleAuthController, 'mobile'])

router
  .group(() => {
    router.get('/me', [AuthController, 'me'])
    router.post('/logout', [AuthController, 'logout'])
    router.patch('/profile', [UserController,'updateProfile'])
    router.post('/exams/:examId/submit', [ExamAttemptsController, 'submit'])
    router.post('/exams/:examId/pause', [ExamAttemptsController, 'pause'])
    router.post('/:examId/resume', [ExamAttemptsController, 'resume'])
    router.get('/exams/index',[ExamsController, 'index'])
    router.get('/exams/:examId', [ExamsController, 'show'])
    router.post('/exams/:examId/start', [ExamAttemptsController, 'start'])
  })
  .middleware([middleware.auth()])
