// components/UI/Trusted.jsx
"use client";

import { useEffect, useState, useMemo } from "react";
import Image from 'next/image';
import axios from "axios";
import Spinner from "../Layout/Spinner";
import { motion } from 'framer-motion';


const TrustedBySection = () => {
  const [customers, setCustomers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("/api/employees");
        setCustomers(response.data.products);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError("عذرًا، حدث خطأ أثناء تحميل بيانات العملاء. يرجى المحاولة مرة أخرى لاحقًا.");
      }
    };

    fetchCustomers();
  }, []);

  const customerGrid = useMemo(() => (
    customers && (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 items-center">
        {customers.map((logo, index) => (
          <motion.div 
            key={logo._id} 
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={logo.images[0]}
              alt={logo.name}
              width={120}
              height={120}
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />

          </motion.div>
        ))}
      </div>
    )
  ), [customers]);

  if (error) {
    return (
      <div className="text-center text-red-600 py-16">
        <p>{error}</p>
      </div>
    );
  }

  if (!customers)
    { return (<div className='container'>
      <Spinner />
      
      </div>
    )}

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        The Leading Companies That Trust Us
      </h2>
      {customers && customerGrid}
    </div>
  );
};

export default TrustedBySection;