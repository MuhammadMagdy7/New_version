//app/page.tsx
"use client";

import { motion } from "framer-motion";
import TrustedBySection from "@/components/UI/Trusted";
import Hero from "@/components/UI/Hero";
import HomeCarousel from "@/components/UI/Carousel";
import Events from "@/components/UI/Events";
import GetStarted from "@/components/Layout/CardWork";
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
      <div className="container pb-12 space-y-16">
        <TrustedBySection />
        <hr className="border-t-2 border-gray-300 my-4" />

        <h2 className="text-3xl font-extrabold text-center">Portfolio</h2>
        <Events />

        <hr className="border-t-2 border-gray-300 my-4" />
      </div>

      <GetStarted />
    </motion.div>
  );
}
