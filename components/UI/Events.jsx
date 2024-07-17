//components//UI/Events.jsx
"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";
import HeaderSec from "../Layout/Header";

const Events = () => {

  const [portfolio, setPortfolio] = useState(null)

  useEffect(() => {

  const fetchServices = async () => {
    try {
      const response = await axios.get("/api/products");
      setPortfolio(response.data.products);
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
  };

  fetchServices();
}, [])


  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        {/* <h1 className="text-4xl font-bold text-center text-primaryColor">
          Events
        </h1>
        <h2 className="text-black text-4xl font-bold text-center mt-2">
          What is new?
        </h2>
        <p className="text-center mt-2 text-paragraphColor">
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p> */}

{portfolio ? (<HeaderSec title='Portfolio' />): ""}


<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  {portfolio?.map((item, i) => (
    <Link href={`/portfolio/${item._id}`} key={i} className="flex">
      <div data-aos="fade-up" className="bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-105 hover:shadow-xl flex flex-col w-full">
        <div className="h-48 relative overflow-hidden">
          <img 
            key={i} 
            src={item.images[0]} 
            alt={item.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-primaryColor font-semibold text-lg">
              {item.name}
            </h3>
            <p className="text-paragraphColor mt-2 overflow-hidden text-ellipsis line-clamp-2">
              {item.description}
            </p>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            {moment(item.date).format('YYYY-MM-DD')}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>

        {/* <div className="text-center mt-8">
          <button className="btn px-16 py-2">See more events</button>
        </div> */}
      </div>
    </div>
  );
};

export default Events;
