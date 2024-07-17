"use client"
import AboutSection from "@/components/UI/AboutSection"
import Headersec from "@/components/Layout/Header"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <div >
      <Headersec title="About" />
      <AboutSection />
    </div>
  )
}

export default About



