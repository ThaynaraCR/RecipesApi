
const {templateFactory} = require('../config/templateMail')
const htmlTemplate = templateFactory()
const nodemailer = require('nodemailer');
      
const emailController = {

    newEmail: async (email) => {

        const user = process.env.EMAIL_USER;
        const pass = process.env.EMAIL_PASS;
        const host = process.env.EMAIL_HOST;
        const port = process.env.EMAIL_PORT;
        const transporter = nodemailer.createTransport({
            host,
            port,
            auth: {
                user,
                pass
            }
        })

        transporter.sendMail({
            from: user,
            to: email, 
            replyTo: user,
            subject: "Welcome to recipes", 
            html: htmlTemplate
        }).then(info => {
            console.log("enviado", info)
        }).catch(error => {
            console.log("error", error)
        })

    }
}

module.exports = emailController
        