import React from 'react'
import HoverCard from './HoverCard'

const aboutData = [
  {
    "heading": "Djing & Live Music",
    "paragraph": "Turn up the energy at your event with our professional DJs and live music arrangements. Whether you want a high-energy dance floor, a mellow acoustic vibe,",
    "image": "https://images.unsplash.com/photo-1530014671970-707f86eb10f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "heigt": "30vh",
    "width": "45vmax"
  },
  {
    "heading": "Event Hosting & Entertainment",
    "paragraph": "A great event needs a great host! Our professional event hosts and ",
    "image": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "heigt": "30vh",
    "width": "30vmax"
  },
  {
    "heading": "Food Catering & Beverages",
    "paragraph": "Delight your guests with an exquisite culinary experience. We offer a wide range of catering options, from gourmet meals",
    "image": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "heigt": "30vh",
    "width": "30vmax"
  },
  {
    "heading": "Fireworks & Special Effects",
    "paragraph": "Add a touch of magic and grandeur to your event with breathtaking fireworks and special effects. From mesmerizing pyrotechnics to indoor cold fireworks and confetti showers, we create unforgettable visual spectacles for your celebrations.",
    "image": "https://images.unsplash.com/photo-1560986752-2e31d9507413?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "heigt": "30vh",
    "width": "45vmax"
  },
  ,]

const NewAbout = () => {
  return (
    <div className='w-full min-h-screen sm:px-10 px-5' >
      <h1 className='text-5xl text-center mb-5 font-["Bebas_Neue"] pt-10 ' >About Us</h1>
      <div className='flex items-center gap-5 justify-center sm:flex-row flex-col  flex-wrap' >
        {aboutData.map(function (elem) {
          return <HoverCard heading={elem.heading} image={elem.image} height={elem.heigt} width={elem.width} key={elem.heading} paragraph={elem.paragraph} />
        })}
      </div>
      <h1 className='text-6xl text-center mt-20' >We Provide values to <span className='text-blue-500' >Clients!</span></h1>

    </div>
  )
}

export default NewAbout