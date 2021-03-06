import React from 'react';
import { 
    CarouselProvider,
    Slider, 
    Slide, 
    Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const img1 = 'https://res.cloudinary.com/de8vrxbqq/image/upload/v1577503726/portfolio/smile_v6uaua.jpg';
// import img1 from '../../assests/smile.jpg';



export default function Carousel() {
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={35}
        totalSlides={3}
        interval={5000}
        isPlaying={true}
      >
          <Slider>
          <Slide index={0}>
              <Image src={img1} alt='zuby.io' />
          </Slide>
          <Slide index={1}>
          <Image src={img1} alt='zuby.io' />
          </Slide>
          <Slide index={2}>
          <Image src={img1} alt='zuby.io' />
          </Slide>
        </Slider>
        
      </CarouselProvider>
    )
}
