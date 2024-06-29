// import React, { useEffect, useState } from "react";

// const EyesAnimation = () => {
//   const [rotate, setrotate] = useState(0);
//   useEffect(() => {
//     window.addEventListener("mousemove", (e) => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;

//       let deltaX = mouseX - window.innerWidth / 2;
//       let deltaY = mouseY - window.innerHeight / 2;

//       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//       setrotate(angle-180);
//     });
//   }, []);

//   return (
//     <div className="w-full px-20 pb-10 -mt-20 flex flex-col items-center justify-center bg-white text-black h-screen gap-20">
//       <h1 className="text-6xl font-['Bebas_Neue'] ">
//         Eyes on Your <span className="text-blue-500">Perfect Event!</span>
//       </h1>
//       <div className='relative w-[70%] h-[70%] bg-cover bg-center rounded-xl bg-[url("https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg")]'>
//         <div className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4">
//           <div className="w-[12vw] h-[12vw] flex items-center justify-center rounded-full bg-zinc-100 ">
//             <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900 ">
//               <div
//                 style={{
//                   transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
//                 }}
//                 className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
//               >
//                 <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[12vw] h-[12vw] flex items-center justify-center rounded-full bg-zinc-100 ">
//             <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 ">
//               <div
//                 style={{
//                   transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
//                 }}
//                 className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
//               >
//                 <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EyesAnimation;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EyesAnimation = () => {
  const [rotate, setRotate] = useState(0);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [pupilX, setPupilX] = useState(0);
  const [pupilY, setPupilY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Calculate rotation for eye follow
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Calculate skew values
      setSkewX((mouseX / window.innerWidth - 0.5) * 10);
      setSkewY((mouseY / window.innerHeight - 0.5) * 10);

      // Calculate pupil movement within the sclera
      const scleraRadius = 12 / 6; // sclera diameter / 2
      const pupilMaxMovement = scleraRadius * 10.5; // pupil can move up to half the radius

      setPupilX((mouseX / window.innerWidth - 2.5) * pupilMaxMovement * 5) -
        180;
      setPupilY((mouseY / window.innerHeight - 2.5) * pupilMaxMovement * 5) -
        180;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full md:px-20 pb-10 md:-mt-20 -mt-0  flex flex-col items-center justify-center bg-white text-black md:h-screen h-fit  md:gap-20">
      <h1 className="md:text-6xl text-[10vw] tracking-tight md:p-0 p-6 font-['Bebas_Neue'] ">
        Eyes on Your <span className="text-blue-500">Perfect Event!</span>
      </h1>
      <div className='relative md:w-[70%] md:h-[70%] w-[80%] h-[50vh] bg-cover bg-center rounded-xl bg-[url("https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg")]'>
        <div className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4">
          <div className="w-[12vw] h-[12vw] flex items-center justify-center rounded-full bg-zinc-100 ">
            <motion.div
              className="w-2/3 h-2/3 relative rounded-full bg-zinc-900 "
              style={{
                transform: `skew(${skewX}deg, ${skewY}deg)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </motion.div>
          </div>
          <div className="w-[12vw] h-[12vw] flex items-center justify-center rounded-full bg-zinc-100 ">
            <motion.div
              className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 "
              style={{
                transform: `skew(${skewX}deg, ${skewY}deg)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyesAnimation;
