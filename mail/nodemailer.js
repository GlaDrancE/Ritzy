const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "ayushr1606@gmail.com", // your Outlook email address
    pass: "Ayush123", // your Outlook email password
  },
  tls: {
    ciphers: "SSLv3",
  },
});
// Route to handle POST requests
app.post("/send-mail", (req, res) => {
  // Store the request body in a variable
  const requestData = req.body;
  // Set up email data with unicode symbols
  let mailOptions = {
    from: '"Your Name" ayushr1606@gmail.com', // sender address
    to: "ayushr16060@gmail.com", // list of receivers
    subject: `Message From: ${requestData.name}`, // Subject line
    html: `Name: ${requestData.name}
    <br/>Email: ${requestData.email}
    <br/>Contact: ${requestData.contact}
    <br/>Budget: ${requestData.budget}
    <br/>Message: ${requestData.message}`,
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log(requestData);
    res.json({ status: 200, message: "Sent " });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
