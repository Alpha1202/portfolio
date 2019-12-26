/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Comment() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ body, setBody ] = useState('');
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(false)

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
		setLoading(true)
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
				callBackendAPI()
				setLoading(false)
				(toast.success('Yay!!!, I just recieved your message. Thank you for reaching out', {
					position: toast.POSITION.TOP_CENTER,
				  })
				  )
				// .then((res) => console.log(res))
				// .catch((err) => console.log(err));
				// callBackendAPI({
				// 	email: 'nzubennamani@gmail.com',
				// 	subject: ' New Message',
				// 	text: payload.body
				// })
				// 	.then((res) => console.log(res))
				// 	.catch((err) => console.log(err));
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
	const callBackendAPI = async () => {
		// const payload = {email, subject, text}
		const response = await fetch('/api/send_email');
		// const body = await response.json();
		console.log(response)

		// if (response.status !== 200) {
		// 	throw Error(body.message);
		// }
		// console.log(body);
		// return body;
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
							<button className="button ht has-text-centered is-link is-loading">
							send
						</button>
						): (
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
