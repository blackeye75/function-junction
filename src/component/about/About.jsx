import React from 'react'
import SquishyCard from './SquishyCard'
// import parallax1 from "./parallax1.png"

const aboutDets = [{ id: 1, title: "Corporate Events", description: "From formal meetings and conferences to fun team-building activities, we offer tailored themes and packages for every business need.", color: 'bg-indigo-500' },
{ id: 2, title: "Casual Gatherings", description: " Whether it's a cozy get-together or a grand celebration, we bring your vision to life with creative flair.", color: "bg-pink-500" },
{ id: 3, title: "Birthday Parties", description: "Celebrate birthdays for all age groups with unique, theme-based experiences that leave everyone talking about the event for years.", color: "bg-yellow-500" },
{ id: 4, title: "Theme Parties", description: "From elegant soirées to vibrant costume parties, we've got you covered with innovative ideas and decorations.", color: "bg-green-500" },]
const About = () => {


    return (
        <div className='w-full h-fit px-3 z-0' >
            <h1 className='text-center text-5xl font-light text-white font-["Varela_Round"]' > About <span className='text-blue-500' >Us</span></h1>

            <div className="relative">
                <div
                    className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-violet-600 via-fuchsia-600 to-violet-600 opacity-50 blur-2xl"
                ></div>
                <div className="relative flex w-full h-72 sm:h-fit sm:p-4 items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 px-2 backdrop-blur-2xl text-slate-300">
                    <div className='   h-full w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '>
                        <h1 className='text-lg tracking-tight mt-4 leading-[1.5rem] text-center  font-["Space_Grotesk"]' >Welcome to Function Junction, your one-stop solution for all your event planning and management needs!
                            We are a fresh and dynamic startup with a passion for creating memorable experiences. At Function junction, we take pride in handling every detail of your event, allowing you to sit back, relax, and enjoy the moments that truly matter. From start to finish, we ensure everything is seamlessly managed, so you don't have to lift a finger.
                        </h1>
                    </div>
                </div>
            </div>
            <img src={"./parallax1.png"} className='w-32 h-42 absolute -z-50' alt="" />
            <h1 className='text-4xl font-["Varela_Round"] text-center mt-6' >Our services cater to a variety of occasions, <span className='text-blue-500' >including</span>:</h1>
            <div className='flex justify-center items-center w-full h-[] gap-8 sm:flex-row pt-5 flex-wrap sm:flex-nowrap' >
                {
                    aboutDets.map((det) => { return <div className=' w-1/4 h-fit ' >  <SquishyCard det={det} key={det.id} /> </div> })
                }
            </div>

        </div>
    )
}

export default About