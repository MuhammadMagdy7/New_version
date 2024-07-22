// //components//UI/Events.jsx

"use client";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Link from "next/link";
import moment from "moment";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ButtonBase } from "../Layout/Button";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import InfiniteScroll from 'react-infinite-scroll-component';


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

  const selectedItems = useMemo(() => {
    if (!portfolio) return null;
    return portfolio.slice(0, currentPage * itemsPerPage);
  }, [portfolio, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const SkeletonLoader = () => (
    <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
  );

  if (error) {
    return (
      <div className="text-center text-red-600 py-16">
        <p>{error}</p>
      </div>
    );
  }
  const EventCard = ({ item, index }) => (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link href={`/portfolio/${item._id}`} className="block">
          <motion.div 
            className="bg-white rounded-lg min-h-[365px] shadow-md overflow-hidden transition hover:shadow-xl flex flex-col h-full"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="h-48 relative overflow-hidden">
              <LazyLoadImage
                src={item.images[0]}
                alt={item.name}
                effect="blur"
                height={192}
                width="100%"
                className="object-cover object-center"
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
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );

  return (
    <div>
      {!selectedItems ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...Array(6)].map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={selectedItems.length}
          next={loadMore}
          hasMore={selectedItems.length < (portfolio?.length || 0)}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {pathname === "/"
              ? selectedItems.slice(0, 3).map((item, i) => (
                  <EventCard key={item._id} item={item} index={i} />
                ))
              : selectedItems.map((item, i) => (
                  <EventCard key={item._id} item={item} index={i} />
                ))}
          </div>
        </InfiniteScroll>
      )}

      {pathname === "/" && selectedItems && selectedItems.length > 3 && (
        <div className="text-center mt-8">
          <ButtonBase text="Show more" link="/portfolio" />
        </div>
      )}
    </div>
  );
};

export default Events;