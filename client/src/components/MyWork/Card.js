import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assests/coming_soon3.jpg';
import './style.css';

export default function Card() {
	return (
		<div className="section">
			<div className="card">
				<header className="card-header">
					<p className="card-header-title is-centered">Project Title</p>
				</header>
				<div className="card-content">
					<div className="content">
						<img src={img2} alt="zuby.io works" />
						<div className="overlay">
							<div className="text">
								<div className="overall">
									<h4 className="title desc">Description</h4>
									<div className="wrap">
										<p className="mb-2">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
									</div>
								</div>
								<div className="container">
									<h4 className="title desc">Tech Stack</h4>
									<div>
										<span className="tag">Javascript</span>
										<span className="tag">Javascript</span>
										<span className="tag">Javascript</span>
										<span className="tag">Javascript</span>
										<span className="tag">Javascript</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer className="card-footer">
					<Link to="#" className="card-footer-item">
						Demo
					</Link>
					<Link to="#" className="card-footer-item">
						Source code
					</Link>
					<Link to="#" className="card-footer-item">
						Leave a Comment
					</Link>
				</footer>
			</div>
		</div>
	);
}
