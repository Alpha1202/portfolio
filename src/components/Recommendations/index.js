import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Recommendations from './Recommendations';

export default function index() {
	return (
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={40}
			totalSlides={3}
			interval={5000}
			isPlaying={true}
		>
			<Slider>
				<Slide index={0}>
					<Recommendations />
				</Slide>
				<Slide index={1}>
					<Recommendations />
				</Slide>
				<Slide index={2}>
					<Recommendations />
				</Slide>
			</Slider>
		</CarouselProvider>
	);
}
