const nodemailer = require("nodemailer");
const EventEmitter = require("events");
const Customer = require("../models/Customer");
const emailEventsEmitter = new EventEmitter();

//This will emit events which our email function will listen to and then send appropriate emails
emailEventsEmitter.on("order-dispatched", async (order) => {
  try {
    const customer = await Customer.findOne({ id: order.customerId });
    const subject = `Order ID: ${order.orderID} has been Dispatched`;
    const emailBody = `Dear ${customer.name}, your order has been just dispatched, Sincerely`;
    console.log(subject);
    console.log(emailBody);
    emailSender("team2@granular.com", customer.email, subject, emailBody)
      .then((info) => console.log(info))
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
  }
});

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8c65a3f7e892e2",
    pass: "0bc97ae29bdb23",
  },
});
const emailSender = async (sender, receiver, subject, email_body) => {
  // use the transporter to send the email
  let info = await transporter.sendMail({
    from: sender,
    to: receiver,
    subject: subject,
    text: email_body,
  });
  //The function will either complete successfully and return info object
  // or throw an error!!
  return info;
};

module.exports = { emailEventsEmitter, emailSender };
