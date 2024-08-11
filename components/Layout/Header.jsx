// Layout/Header.jsx
import { motion } from 'framer-motion';

const HeaderSec = ({ title  }) => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #69CCDF, #EA3478)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-center font-extrabold py-5 mb-16 px-4 overflow-hidden`}
      style={gradientStyle}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        {title}
      </h1>
    </motion.div>
  );
};

export default HeaderSec;