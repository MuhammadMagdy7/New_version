// app/services/page.jsx
"use client";

import FeaturesSection from "@/components/UI/Feature"
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      <FeaturesSection />
    </motion.div>
  )
}

export default Services