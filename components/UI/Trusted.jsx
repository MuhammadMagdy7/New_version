"use client"

import axios from 'axios';
import {  useEffect, useState } from 'react';
import HeaderSec from '../Layout/Header';
import Spinner from '../Layout/Spinner';
import { usePathname } from 'next/navigation';


const TrustedBySection = () => {
  const [customers, setCustomers] = useState(null)

  const pathname = usePathname()
  useEffect(() => {

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

    return (
      <div className={`text-center ${pathname==='/customers' ? 'bg-blue-50': ''}`}>
        {pathname==='/customers' ? (customers ? (<HeaderSec title="Our customers" />):('')) : ''}
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

          <Spinner />
)}
        </div>
    );
  }
  
  export default TrustedBySection;