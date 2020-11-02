import React from 'react';
import './Hardworking.scss'

import team from '../../../assets/images/about-page/team-hard.jpg'

const Hardworking = () => {
    return ( 
        <div className="hardwg-section">
            <div className="hardwg-block-image">
                <img src={team} alt="team" className="hardwg-image"/>
            </div>
            <div className="hard-block-text">
                <h2 className="hardwg-title">Hard-working</h2>
                <p className="hardwg-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                     et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                     incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </div>
    );
}
 
export default Hardworking;