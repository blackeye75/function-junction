import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { motion } from "framer-motion";

const waveVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const ParticleRing = () => {
  return (
    <div className="relative rounded-2xl">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      {/* <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
        Drag & Zoom
      </h1> */}
      <section className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none h-screen w-full p-10">
        <div className="container flex flex-col w-full gap-10  justify-between ">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={waveVariants}
            className="text-[6vw] font-['Bebas_neue'] font-bold my-1 text-center"
          >
            Why Choose <span className="text-blue-500">Us?</span>
          </motion.h2>
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex items-center justify-center gap-10 text-center">
              <div className="w-full sm:w-1/2 p-5">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={waveVariants}
                  className="text-7xl leading-none font-['Bebas_neue'] text-pink-500 font-semibold mb-4 "
                >
                  Expert Team
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={waveVariants}
                  className="text-xl leading-none uppercase font-semibold"
                >
                  Our team consists of highly experienced professionals who are
                  experts in their respective fields. We work collaboratively to
                  bring your vision to life.
                </motion.p>
              </div>
              <div className="w-full sm:w-1/2 p-5">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={waveVariants}
                  className="text-6xl leading-none font-['Bebas_neue'] text-pink-500 font-semibold mb-4"
                >
                  Personalized Service
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={waveVariants}
                  className="text-xl leading-none uppercase font-semibold"
                >
                  We understand that every event is unique. That's why we offer
                  personalized services tailored to meet your specific needs and
                  preferences.
                </motion.p>
              </div>
            </div>
            <div className="w-full text-center mx-auto sm:w-1/2 p-5">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={waveVariants}
                className="text-6xl leading-none font-['Bebas_neue'] text-pink-500 font-semibold mb-4"
              >
                Attention to Detail
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={waveVariants}
                className="text-xl leading-none uppercase font-semibold"
              >
                We pride ourselves on our meticulous attention to detail,
                ensuring that every aspect of your event is executed flawlessly.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
