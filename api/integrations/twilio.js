const nodemailer = require('nodemailer');
const axios = require('axios')

let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: "apikey",
    pass: "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"
  }
})


const sendEmail = async (message, onSuccess, onFail) => {

      // send mail with defined transport object
  await transporter.sendMail({
    from: 'waruodaniel@gmail.com', // sender address
    to: "wambu43@gmail", // list of receivers
    subject: "Created Order", // Subject line
    text: message, // plain text body
  }).catch((err) => {
      console.log(err)
  })

  
}

module.exports= sendEmail
