"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

import { ButtonBase, ButtonPill } from '../Layout/Button'


const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
return (
<div data-aos="fade-down">


          <div className="text-center bg-white py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        Website <span className="text-primaryColor">heading goes here</span>
      </h1>
      <p className="text-paragraphColor  mt-4">
        Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est esse duis
        occaecat reprehenderit pariatur.
      </p>

      <div className='mt-8 space-x-5'>
        <ButtonBase text="Join us now" />
        <ButtonPill text="Request demo" />
      </div>
      <div className="mt-12">
        <div

          className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] max-w-[100vh] h-[50vh] md:container md:w-[50vw] md:h-[50vh] bg-center "

        ></div>
      </div>
    </div>
    </div>
  )
}

export default Hero