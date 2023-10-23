const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

const sendMail = async (data) => {

    const {name, email, stack, message} = data

    if(!name || !email || !stack || ! message ) return 'Fields to send email are incomplete'

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `Portfolio work ${stack}`,
        html:`<h1>Hola soy ${name}</h1><h2>Mi email de contacto es ${email}</h2><br><br><h3>Sobre que quiero trabajar:</h3><br><p>${message}</p>`
    }

    try {
        transporter.sendMail(mailOptions)
        return 'Mail enviado correctamente'
    } catch (error) {
        console.log(error)
    }

}

module.exports = sendMail