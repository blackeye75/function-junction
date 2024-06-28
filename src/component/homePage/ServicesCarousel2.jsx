import React from 'react'
import EffectCarousel from "../effectCarousel/EffectCarousel"

const ServicesCarousel2 = () => {
  return (
    <div className='md:h-screen h-fit w-full' >
        <div  >
            <h1 className='text-5xl font-["Bebas_Neue"] text-center -mt-4' >Our <span className='text-blue-500' >Services!</span></h1>
            <EffectCarousel/>
        </div>
    </div>
  )
}

export default ServicesCarousel2