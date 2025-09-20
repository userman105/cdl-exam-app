import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import CredentialHistory from '#models/credentials_history'

export default class UserController {
  /**
   * PATCH /profile
   * Allows a user to update username, mobile number, or password
   * Requires old password if changing the password
   * Stores old username and password in CredentialHistory
   */
  async updateProfile({ request, response, auth }: HttpContext) {
    const user = auth.user!
    const { userName, mobileNumber, oldPassword, newPassword } = request.only([
      'userName',
      'mobileNumber',
      'oldPassword',
      'newPassword',
    ])

    let updated = false
    let oldUserName: string | null = null
    let oldPasswordHash: string | null = null


    if (userName && userName !== user.userName) {
      oldUserName = user.userName
      user.userName = userName
      updated = true
    }


    if (mobileNumber && mobileNumber !== user.mobileNumber) {
      user.mobileNumber = mobileNumber
      updated = true
    }


    if (newPassword) {
      if (!oldPassword) {
        return response.status(400).json({ error: 'Old password is required' })
      }

      const isValid = await hash.verify(user.password, oldPassword)
      if (!isValid) {
        return response.status(401).json({ error: 'Invalid old password' })
      }

      oldPasswordHash = user.password // store old hash
      user.password = newPassword // auto-hashed in model
      updated = true
    }

    if (updated) {
      await user.save()


      if (oldUserName || oldPasswordHash) {

        await CredentialHistory.create({
          userId: user.user_id,
          // @ts-ignore
          oldUserName,
          // @ts-ignore
          oldPassword: oldPasswordHash,
        })
      }

      return response.json({ message: 'Profile updated successfully', user })
    } else {
      return response.json({ message: 'No changes made' })
    }
  }
}
