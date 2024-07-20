// app/customers/page.jsx
"use client";

import { motion } from 'framer-motion';
import TrustedBySection from '@/components/UI/Trusted';
import TestimonialSection from '@/components/UI/TestimonialSection';
import CustomerStories from '@/components/UI/CustomerStories';
import HeaderSec from '@/components/Layout/Header';

const Customers = () => {
  return (
    // className="bg-gradient-to-b from-blue-50 via-white to-blue-50 "
    <div >
      <div className="container mx-auto px-4 py-16">
        <HeaderSec title="Our Success Partners" />
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <TrustedBySection />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          
          <h2 className="text-5xl font-bold text-center mb-8 text-primaryColor">Our Clients' Experiences</h2>
          <TestimonialSection />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Success Stories</h2>
          <CustomerStories />
        </motion.section>
      </div>
    </div>
  );
}

export default Customers;