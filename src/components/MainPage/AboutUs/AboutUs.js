import React from 'react'
import './AboutUs.scss'

import firstPhoto from '../../../assets/images/main-page/main-image-1.jpg'
import secondPhoto from '../../../assets/images/main-page/main-image-2.jpg'

const AboutUs = () => {
    return ( 
        <div className="about-section">
            <div className="about-text-container">
                <img className="about-image" src={firstPhoto} alt="Book time" />
                <div className="about-text-wrapper">
                    <h2 className="about-title">About us</h2>
                    <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <div className="about-text-container">
                <div className="about-text-wrapper">
                    <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className="btn__read-more">Read more</button>
                </div>
                <img className="about-image" src={secondPhoto} alt="Book time" />
            </div>
        </div>
     );
}
 
export default AboutUs;