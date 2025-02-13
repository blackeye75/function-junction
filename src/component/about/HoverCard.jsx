// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const HoverCard = ({ heading, paragraph, image, height, width }) => {
//   return (
//     <motion.div
//       className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer`}
//       whileHover="hover"
//       initial="initial"
//       style={{ height: height, width: width }}
//     >
//       {/* Background Wrapper */}
//       <motion.div
//         className="absolute inset-0"
//         variants={{
//           hover: { scale: 1.1, filter: "grayscale(0%)" },
//           initial: { scale: 1, filter: "grayscale(100%)" },
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         {/* Background Image */}
//         <div
//           className="w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${image})` }}
//         />
//       </motion.div>

//       {/* Rotating Arrow at Top Right */}
//       <motion.div
//         className="absolute top-4 right-4 text-white text-2xl"
//         variants={{
//           hover: { rotate: 90 }, // Rotates 90° on hover
//           initial: { rotate: 0 },
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <FaArrowRight />
//       </motion.div>

//       {/* Content Overlay */}
//       <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-6 sm:p-4 md:p-6">
//         <motion.h2
//           className="text-white text-2xl font-bold sm:text-xl md:text-2xl"
//           variants={{
//             hover: { rotate: 5, y: -5 },
//             initial: { rotate: 0, y: 0 },
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {heading}
//         </motion.h2>
//         <p className="text-gray-300 text-sm sm:text-xs md:text-sm">
//           {paragraph}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default HoverCard;


import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HoverCard = ({ heading, paragraph, image, height, width }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer w-full sm:w-[90%] md:w-[45%] lg:w-[30%] max-w-[400px]"
      whileHover="hover"
      initial="initial"
      style={{ height: height }}
    >
      {/* Background Wrapper */}
      <motion.div
        className="absolute inset-0"
        variants={{
          hover: { scale: 1.1, filter: "grayscale(0%)" },
          initial: { scale: 1, filter: "grayscale(100%)" },
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </motion.div>

      {/* Rotating Arrow at Top Right */}
      <motion.div
        className="absolute top-4 right-4 text-white text-2xl"
        variants={{
          hover: { rotate: 90 },
          initial: { rotate: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowRight />
      </motion.div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4">
        <motion.h2
          className="text-white text-lg font-bold"
          variants={{
            hover: { rotate: 5, y: -5 },
            initial: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          {heading}
        </motion.h2>
        <p className="text-gray-300 text-sm">{paragraph}</p>
      </div>
    </motion.div>
  );
};

export default HoverCard;
