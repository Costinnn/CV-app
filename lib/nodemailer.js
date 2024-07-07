// sending email 1/2

// npm i nodemailer
// get "App Password" from Google accound + email

import nodemailer from "nodemailer";

const email = process.env.NODEMAILER_EMAIL;
const pw = process.env.NODEMAILER_PW;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pw,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
