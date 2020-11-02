import React from 'react';
import './Advantages.scss'

import teamwork from '../../../assets/images/about-page/teamwork.png'
import agile from '../../../assets/images/about-page/agile.png'
import personalization from '../../../assets/images/about-page/personalization.png'
import flexible from '../../../assets/images/about-page/flexible.png'
import efficiency from '../../../assets/images/about-page/efficiency.png'
import fun from '../../../assets/images/about-page/fun.png'


const advantData = [
    {id: 1, title: 'teamwork', image: teamwork, alt: 'teamwork'},
    {id: 2, title: 'agile', image: agile, alt: 'agile'},
    {id: 3, title: 'personalization', image: personalization, alt: 'personalization'},
    {id: 4, title: 'flexible', image: flexible, alt: 'flexible'},
    {id: 5, title: 'efficiency', image: efficiency, alt: 'efficiency'},
    {id: 6, title: 'fun', image: fun, alt: 'fun'},
]

const Advantages = () => {
    return ( 
        <div className="advantage-section">
            <h2 className="advantage-title">Our advantages</h2>
            <div className="advantage-block">
            {advantData.filter(item => item.id <= 3 ).map((item) => {
                return (
                    <div key={item.id} className="custom-div">
                        <img src={item.image} alt={item.alt} className="advantage-image"/>
                        <h2 className="advantage-name">{item.title}</h2>
                    </div>
                )
            })}
            </div>
            <div className="advantage-block">
            {advantData.filter(item => item.id > 3 ).map((item) => {
                return (
                    <div key={item.id} className="custom-div">
                        <img src={item.image} alt={item.alt} className="advantage-image"/>
                        <h2 className="advantage-name">{item.title}</h2>
                    </div>
                )
            })}
            </div>
        </div>
    );
}
 
export default Advantages;