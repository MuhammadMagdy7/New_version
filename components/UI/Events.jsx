"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";

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


console.log(portfolio)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-primaryColor">
          Events
        </h1>
        <h2 className="text-black text-4xl font-bold text-center mt-2">
          What's new?
        </h2>
        <p className="text-center mt-2 text-paragraphColor">
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {portfolio?.map((item, i) => (
            <Link href={`/porfolio/${item._id}`} key={i}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">

                <img key={i} src={item.images[0]} alt={item.name} />
                <div className="p-4">
                  <h3 className="text-primaryColor font-semibold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-paragraphColor mt-2 whitespace-nowrap truncate ">{item.description}</p>
                  <p className="text-gray-400 mt-4 text-sm">{moment(item.date).format('YYYY-MM-DD')}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn px-16 py-2">See more events</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
