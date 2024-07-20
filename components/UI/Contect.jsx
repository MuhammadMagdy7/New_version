//components/UI/Contect
import { motion } from "framer-motion";
import HeaderSec from "../Layout/Header";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const ContactCom = () => {
  return (
    <div className="overflow-hidden">
      {" "}
      {/* Added overflow-hidden here */}
      <section className="py-12">
        <HeaderSec title="Contact Us" />
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 lg:py-12"
            >
              <p className="text-3xl">
                At{" "}
                <span className="text-primaryColor font-semibold">
                  Version AVI
                </span>
                </p>
                <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
                we pride ourselves on our independence and dedication to our
                clients. As a wholly owned and completely independent company,
                free from manufacturer or other group control, we assure you
                that our recommendations are based solely on what is best for
                you. This commitment to unbiased advice gives you the confidence
                that we will always put your needs first, providing the right
                solutions for your unique requirements.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 text-center"
              >
                <a
                  href="tel:+201287934393"
                  className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors duration-300"
                >
                  +2 0128 793 4393
                </a>

                <address className="mt-2 not-italic text-gray-600">
                  4 st sdat Masr el gdida, Cairo, Egypt
                </address>
                <div className="w-full">
                <a href='https://web.facebook.com/profile.php?id=100063908745776' target="_blank">
                  <FaFacebook className="mt-6 mx-auto text-3xl text-blue-600 hover:text-blue-800" />
                
                </a>

                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white p-4 shadow-lg lg:col-span-3"
            >
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2153.8260045205025!2d31.301978619796593!3d30.09036091509536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f8d1342da89%3A0xffa9683a62898172!2z2YHZitix2KzZitmG!5e0!3m2!1sar!2seg!4v1721306796243!5m2!1sar!2seg"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCom;
