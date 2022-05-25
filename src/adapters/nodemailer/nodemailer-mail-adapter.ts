import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapters"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b81bf8f9e9c473",
    pass: "28b14f9234be0e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Adalto Picotti <adaltopicotti.jr@gmail.com>',
      subject,
      html: body
    })
  }
}