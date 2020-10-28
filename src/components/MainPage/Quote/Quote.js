import React from 'react'
import './Quote.scss'

const Quote = (props) => {
    return ( 
        <div className="quote-section">
            <div className="quote-wrapper">
                <h2 className="quote quote-text">“{props.data.quoteText}”</h2>
                <h2 className="quote quote-author">— {props.data.author}</h2>
            </div>
        </div>
     );
}
 
export default Quote;