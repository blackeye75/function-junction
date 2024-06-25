import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div className="w-full md:py-10 py-7 rounded-tl-3xl rounded-tr-3xl bg-blue-500">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  text-black whitespace-nowrap overflow-hidden ">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='md:text-[8vmax] pr-3  text-[15vmax] font-["Bebas_Neue"] font-bold tracking-wide'>
          The Junction For Your Every Function! 
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='md:text-[8vmax]  pr-3 text-[15vmax] font-["Bebas_Neue"] font-bold tracking-wide'>
        The Junction For Your Every Function!
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
