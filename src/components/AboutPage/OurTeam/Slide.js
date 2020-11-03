import React from 'react'
import './OurTeam.scss'
import {sliderData} from './teamData'

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: sliderData
        }
    }
    render() { 
        return ( 
            <section>
                {
                    this.state.teamData.map((item, index) => 
                        <div className={index === this.props.activeIndex ? 'active': 'slide'} key={item.id}>
                            <div className="img-container">
                                <img src={item.image} alt={item.alt} className="mate-photo"/>
                                <div className="overlay">{item.position}</div>   
                            </div>
                            <h2 className="mate-name">{item.name}</h2>
                        </div>
                    )
                }
            </section>
        );
    }
}
 