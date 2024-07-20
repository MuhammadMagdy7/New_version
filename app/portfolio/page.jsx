"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeaderSec from "@/components/Layout/Header";
import Spinner from "@/components/Layout/Spinner";

const Events = dynamic(() => import("@/components/UI/Events"), {
  loading: () => <Spinner />,
  ssr: false
});

const Portfolio = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="container mx-auto py-16 px-4">
        {isClient && 
        <div>
        <HeaderSec title="Our Portfolio" />
        <Events />
        </div>
      }

      </div>
    </div>
  );
};

export default Portfolio;