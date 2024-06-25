import React from "react";
import Container from "../container/Container";
import { motion } from "framer-motion";
import Item from "./Item";
import cake from "../../assets/cake.png";

const Banner = () => {
  return (
    <Container className="px-4 h-fit ">
      <div className="main w-full h-screen flex flex-col-reverse  md:flex-row">
        <div className="left md:w-3/5 ">
          <div className="text flex flex-col md:leading-[7vw] pt-[2vw] md:pl-4 h-full">
            <div className="flex md:items-stretch items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "10vmax" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="md:w-[10.5vw] h-[5vmax]  md:mt-3 md:h-[4.6vw] rounded-lg  overflow-hidden "
              >
                <img
                  src="https://images.pexels.com/photos/266497/pexels-photo-266497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </motion.div>
              <h1 className="md:text-[6vw] text-[3rem]  font-['Bebas_Neue'] hover:tracking-widest duration-200">
                Function Junction
              </h1>
            </div>
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, staggerChildren: 0.1 }}
            >
              <h1 className="md:text-[9vw] text-[4rem] leading-[3.5rem] md:leading-[7vw] tracking-wide font-['Bebas_Neue']">
                The Junction For <br />{" "}
                <span className="text-blue-500 tracking-tight ">
                  every Function!
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, staggerChildren: 0.1 }}
            >
              <h1 className="py-3 text-3xl font-[roboto]">What we Provide?</h1>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, staggerChildren: 0.1 }}
              className="mt-1 overflow-hidden z-10 " 
            >
              <Item />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          className="right flex items-center md:w-2/5 mb-4 sm:mb-0"
        >
          <img src={cake} className="sm:h-[80%] sm:w-[95%]" alt="" />
        </motion.div>
      </div>
    </Container>
  );
};

export default Banner;
