/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './index.css';

import HomePage from '../Homepage/HomePage';
import LandingPage from '../../components/LandingPage/LandingPage';

const Landing = () => {
	const [ home, setHome ] = useState(false);

	const handleClick = () => {
		setHome(true);
	};
	return !home ? <LandingPage handleClick={handleClick} /> : <HomePage />;
};

export default Landing;
