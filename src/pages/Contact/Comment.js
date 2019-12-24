import React from 'react';

export default function Comment() {
	return (
		<div>
			<div className="field-wrapper">
				Comment or Recommendations
				<div class="field">
					<label className="label">Name</label>
					<div className="control">
						<input className="input" type="text" placeholder="Text input" />
					</div>
				</div>
				<div className="field">
					<label className="label">Email</label>
					<div className="control has-icons-left has-icons-right">
						<input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
						<span className="icon is-small is-left">
							<i className="fas fa-envelope" />
						</span>
						<span className="icon is-small is-right">
							<i className="fas fa-exclamation-triangle" />
						</span>
					</div>
					<p className="help is-danger">This email is invalid</p>
				</div>
				<div className="field">
					<label className="label">Message</label>
					<div className="control">
						<textarea className="textarea" placeholder="Textarea" />
					</div>
				</div>
				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Submit</button>
					</div>
					<div className="control">
						<button className="button is-link is-light">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
}
