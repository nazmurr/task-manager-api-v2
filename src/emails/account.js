const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hi@nrwebsoft.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hi@nrwebsoft.com',
        subject: 'We are sorry to see you go!',
        text: `Hi ${name}, we are sorry to see you go! Let us know if we can do anything to keep you entertained. Thanks.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
