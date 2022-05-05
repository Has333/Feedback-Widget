import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d232549752d124",
    pass: "5eb56d3ebcb8ce",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "William Martins <williammds00@gmail.com>",
      subject,
      html: body,
    });
  }
}
