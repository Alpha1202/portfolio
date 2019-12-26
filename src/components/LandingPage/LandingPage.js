import React from 'react';
import ParticlesComponent from '../Particles/Particles';
import Button from '../Button/Button';
import Qualities from '../Qualities/Quality';


export default function LandingPage(props) {
	return (
		<div className="wrapper">
			<div className="container">
				<div className="title logo-text">
					<h1>zuby.io</h1>
				</div>
			</div>
			<Qualities />

			<div className="bg">
				<ParticlesComponent />

				<div className="centered">
					<Button handleClick={props.handleClick} />
				</div>
			</div>

			<div />
		</div>
	);
}
