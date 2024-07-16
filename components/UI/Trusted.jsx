"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import HeaderSec from '../Layout/Header';

const TrustedBySection = () => {
  const [customers, setCustomers] = useState(null)

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/employees");
        setCustomers(response.data.products);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [])

  const logos = [
      { id: 1, src: 'img/img1.png', alt: 'EU TURPIS MOLESTIE' },
      { id: 2, src: 'img/img2.png', alt: 'EGESTAS' },
      { id: 3, src: 'img/img3.png', alt: 'TORQUENT' },
      { id: 4, src: 'img/img4.png', alt: 'DOLOR SITAMET' },
      { id: 5, src: 'img/img5.png', alt: 'SOCIOSQU' },
    ];
  
    return (
      <div>
        {customers ? (<HeaderSec title="Our customers" />):('')}
      {customers ? <div data-aos="fade-up">
        <div className='text-center bg-blue-50'>

        <div className="py-16">
          <h2 className="text-center text-gray-600 text-lg mb-8">Trusted by</h2>
          <div className="flex justify-center items-center space-x-16">
            {customers.map((logo) => (
              <div key={logo._id} className="flex justify-center items-center">
                <img src={logo.images[0]} alt={logo.name} className="h-16"/>
              </div>
            ))}
            </div>
          </div>
        </div>
        </div>
        
        : (
        <Button className=" py-52 btn btn-lg btn-link loading " loading={true} />  
        )}
        </div>
    );
  }
  
  export default TrustedBySection;