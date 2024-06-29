import React from "react";
import Container from "../container/Container";
import { motion } from "framer-motion";
import Item from "./Item";
import cake from "../../assets/cake.png";
import Marque from "./Marque";
import ServicesCarousel from "./ServicesCarousel";
import ServicesCarousel2 from "./ServicesCarousel2";
import ProductCard from "./ProductCard";
import EyesAnimation from "./EyesAnimation";
import Last from "./Last";
const Banner = () => {
  return (
    <>
      <Container className="px-4">
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="-.3"
          className="main w-full md:h-screen  flex flex-col-reverse overflow-hidden md:flex-row "
        >
          <div className="left md:w-3/5 ">
            <div className="text flex flex-col md:leading-[7vw] pt-[2vw] md:pl-4 h-full">
              <div className="flex md:items-stretch items-center">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "10vmax" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="md:w-[10.5vw] h-[5.3vmax]  md:mt-3 md:h-[4.6vw] rounded-lg  overflow-hidden mr-2"
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661963730905-a410479e4527?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
                <h1 className="md:text-[6vw] text-[2.7rem]  font-['Bebas_Neue'] hover:tracking-widest duration-200">
                  Function Junction
                </h1>
              </div>
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className="md:text-[9vw] text-[3.7rem] leading-[3.5rem] md:leading-[7vw] tracking-wide font-['Bebas_Neue']">
                  The Junction For <br />{" "}
                  <span className="text-blue-500 tracking-tight ">
                    every Function!
                  </span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className="py-3 text-3xl font-[roboto]">
                  What we Provide?
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, staggerChildren: 0.1 }}
                className="mt-1 overflow-hidden z-10 "
              >
                <Item />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, staggerChildren: 0.1 }}
            className="right z-0 flex items-center md:w-2/5  mb-4 sm:mb-0"
          >
            <img src={cake} className="sm:h-[80%] sm:w-[95%]" alt="" />
          </motion.div>
        </div>
      </Container>
      <Container className="marque ">
        <div data-scroll data-scroll-section data-scroll-speed=".1">
          <Marque />
        </div>
      </Container>
      <Container>
        <ServicesCarousel />
      </Container>
      <Container>
        <ServicesCarousel2 />
      </Container>
      <Container>
        <div>
          <ProductCard />
        </div>
      </Container>
      <Container>
        <div data-scroll data-scroll-section data-scroll-speed=".30">
          <EyesAnimation />
        </div>
      </Container>
      <h1 className=" md:-mt-20 mt-3 md:text-[5vw] text-[8vw] leading-none md:tracking-normal tracking-tight font-['Bebas_Neue'] text-blue-500 text-center ">
        "Epic Events. Unforgettable Moments. Let's Celebrate!"
      </h1>
      {/* <Container className="md:px-10 md:py-6 py-10 px-6  bg-white" data-scroll data-scroll-section data-scroll-speed="-.50" >
        <div className="rounded-xl overflow-hidden" data-scroll data-scroll-section data-scroll-speed=".30" >
          <Last />
        </div>
      </Container> */}
    </>
  );
};

export default Banner;
