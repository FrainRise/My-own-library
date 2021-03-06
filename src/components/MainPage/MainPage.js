import React from 'react'
import './responsive-main.scss'
import {Introduction, Quote, AboutUs, ContactUs, Addresses} from './index'


const introQuote = {
    author: 'Neil Gaiman', 
    quoteText: 'A book is a dream that you hold in your hands.'
}
const lastQuote = {
    author: 'Jhumpa Lahiri', 
    quoteText: 'That’s the thing about books. They let you travel without moving your feet.'
}

const MainPage = () => {
    return ( 
        <div className="mainpage-container">
            <Introduction />
            <Quote data={introQuote} />
            <AboutUs />
            <ContactUs />
            <Addresses />
            <Quote data={lastQuote} />
        </div>
    );
}
 
export default MainPage;