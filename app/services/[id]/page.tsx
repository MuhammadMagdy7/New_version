// // app/services/[id]/page.js

'use client';

import Breadcrumb from '@/components/Layout/Breadcrumb';
import Spinner from '@/components/Layout/Spinner';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface PageProps {
  params: {
    id: string;
  };
}

interface Service {
  name: string;
  description: string;
  images: string[];
}

const Page = ({ params }: PageProps) => {
  const [service, setService] = useState<Service | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: service?.name || 'Project Details', href: `/portfolio/${params.id}` },
  ];

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`/api/services/${params.id}`);
        setService(response.data.service);
      } catch (error) {
        console.error('Error fetching service:', error);
      }
    };

    fetchService();
  }, [params.id]);

  return (
    <div className="min-h-screen mb-28">

  <Breadcrumb items={breadcrumbItems} />

      {service ? (
        <section className="relative z-0">
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <Carousel selectedItem={currentIndex} onChange={setCurrentIndex}>
                  {service.images.map((src, index) => (
                    <div key={index} className="w-full h-full">
                      <img
                        src={src}
                        className="w-full h-full object-cover"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {service.name}
                  </h2>

                  <p className="mt-4 text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Page;
