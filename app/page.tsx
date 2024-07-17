"use client"

import TrustedBySection from "@/components/UI/Trusted";
import  Hero  from "@/components/UI/Hero";
import  HomeCarousel  from "@/components/UI/Carousel";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
<>

<HomeCarousel />

    <Hero />
      <TrustedBySection />
      {/* <GetStarted /> */}

</>
  );
}