import React from "react";
import HoverCard from "../../component/HoverCard/HoverCard";

const ProductCard = () => {
  return (
    <div className="w-full md:h-screen h-fit flex flex-col">
      <h1 className='md:text-6xl text-[10vw] tracking-tight mb-3 text-center font-["Bebas_Neue"]'>
        Our Value For Money <span className="text-blue-500" >Packages!</span>
      </h1>
      <div className="flex items-center md:flex-row  flex-col justify-center md:gap-1 gap-3 ">
        <HoverCard />
        <HoverCard />
        <HoverCard />
        <HoverCard />
      </div>
    </div>
  );
};

export default ProductCard;
