import React from 'react'
import About from '../component/about/About'
import NewAbout from '../component/about/NewAbout'
import { SmoothScrollHero } from '../component/about/SmoothScrollHero'

const Aboutpage = () => {
    return (
        <div className='mt-16' >
            {/* <About /> */}
            <NewAbout/>
            <SmoothScrollHero />
        </div>
    )
}

export default Aboutpage