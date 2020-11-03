import React from 'react'
import leftChevron from '../../../assets/images/about-page/left-chevron.png'

const LeftArrow = (props) => {
    return ( 
        <div className="backArrow" onClick={props.goToPrevSlide}>
            <img src={leftChevron} className='leftChevron arrow' />
        </div>
    );
}
 
export default LeftArrow;