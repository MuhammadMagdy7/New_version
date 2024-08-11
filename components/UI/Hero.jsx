import { motion } from 'framer-motion';
import { ButtonBase, ButtonPill } from "../Layout/Button";
import Image from 'next/image';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-20"
    >
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl font-bold text-gray-900 mb-6"
        >
          Welcome to <span className="text-secondaryColor">Version AVI</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-paragraphColor mb-10 max-w-2xl mx-auto"
        >
          We offer advanced audio and visual solutions to make your events impressive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center space-x-5 mb-16"
        >
          <ButtonBase text="About Us" link="/about" />
          <ButtonPill text="Our Services" link="/services" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >

                        <Image
                src="/img/version5.jpg"
                alt="Event setup"
                height={100}
                width={500}
                className=" w-full rounded-lg shadow-2xl"
                />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-300 text-3xl font-bold">We make your events extraordinary</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
