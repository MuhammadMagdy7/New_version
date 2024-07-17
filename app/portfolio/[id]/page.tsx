// app/portfolio/[id]/page.tsx
'use client';

import Spinner from '@/components/Layout/Spinner';
import Breadcrumb from '@/components/Layout/Breadcrumb';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/products/${params.id}`);
        setProject(response.data.products);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [params.id]);

  const breadcrumbItems = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: project?.name || 'Project Details', href: `/portfolio/${params.id}` },
  ];

  return (
    <div className="min-h-screen mb-28">
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        {project ? (
          <section className="relative z-0 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative z-10">
                <Carousel selectedItem={currentIndex} onChange={setCurrentIndex}>
                  {project.images.map((src, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9">
                      <img
                        src={src}
                        className="object-cover w-full h-full"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold sm:text-3xl mb-4">
                  {project.name}
                </h2>

                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          </section>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Page;