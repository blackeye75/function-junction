import React from 'react'
import Container from '../component/container/Container'
import About from '../component/about/About'

const Decorpage = () => {
  return (
    <Container className='mt-16 min-h-screen'>
        <div><h1 className='text-4xl font-["Bebas_Neue"] text-center' >Coustomizable Design For Your <span className='text-blue-500' >Events!</span> </h1></div>
        <About />
    </Container>
  )
}

export default Decorpage