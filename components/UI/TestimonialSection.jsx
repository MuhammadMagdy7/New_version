// components/UI/TestimonialSection.jsx
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    quote: "Version AVI transformed our corporate events with their cutting-edge audio-visual solutions. The quality and professionalism were unmatched!",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    company: "Global Events Ltd.",
    quote: "Working with Version AVI made our international conference a breeze. Their team's expertise and state-of-the-art equipment elevated our event to new heights.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Solutions Co.",
    quote: "Version AVI's innovative approach to our product launch event left our audience in awe. Their attention to detail and creativity made all the difference.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];
const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonialContent = useMemo(() => (
    <AnimatePresence mode="wait">
      <motion.div 
        key={currentTestimonial}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center"
      >
        <Image
          src={testimonials[currentTestimonial].image}
          alt={testimonials[currentTestimonial].name}
          width={96}
          height={96}
          className="rounded-full mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <blockquote className="text-lg italic mb-4">"{testimonials[currentTestimonial].quote}"</blockquote>
          <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
          <p className="text-gray-600">{testimonials[currentTestimonial].company}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  ), [currentTestimonial]);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        {currentTestimonialContent}
        <div className="flex justify-between mt-8">
          <motion.button 
            onClick={prevTestimonial} 
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Previous
          </motion.button>
          <motion.button 
            onClick={nextTestimonial} 
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;