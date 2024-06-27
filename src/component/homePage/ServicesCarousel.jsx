import React from "react";
import Carousel1 from "../serviceCarousel/Carousel1";
import { motion } from "framer-motion";

const ServicesCarousel = () => {
  return (
    <motion.div className="w-full h-screen p-3">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl  font-['Bebas_Neue']"
      >
        We Are Delight To Have You <span className="text-blue-500">Here!</span>
      </motion.h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-[70%] w-full h-[40vh] md:h-[35vh] mt-[2vw] rounded-lg overflow-hidden m-auto"
      >
        <Carousel1 />
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-[70%] w-full h-[40vh] md:h-[35vh] mt-[2vw] rounded-lg overflow-hidden m-auto"
      >
        <Carousel1 />
      </motion.div>
    </motion.div>
  );
};

export default ServicesCarousel;
