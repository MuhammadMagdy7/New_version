//app/page.tsx
"use client";

import { motion } from "framer-motion";
import TrustedBySection from "@/components/UI/Trusted";
import Hero from "@/components/UI/Hero";
import HomeCarousel from "@/components/UI/Carousel";

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
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
      <TrustedBySection />
    </motion.div>
  );
}