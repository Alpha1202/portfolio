import React from 'react';
import Comment from './Comment';
import Contact from './Contact';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/index';

export default function ContactPage() {
	return (
		<div>
			<div className="container">
				<Navbar />
			</div>
			<div className="section">
				<div className="mother">
					<div className="columns">
						<div className="column is-6">
							<Comment />
						</div>
						<div className="column is-6">
							<Contact />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
