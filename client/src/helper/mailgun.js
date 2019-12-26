import mailgun from 'mailgun-js';

require('dotenv').config();

const DOMAIN = process.env.REACT_APP_mailgun_API_base_URL;
const api_key = process.env.REACT_APP_mailgun_api_Key;


const mg = mailgun({
     apiKey: '3cf739ec30d4231642e67b759b48cd70-e470a504-e867c34c', 
     domain: 'https://api.mailgun.net/v3/sandboxff7fd180605942a78cb66ca1d5f5f124.mailgun.org' 
    });

const sendMail = (email, subject, text) => {
	const data = {
		from: 'admin@zuby.io',
		to: email,
		subject: 'Thank you' || subject,
		text: 'I have recieved your message and I will urgently attend to it, Thanks for stopping by🤝' || text
	};

	mg.messages().send(data, (error, body) => {
		if (body) {
			console.log(body);
		}
		console.log(error);
	});
};

export default sendMail;
