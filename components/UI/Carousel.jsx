import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const slides = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
    'https://via.placeholder.com/800x400?text=Slide+4'
  ];
const HomeCarousel = () => {
  return (
    <div data-aos="fade-down">

    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={5000}
      transitionTime={500}
      >
        {slides.map((slide, idx)=> (
            <div key={idx}>
      <img src={slide} alt="حفلة راقصة" />
      <p className="legend">أفضل حفلات الرقص في المدينة</p>
    </div>
        ))}
    </Carousel>
        </div>
  );
};

export default HomeCarousel;