const nodemailer = require("nodemailer");
const CONTACTS = require("../model/contactModel");
require("dotenv").config();




const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});


const sendEmailToContact = async (contactEmail, contactName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: contactEmail,
    subject: "Hello World",
    text: `Hello, ${contactName},\n\nThis is a test email sent from your contact app!`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${contactEmail}: ${info.response}`);
    return { success: true, response: info.response };
  } catch (error) {
    console.error(`Error sending email to ${contactEmail}: ${error}`);
    return { success: false, error: error.message };
  }
};

module.exports = {sendEmailToContact};

