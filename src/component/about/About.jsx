import React from 'react'
import SquishyCard from './SquishyCard'
// import parallax1 from "./parallax1.png"

const aboutDets = [ { id: 1, title: "Corporate Events", description: "From formal meetings and conferences to fun team-building activities, we offer tailored themes and packages for every business need." },
    { id: 2, title: "Casual Gatherings", description: " Whether it's a cozy get-together or a grand celebration, we bring your vision to life with creative flair." },
    { id: 3, title: "Birthday Parties", description: "Celebrate birthdays for all age groups with unique, theme-based experiences that leave everyone talking about the event for years." },
    { id: 4, title: "Theme Parties", description: "From elegant soirées to vibrant costume parties, we've got you covered with innovative ideas and decorations." }]
const About = () => {


    return (
        <div className='w-full h-screen px-6' >

            <h1 className='text-center text-5xl font-light text-white font-["Varela_Round"]' > About <span className='text-blue-500' >Us</span></h1>
            <h1 className='text-md tracking-widest mt-4' >Welcome to Function Junction, your one-stop solution for all your event planning and management needs!
                We are a fresh and dynamic startup with a passion for creating memorable experiences. At [Your Startup Name], we take pride in handling every detail of your event, allowing you to sit back, relax, and enjoy the moments that truly matter. From start to finish, we ensure everything is seamlessly managed, so you don’t have to lift a finger.</h1>
            <img src={"./parallax1.png"} className='w-32 h-42 absolute z-0' alt="" />
            <h1 className='text-4xl font-["Varela_Round"] text-center mt-6' >Our services cater to a variety of occasions, <span className='text-blue-500' >including</span>:</h1>
            <div className='flex justify-between items-center' >
                {
                    aboutDets.map((det)=>{return <div className=' w-fit h-fit ' > <SquishyCard det={det} key={det.id} /> </div> })
                }
                </div>
        </div>
    )
}

export default About