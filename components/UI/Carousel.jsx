

// components/UI/Carousel.jsx
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';

// ... (الجزء الخاص بـ slides يبقى كما هو)
const slides = [
  {
    image: '/img/version3.jpg',
    legend: 'A professional team to meet your needs'
  },
  {
    image: '/img/version2.jpg',
    legend: "An amazing audiovisual experience"
  },
  {
    image: '/img/version1.jpg',
    legend: "The latest technologies to bring your events to life"
  },
  {
    image: '/img/version4.jpg',
    legend: "The best dance parties in the city"
  }
];
const HomeCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        transitionTime={500}
        className="h-[70vh]"
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="h-[70vh]">
            <img src={slide.image} alt={slide.legend} className="object-cover h-full w-full" />
            <p className="legend text-xl font-bold">{slide.legend}</p>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default HomeCarousel;