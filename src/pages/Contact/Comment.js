/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import sendMail from '../../api/mail';
const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Comment() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ body, setBody ] = useState('');
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(false);

	const handleNameInput = (event) => {
		setName(event.target.value);
	};
	const handleEmailInput = (event) => {
		setEmail(event.target.value);
	};
	const handleMessageInput = (event) => {
		setBody(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!regex.test(email)) {
			return setError(true);
		}
		setLoading(true);
		const payload = {
			name,
			email,
			body
		};
		 db
			.collection('messages')
			.doc('msg')
			.set({
				payload
			})
			.then(() => {
				setLoading(false);
				// to the user
				sendMail({
					email,
					subject: 'Thank you',
					body: 'I have just received your message, I will take prompt action(s) as required'
				});
				//  to me
				sendMail({
					email: 'nzubennamani@gmail.com',
					subject: `You have a new message from ${name} with the email ${email}`,
					body: `Here's the message from ${email}: ${body}`
				})(
					toast.success('Yay!!!, I just recieved your message. Thank you for reaching out', {
						position: toast.POSITION.TOP_CENTER
					})
				);
				console.log('Document successfully written!');
			})
			.catch(function(error) {
				console.error('Error writing document: ', error);
			});
	};
	const handleCancel = () => {
		setName('');
		setEmail('');
		setBody('');
	};

	return (
		<div>
			<div className="field-wrapper">
				<p className="sub-title has-text-centered has-text-black-ter has-text-weight-bold is-capitalized">
					I really love to hear from you. You can contact me or drop a comment/Recommendation Below
				</p>
				<div className="field">
					<label className="label">Name</label>
					<div className="control has-icons-left">
						<input
							className="input"
							value={name}
							onChange={handleNameInput}
							type="text"
							placeholder="Please tell me your name"
						/>
						<span className="icon is-small is-left">
							<i className="fas fa-user-tie" />
						</span>
					</div>
				</div>
				<div className="field">
					<label className="label">Email</label>
					<div className="control has-icons-left has-icons-right">
						<input
							className="input"
							type="email"
							onChange={handleEmailInput}
							placeholder="Please enter your email address"
							value={email}
						/>
						<span className="icon is-small is-left">
							<i className="fas fa-envelope" />
						</span>
						<span className="icon is-small is-right">
							<i className="fas fa-exclamation-triangle" />
						</span>
					</div>
					{error && <p className="help is-danger">Ooopss!!, something is wrong with your email input</p>}
				</div>
				<div className="field">
					<label className="label">Message</label>
					<div className="control">
						<textarea
							className="textarea"
							value={body}
							onChange={handleMessageInput}
							placeholder="Contact me || comment || Write me a Recommendation"
						/>
					</div>
				</div>

				<div className="field is-grouped btn-wrap">
					<div className="control">
						{loading ? (
							<button className="button ht has-text-centered is-link is-loading">send</button>
						) : (
							<button className="button ht has-text-centered is-link" onClick={handleSubmit}>
								send
							</button>
						)}
					</div>
					<div className="control">
						<button
							className="button ht has-text-danger is-outlined is-link is-light"
							onClick={handleCancel}
						>
							changed Your Mind?
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
