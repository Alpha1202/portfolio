import React from 'react';
import Card from './Card';

export default function Index() {
	return (
		<div>
			<div className="columns">
				<div className="column is-4">
                    <Card />
                    </div>
				<div className="column is-4">
                    <Card />
                </div>
				<div className="column is-4">
                   <Card />
                </div>
				
			</div>
			<div className="columns">
				<div className="column is-4">
                  <Card />
                    </div>
				<div className="column is-4">
                    <Card />
                    </div>
				<div className="column is-4">
                    <Card />
                </div>
				
			</div>
		</div>
	);
}
