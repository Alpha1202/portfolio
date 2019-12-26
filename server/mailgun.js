const mailgun = require('mailgun-js')
require('dotenv').config();

const DOMAIN = process.env.mailgun_API_BASE_URL;
const api_key = process.env.mailgun_API_KEY;

const mg = mailgun({
    apiKey: '3cf739ec30d4231642e67b759b48cd70-e470a504-e867c34c', 
    domain: 'https://api.mailgun.net/v3/sandboxff7fd180605942a78cb66ca1d5f5f124.mailgun.org' 
   });

const sendMail = (messageInfo) => {
 const data = {
   from: messageInfo.from,
   to: messageInfo.to,
   subject: messageInfo.subject,
   text: messageInfo.text
 };

 mg.messages().send(data, (error, body) => {
   if (body) {
     console.log(body, 'here');
   }
   console.log(error);
 
 })
 ;
};

module.exports = sendMail ;

