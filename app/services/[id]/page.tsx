// app/services/[id]/page.tsx
'use client';

import Breadcrumb from '@/components/Layout/Breadcrumb';
import Spinner from '@/components/Layout/Spinner';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface PageProps {
  params: {
    id: string;
  };
}

interface Service {
  _id: string;
  name: string;
  description: string;
  images: string[];
}

const Page = ({ params }: PageProps) => {
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: service?.name || 'Service Details', href: `/services/${params.id}` },
  ];

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`/api/services/${params.id}`);
        setService(response.data.service);
      } catch (error) {
        console.error('Error fetching service:', error);

      } finally {
        setIsLoading(false);
      }
    };

    fetchService();

  }, [params.id]);

  
  if (isLoading) {
    return (
      <div className='container'>
        <Spinner />
      </div>
    );
  }

  if (!service) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-red-600 py-16"
      >
        <p>Service not found.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen"
  >
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />

          <section className="mt-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6 lg:p-8">
                  <Carousel
                    selectedItem={currentIndex}
                    onChange={setCurrentIndex}
                    showStatus={false}
                    showThumbs={true}
                    infiniteLoop={true}
                    className="rounded-lg overflow-hidden"
                  >
                    {service.images.map((src, index) => (
                      <div key={index} className="aspect-w-16 aspect-h-9">
                        <img
                          src={src}
                          className="object-cover w-full h-full"
                          alt={`${service.name} - Image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    {service.name}
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
    </motion.div>

              </div>
            </div>
    </motion.div>

          </section>
      </div>
    </div>
    </motion.div>
  );
};

export default Page;