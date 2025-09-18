import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller'
import {middleware} from "#start/kernel";
router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])
import UserController from "#controllers/users_controller";

router
  .group(() => {
    router.get('/me', [AuthController, 'me'])
    router.post('/logout', [AuthController, 'logout'])
    router.resource('exams', '#controllers/exams_controller').apiOnly()
    router.patch('/profile', [UserController,'updateProfile'])
  })
  .middleware([middleware.auth()])
