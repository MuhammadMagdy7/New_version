// //components/UI/AboutSection
// const AboutSection = () => {
//   return (
//     <div>
//       <section className="container ">
//         <div
//           data-aos="fade-up"
//           className="mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
//         >
//           <div className="max-w-3xl">
//             <h2 className="text-3xl font-bold sm:text-4xl">
//               Welcome to Version AVI, where we bring your events to life with
//               cutting-edge audio-visual solutions.
//             </h2>
//           </div>

//           <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//             <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
//               <img
//                 alt=""
//                 src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
//                 className="absolute inset-0 h-full w-full object-cover rounded-lg"
//               />
//             </div>

//             <div className="lg:py-16">
//               <article className="space-y-4 text-gray-600">
//                 <p>
//                   As a premier company specializing in renting top-notch
//                   devices, we are dedicated to making your gatherings
//                   unforgettable.
//                 </p>

//                 <p>
//                   <span className="pr-2 font-bold text-primaryColor">
//                     Our Story
//                   </span>
//                   We are Version Company, a leader in the market with 13 years
//                   of experience. Founded with a passion for innovation and
//                   excellence, Versionavi has grown into a trusted name in the
//                   events industry. We pride ourselves on delivering seamless
//                   experiences that captivate and engage your audience. Whether
//                   it's a grand celebration or a professional conference, our
//                   state-of-the-art equipment and expert team ensure your event
//                   is a resounding success.
//                 </p>
//               </article>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutSection;


"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

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
            <Image
              alt="Event setup"
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              layout="fill"
              objectFit="cover"
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