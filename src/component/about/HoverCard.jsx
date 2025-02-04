import { motion } from "framer-motion";

const HoverCard = () => {
  return (
    <motion.div
      className="relative w-80 h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
      whileHover="hover"
      initial="initial"
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461784180009-21121b2f204c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-6">
        <motion.h2
          className="text-white text-2xl font-bold"
          variants={{
            hover: { rotate: 5, y: -5 },
            initial: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          Hover Card
        </motion.h2>
        <p className="text-gray-300 text-sm">
          This is an animated card using Framer Motion.
        </p>
      </div>
    </motion.div>
  );
};

export default HoverCard;
