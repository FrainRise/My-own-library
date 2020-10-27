import React from 'react'
import './Quote.scss'

const Quote = () => {
    return ( 
        <div className="quote-section">
            <div className="quote-wrapper">
                <h2 className="quote quote-text">“A book is a dream that you hold in your hands.”</h2>
                <h2 className="quote quote-author">— Neil Gaiman</h2>
            </div>
        </div>
     );
}
 
export default Quote;