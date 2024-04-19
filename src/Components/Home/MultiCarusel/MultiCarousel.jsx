import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MultiCarouselWrapper from './MultiCarouselWrapper';
import { MultiCarousel } from '../../../MockData/carouselmock';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1
  },
  tablet: {
    breakpoint: { max: 900, min: 700 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1.5,
    slidesToSlide: 1, // optional, default to 1
    
  }
};

const MultiCarouselComponent = () => {

  const carousel = MultiCarousel.maindata.map((item) => <MultiCarouselWrapper 
  name={item.car.name}
  img={item.car.photo}
  />);
  return (
    <div style={{zIndex:3}}>
      <Carousel 
  showDots={true}
  responsive={responsive}
  infinite
  autoPlay
  autoPlaySpeed={3000}
  transitionDuration={1500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
      >
   {carousel}
  </Carousel>
    </div>
  )
}

export default MultiCarouselComponent
