import axios from "axios";

const MAIL_URL = 'https://zuby-portfolio-backend.herokuapp.com/api/v1/send_mail'

const sendMail = async ({email, subject, body}) => {
    return await axios.post(MAIL_URL, {email, subject, body}, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
        
    })
    .catch((error) => {
        
    })
  }

export default sendMail;