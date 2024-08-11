//app/page.tsx
"use client";

import { motion } from "framer-motion";
import TrustedBySection from "@/components/UI/Trusted";
import Hero from "@/components/UI/Hero";
import HomeCarousel from "@/components/UI/Carousel";
// import Events from "@/components/UI/Events";
// import GetStarted from "@/components/Layout/CardWork";
import VideoSection from "@/components/UI/VideoSection";


import dynamic from 'next/dynamic';

const DynamicEvents = dynamic(() => import('@/components/UI/Events'), {
  loading: () => <p>Loading...</p>,
});

const DynamicGetStarted = dynamic(() => import('@/components/Layout/CardWork'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      className="min-h-screen pb-12"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <HomeCarousel />
      <Hero />
      <VideoSection />
      <div className="container pb-12 space-y-16">
        <TrustedBySection />
        <hr className="border-t-2 border-gray-300 my-4" />

        {/* <h2 className="text-3xl font-extrabold text-center">Portfolio</h2> */}
        <h1 className="text-4xl font-extrabold text-center leading-tight space-x-2">
    <span className="text-blue-300">P</span>
    <span className="text-blue-500">o</span>
    <span className="text-blue-600">r</span>
    <span className="text-purple-400">t</span>
    <span className="text-purple-500">f</span>
    <span className="text-red-300">o</span>
    <span className="text-red-500">l</span>
    <span className="text-red-700">i</span>
    <span className="text-red-900">o</span>
</h1>
        <DynamicEvents />
        {/* <Events /> */}

        <hr className="border-t-2 border-gray-300 my-4" />
      </div>


      <DynamicGetStarted />
    </motion.div>
  );
}
