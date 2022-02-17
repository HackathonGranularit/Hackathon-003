const nodemailer = require("nodemailer");

// a node-mailer function to send emails
const sendEmail = async (req, res) => {

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "8c65a3f7e892e2",
            pass: "0bc97ae29bdb23"
        }
    });

    try {
        // use the transporter to send the email
        let info = await transporter.sendMail({
            from: req.body.sender,
            to: req.body.receiver,
            subject: req.body.subject,
            text: req.body.email_body,
        })
        console.log(info)

        res.status(200).json({
            message: "Email sent",
            info: info
        });
    } catch (error) {
        res.status(500).json({message:"Cant send email check logs"});
        console.error(error);
    }
}

module.exports = sendEmail;