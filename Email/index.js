const nodemailer = require('nodemailer');

const senderEmail = 'EmailRemetente@gmail.com'
const passEmail = 'senhaEmailRemetente'
const recipient = 'EmailDestinatario1@yahoo.com.br, EmailDestinatario2@gmail.com'

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: senderEmail,
        pass: passEmail
    }
});

transporter.sendMail({
    from: "Nome Remetente <" + senderEmail + ">",
    to: recipient,
    subject: "Envio de e-mail com Nodemailer",
    text: "Olá, sou Remetente e estou gostando muito da lab nodemailer",
    html: "Olá meu nome é Remetente, e eu acho o <a href='https://nodemailer.com/about/'>nodemailer</a> muito legal!"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})