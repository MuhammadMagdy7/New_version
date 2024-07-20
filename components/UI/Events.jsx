//components//UI/Events.jsx
"use client";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Events = () => {
  const pathname = usePathname();
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/products");
        setPortfolio(response.data.products);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError(
          "عذرًا، حدث خطأ أثناء تحميل بيانات المنتجات. يرجى المحاولة مرة أخرى لاحقًا."
        );
      }
    };

    fetchServices();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const selectedItems = useMemo(() => {
    if (!portfolio) return null;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return portfolio.slice(startIndex, startIndex + itemsPerPage);
  }, [portfolio, currentPage]);

  if (error) {
    return (
      <div className="text-center text-red-600 py-16">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {pathname === "/"
          ? selectedItems?.slice(0,3).map((item, i) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={`/portfolio/${item._id}`} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden my-12 transition hover:shadow-xl flex flex-col h-full">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={item.images[0]}
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
                      {moment(item.date).format("YYYY-MM-DD")}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
          : selectedItems?.map((item, i) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href={`/portfolio/${item._id}`} className="block">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl flex flex-col h-full">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={item.images[0]}
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
                        {moment(item.date).format("YYYY-MM-DD")}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
      </div>

      {pathname === "/"
        ? ""
        : portfolio && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * itemsPerPage >= portfolio.length}
                className="btn px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
    </div>
  );
};

export default Events;
