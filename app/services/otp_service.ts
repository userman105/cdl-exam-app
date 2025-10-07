import Handlebars from 'handlebars'
import fs from 'fs'
import mail from '@adonisjs/mail/services/main'
import path from 'path'

export async function sendOtpMail(user: any, otp_code: string) {
  const templatePath = path.resolve('resources/templates/otp.hbs')
  const template = fs.readFileSync(templatePath, 'utf-8')

  const html = Handlebars.compile(template)({
    user,
    otp_code,
    year: new Date().getFullYear(),
  })

  await mail.send((message) => {
    message
      .to(user.email)
      .from('commandaaa@gmail.com')
      .subject('Your OTP Code')
      .html(html)

    const logoPath = path.resolve('resources/images/logo.png')
    if (fs.existsSync(logoPath)) {
      message.embed(logoPath, 'logo_cid')
    } else {
      console.warn(' Logo image not found at', logoPath)
    }
  })
}
