const express = require("express");
const nodemailer = require('nodemailer');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

// let mailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'virajdoshi11@gmail.com',
//     pass: "" + process.env.GMAIL_PASS
//   }
// });
 
// let mailDetails = {
//   from: 'virajdoshi11@gmail.com',
//   to: 'virajdoshi11@gmail.com',
//   subject: 'SOMEONE LOOKED OUR WEBSITE',
//   text: 'From: ' + "<enter email here> \n" + "message"
// };

app.get("/", (req, res) => {
  // console.log("Heya");
  // mailTransporter.sendMail(mailDetails, function(err, data) {
  //   if(err) { console.log('Error Occurs'); }
  //   else { console.log('Email sent successfully'); }
  // });
  // res.sendFile(__dirname + "/public/index2.html");
  res.send("Hello, there")
})

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT)
})

// let mailDetails2 = {
//   from: "virajdoshi11@gmail.com",
//   to: 'senderEmail@gmail.com',
//   subject: 'Thanks for checking my Website',
//   text: "Hello, \n Thank you for checking my website and showing an interest\
//         in my work. I'll try to reach back to you ASAP."
// }
 
// mailTransporter.sendMail(mailDetails2, function(err, data) {
//   if(err) { console.log('Error Occurs'); }
//   else { console.log('Email sent successfully'); }
// });