const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { render } = require("@react-email/render");
const { Contact } = require('./template/contact.jsx')
dotenv.config()
// Controlador para enviar correos electrónicos desde el formulario de contacto
const sendEmailHandler = async (data) => {
    const {
        name,
        email,
        stack,
        message
    } = data

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const emailHtml = render(Contact(data))

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        contactEmail: email,
        subject: stack,
        html: emailHtml,
    };
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new error;
    }
    return "Email successfully sent";
}

module.exports = sendEmailHandler