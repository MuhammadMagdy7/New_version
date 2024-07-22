// app/portfolio/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

import Spinner from '@/components/Layout/Spinner';
import Breadcrumb from '@/components/Layout/Breadcrumb';

interface PageProps {
  params: {
    id: string;
  };
}

interface Project {
  name: string;
  description: string;
  images: string[];
}

const Page = ({ params }: PageProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/products/${params.id}`);
        setProject(response.data.products);
      } catch (error) {
        console.error('Error fetching project:', error);
        setError('عذرًا، حدث خطأ أثناء تحميل بيانات المشروع. يرجى المحاولة مرة أخرى لاحقًا.');
      }
    };

    fetchProject();
  }, [params.id]);

  const breadcrumbItems = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: project?.name || 'Project Details', href: `/portfolio/${params.id}` },
  ];

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-center text-red-600 py-16"
      >
        <p>{error}</p>
      </motion.div>
    );
  }

  if (!project)
    { return (<div className='container'>
      <Spinner />
      
      </div>
    )}

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen"
    >
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
          <section className="relative z-0 mt-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="relative z-10 shadow-lg rounded-lg overflow-hidden">
                <Carousel 
                  selectedItem={currentIndex} 
                  onChange={setCurrentIndex} 
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop
                  autoPlay
                  interval={5000}
                >
                  {project.images.map((src, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9">
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-full"
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
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  {project.name}
                </h2>

                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </motion.div>
            </motion.div>
          </section>

      </div>
    </motion.div>
  );
};

export default Page;