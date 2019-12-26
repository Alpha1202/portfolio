import React from 'react';
import skills from '../../assests/skills';

export default function index() {
	return (
		<div className="section">
			<div className="container">
				<div className="columns">
					<div className="column is-full">
						<article className="message">
							<div className="message-header">
								<p className="title has-text-white">Technical Skills</p>
							</div>
							<div className="message-body has-text-weight-bold">
								{skills.technical.map((skill) => (
									<div className="tag is-uppercase is-size-6">{skill}</div>
								))}
							</div>
						</article>
					</div>
				</div>
				<div className="column is-full">
					<article className="message">
						<div className="message-header">
							<p className="title has-text-white">Non-Technical Skills</p>
						</div>
						<div className="message-body has-text-weight-bold">
							{skills.non_technical.map((skill) => (
								<div className="tag is-uppercase is-size-6">{skill}</div>
							))}
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}
