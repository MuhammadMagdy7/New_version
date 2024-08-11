// components/UI/Feature.jsx
"use client";
import { useEffect, useState } from "react";
import { ButtonPill } from "../Layout/Button";
import axios from "axios";
import HeaderSec from "../Layout/Header";
import Spinner from "../Layout/Spinner";
import { motion } from 'framer-motion';
import Image from "next/image";

const FeaturesSection = () => {
  const [services, setServices] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");
        setServices(response.data.products);
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("عذرًا، حدث خطأ أثناء تحميل الخدمات. يرجى المحاولة مرة أخرى لاحقًا.");
      }
    };

    fetchServices();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  if (error) {
    return (
      <div className="container mx-auto py-16 px-4 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      {services ? <HeaderSec title='Our Services' /> : null}

      {services ? (
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <ButtonPill
                  text="Learn more"
                  link={`/services/${service._id}`}
                />
              </div>
              <div className="flex-1 relative h-64">

                               <Image
                src={service.images[0]}
                alt={service.name}
                height={100}
                width={500}
                className="w-full object-cover object-center"
              />
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default FeaturesSection;