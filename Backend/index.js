const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hello...");
});

// POST route to send email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
    secure: true,
  });

  const mailOptions = {
    from: email,
    to: process.env.USER_EMAIL,
    subject: `New message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("🚀 ~ error:", error);
      return res.status(500).send(error.toString());
    } else {
      console.log("🚀 ~  info.response:", info.response);
      res.status(200).send("Email sent: " + info.response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
