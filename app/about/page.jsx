"use client"

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import AboutSection from "@/components/UI/AboutSection"
import HeaderSec from "@/components/Layout/Header"

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

const About = () => {


  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <MotionDiv
      className="bg-gradient-to-b from-blue-50 to-white min-h-screen"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HeaderSec title="About Us" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AboutSection />
        </motion.div>
      </div>
    </MotionDiv>
  )
}

export default About