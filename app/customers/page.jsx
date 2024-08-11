// app/customers/page.jsx
"use client";

import { motion } from 'framer-motion';
import TrustedBySection from '@/components/UI/Trusted';
import TestimonialSection from '@/components/UI/TestimonialSection';
import CustomerStories from '@/components/UI/CustomerStories';
import HeaderSec from '@/components/Layout/Header';

const Customers = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #69CCDF, #EA3478)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  return (
    // className="bg-gradient-to-b from-blue-50 via-white to-blue-50 "
    <div >
      <div className="container mx-auto px-4 py-16">
        <HeaderSec title="Our Success Partners" />
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 py-20"
        >
          <TrustedBySection />
        </motion.section>

        <hr className="border-t-2 border-gray-300 my-4" />

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          
          <h2 style={gradientStyle} className="text-5xl font-bold text-center my-8 pt-16">Our Clients' Experiences</h2>
          <TestimonialSection />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 style={gradientStyle} className="text-6xl mb-28 font-extrabold text-center text-gray-800">Success Stories</h2>
          <CustomerStories />
        </motion.section>
      </div>
    </div>
  );
}

export default Customers;