import { prisma } from './prisma';
import nodemailer from 'nodemailer';
import express from 'express';

const app = express();

app.use(express.json());

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d232549752d124",
      pass: "5eb56d3ebcb8ce"
    }
  });

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

const feedback = await prisma.feedback.create({
    data: {
        type,
        comment,
        screenshot,
    }
})

await transport.sendMail({
    from: 'Equipe feedget <oi@feedget.com>',
    to: 'William Martins <williammds00@gmail.com>',
    subject: 'Novo feedback',
    html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #222;">`,
        `<p>Tipo do feedback: ${type}<p/>`,
        `<p>Comentário: ${comment}<p/>`,
        `</div>`
    ].join('\n')
})

return res.status(201).json({data: feedback})
});

app.listen(3333, () => {
console.log('HTTP server running!')
});
