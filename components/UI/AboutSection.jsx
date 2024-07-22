//components/UI/AboutSection
"use client"

import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-16 sm:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div className="max-w-3xl mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold sm:text-4xl text-gray-800">
            Welcome to Version AVI, where we bring your events to life with
            cutting-edge audio-visual solutions.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div className="relative h-64 sm:h-80 lg:h-full" variants={itemVariants}>

                          <LazyLoadImage
                src="/img/version4.jpg"
                alt="Event setup"
                effect="blur"
                height={192}
                width="100%"
                className="rounded-lg shadow-lg"
                />
          </motion.div>

          <motion.div className="lg:py-8" variants={itemVariants}>
            <article className="space-y-6 text-gray-600">
              <motion.p className="text-lg" variants={itemVariants}>
                As a premier company specializing in renting top-notch
                devices, we are dedicated to making your gatherings
                unforgettable.
              </motion.p>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-primaryColor mb-2">Our Story</h3>
                <p>
                  We are Version Company, a leader in the market with 13 years
                  of experience. Founded with a passion for innovation and
                  excellence, Versionavi has grown into a trusted name in the
                  events industry. We pride ourselves on delivering seamless
                  experiences that captivate and engage your audience. Whether
                  it's a grand celebration or a professional conference, our
                  state-of-the-art equipment and expert team ensure your event
                  is a resounding success.
                </p>
              </motion.div>
            </article>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;