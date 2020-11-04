import React from 'react'
import rightChevron from '../../../assets/images/about-page/right-chevron.png'

const RightArrow = (props) => {
    return ( 
        <div className="backArrow" onClick={props.goToNextSlide}>
            <img src={rightChevron} className='rightChevron arrow' alt="rightArrow" />
        </div>
    );
}
 
export default RightArrow;