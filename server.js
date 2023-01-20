const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const template = require("./template");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const message = "Hi there, you were emailed me through nodemailer";
let mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_RECEIVER,
  subject: "Sending Email using Node.js",
  text: message,
  html: template(message),
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
