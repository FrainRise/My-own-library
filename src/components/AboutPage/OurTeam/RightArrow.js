import React from 'react'
import rightChevron from '../../../assets/images/about-page/right-chevron.png'

const RightArrow = (props) => {
    return ( 
        <div className="backArrow" onClick={props.goToNextSlide}>
            <img src={rightChevron} className='rightChevron arrow' />
        </div>
    );
}
 
export default RightArrow;