/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<div className="navbar-start">
					<Link to="/homepage" className="navbar-item">
						<div className="container">
							<div className="title logo-text">
								<h1>zuby.io</h1>
							</div>
						</div>
					</Link>

					<a
						role="button"
						className="navbar-burger burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
					<Link to="/homepage" className="navbar-item">
						Home
					</Link>

					<Link to="/about" className="navbar-item">
						About
					</Link>
					<Link to="/blog" className="navbar-item">
						Blog
					</Link>

					<div className="navbar-item is-hoverable">
						<div className="navbar-link">
							<Link to="/contact">Let's Meet!!</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
