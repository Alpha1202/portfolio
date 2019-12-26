const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const sendMail = require('./mailgun');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())


app.get("/api/send_email", function(req, res) {
  res.set("Content-Type", "application/json");

  const messageInfo = {
    to: 'nzubennamani@gmail.com', from: "info@zuby.io",
    subject: 'New Message',
    text: 'You have a new message'
  };
  
  sendMail(messageInfo)
  res.send('{"message":"Email sent."}');
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ message: 'Backend Server connected' });
});