// components/UI/CustomerStories.jsx

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ... (customerStories array remains unchanged)
const customerStories = [
  {
    name: "Advanced Technology Company",
    description: "How we helped organize a large tech conference with over 5,000 attendees",
    image: "/img/version6.jpg",
    link: "/case-studies/advanced-tech-company",
  },
  {
    name: "Annual Music Festival",
    description: "Providing an exceptional audio experience for over 50,000 spectators",
    image: "/img/version4.jpg",
    link: "/case-studies/annual-music-festival",
  },
  // Add more case studies...
];
const CustomerStories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {customerStories.map((story, index) => (
        <motion.div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image src={story.image} alt={story.name} width={400} height={200} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
            <p className="text-gray-600 mb-4">{story.description}</p>
            <Link href={story.link} className="text-blue-600 hover:underline transition-colors duration-300">
              Read More
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CustomerStories;