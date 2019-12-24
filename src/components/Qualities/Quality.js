import React, { useState } from 'react';
import quality from '../../assests/data';
import useInterval from '../hooks/useInterval';
import _ from 'underscore';
import './Quality.css';

export default function Quality() {
	const [ qualities, setQualities ] = useState([ 'Passionate', 'Excellent', 'Innovative', 'Committed' ]);
	const filterQualityArray = () => {
		const filteredQualityArray = _.sample(quality, 4);

		setQualities(filteredQualityArray);
	};

	useInterval(() => {
		filterQualityArray();
	}, 1500);

	return (
		<div className="skills has-text-centered test">
			<h2 className="title has-text-weight-bold">
				{qualities.map((quality,) => {
					
					return (
						<strong>
							<span className="container qualities">{quality}</span>
						</strong>
					);
				})}
			</h2>
		</div>
	);
}
