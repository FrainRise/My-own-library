import React from 'react';
import './About.scss'

import team from '../../../assets/images/about-page/team.png'

const About = () => {
    return ( 
        <div className="about-section">
            <div className="about-block-text">
                <h2 className="about-title">About us</h2>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="about-block-image">
                <img src={team} alt="team" className="about-image"/>
            </div>
        </div>
    );
}
 
export default About;