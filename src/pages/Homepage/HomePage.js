/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Mywork from '../../components/MyWork/Index';
import Recommendations from '../../components/Recommendations/Recommendations';
import Footer from '../../components/Footer/index';
import './homepage.css';

export default function HomePage() {
	return (
		<div>
			<div className="container">
				<Navbar />
			</div>
			<div className="section">
				<div className="container">
					<Carousel />
				</div>
			</div>

			<div className="section">
				<div className="container is-centered">
					<div className="columns is-mobile is-centered">
						<h1 className="title txt">My Work</h1>
					</div>
					<Mywork />
				</div>
			</div>

			<div className="section">
				<div className="container is-centered">
					<div className="columns is-mobile is-centered">
						<h1 className="title txt">Recommendations</h1>
					</div>
					<Recommendations />
				</div>
			</div>

			<Footer />
		</div>
	);
}
