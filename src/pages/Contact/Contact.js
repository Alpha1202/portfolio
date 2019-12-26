import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { merge, flash, rubberBand } from 'react-animations';
import './Contact.css';

const tadaFlip = merge(rubberBand, flash);
const bounceAnimation = keyframes`${tadaFlip}`;

const BouncyDiv = styled.div`animation: 3s ${bounceAnimation};`;

export default function Comment() {
	
	return (
		<div>
			<div className="anime has-text-centered is-centered">
				<BouncyDiv>Thanks For Stopping By</BouncyDiv>
			</div>
			<div className="socials-wrap">
				<div className="socials">
					<Link to="//twitter.com/Alpha11093135" target="_blank" className="icons-button twitter">
						<i className="fab fa-twitter" />
						<span />
					</Link>
					<Link to="//web.facebook.com/nnamani.nzubechi.5" target="_blank" className="icons-button facebook">
						<i className="fab fa-facebook-f" />
						<span />
					</Link>
					<Link
						to="//www.linkedin.com/in/nzubechukwu-nnamani-475151165/"
						target="_blank"
						className="icons-button linkedin"
					>
						<i className="fab fa-linkedin-in" />
						<span />
					</Link>
				</div>
			</div>
		</div>
	);
}
