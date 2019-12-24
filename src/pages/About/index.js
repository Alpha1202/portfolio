import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Introduction from '../../components/Introduction/index';
import Skills from '../../components/Skills/index';
import Footer from '../../components/Footer/index';
import Experience from '../../components/Experience/Experience';
import img3 from '../../assests/smile.jpg';
import './index.css';

const About = () => {
	const [ intro, setIntro ] = useState(true);
	const [ skills, setSkills ] = useState(false);
	const [ exp, setExp ] = useState(false);

	const handleShowIntro = () => {
		setIntro(true);
		setSkills(false);
		setExp(false);
	};

	const handleShowSkills = () => {
		setIntro(false);
		setSkills(true);
		setExp(false);
	};
	const handleShowExp = () => {
		setIntro(false);
		setSkills(false);
		setExp(true);
	};

	return (
		<div>
			<div>
				<div className="container">
					<Navbar />
				</div>

				<div className="columns is-centered">
					<div className="column">
						<div className=" title has-text-centered txt">About Me</div>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<div className="columns">
							<div className="column is-5">
								<div className="container">
									<figure class="image is-4by5">
										<img className="is-rounded" src={img3} alt="zuby.io" />
									</figure>
								</div>
							</div>
							<div className="column is-7">
								<div className="level justify">
									<button type="button" onClick={handleShowIntro}>
										Introduction
									</button>
									<button type="button" onClick={handleShowSkills}>
										Skills
									</button>
									<button type="button" onClick={handleShowExp}>
										Experience
									</button>
								</div>
								{intro && <Introduction />}
								{skills && <Skills />}
								{exp && <Experience />}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
