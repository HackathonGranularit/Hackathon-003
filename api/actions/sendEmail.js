const express = require('express');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');

function sendEmail(){
app.get('/mail/:someID', async (req, res) => {
    // someID is identifier to find data in db
    // it will come from localhost:PORT/mail/>>someID<<
    const { someID } = req.params; 
    let data;
    try {
        data = await mongoCol.FindOne({
            /* query */
        }); // reads data from mongo
    } catch (err) {
        return res.status(500).json(err);
    }

    // prepare content
    var text =
        'Hello {{name}} please find this email as an update to you project.\n' + data;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: 'group2021@gmail.com',
        to: 'edge@gmail.com',
        subject: 'Project Update',
        text: text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error Occured!', err);
            return res.status(500).json(err);
        } else {
            console.log('Email Sent!');
            return res.sendStatus(200);
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
}