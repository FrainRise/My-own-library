import React from 'react'
import {AboutIntroduction, About, Advantages, Hardworking, OurTeam} from './index'

const AboutPage = () => {
    return ( 
        <div className="aboutpage-container">
            <AboutIntroduction />
            <About />
            <Advantages />
            <Hardworking />
            <OurTeam />
        </div>
    );
}
 
export default AboutPage;