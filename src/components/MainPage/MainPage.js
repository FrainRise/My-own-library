import React from 'react'

import {Introduction, Quote, AboutUs, ContactUs} from './index'

const MainPage = () => {
    return ( 
        <div className="mainpage-container">
            <Introduction />
            <Quote />
            <AboutUs />
            <ContactUs />
        </div>
    );
}
 
export default MainPage;