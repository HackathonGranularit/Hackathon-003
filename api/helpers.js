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

const sendEmail = (message, onSuccess, onFail) => {

  transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err)
        onSuccess(err)
      } else {
        console.log(info)
        onFail(info);
      }
    }
  )
}

const getDistance = (destination, origin) => {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination}&origins=${origin}&key=${process.env.MAP_API_KEY}`
  axios.get(url)
    .then(resp => {
      let data = resp.data.rows[0].elements[0].distance.text
      const dist = data.split(" ")
      return dist[0]
    })
    .catch(err => {
        console.error(err);
    }); 
}

module.exports =  {
  sendEmail,
  getDistance
}
