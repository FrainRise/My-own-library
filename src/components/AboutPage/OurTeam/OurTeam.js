import React from 'react';
import Slide from './Slide'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import './OurTeam.scss'
import {sliderData} from './teamData'

export default class OurTeam extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activeIndex: 0,
            length: sliderData.length
        }

        this.goToPrevSlide = this.goToPrevSlide.bind(this)
        this.goToNextSlide = this.goToNextSlide.bind(this)
    }

    goToPrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;

        if(index < 1) {
            index = length - 1;
        } else {
            index--;
        }

        this.setState({ activeIndex: index })
    }

    goToNextSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;

        if(index === length - 1) {
            index = 0;
        } else {
            index++;
        }

        this.setState({ activeIndex: index })
    }



    render(){
        return ( 
            <div className="ourteam-section">
                <h2 className="ourteam-title">Meet our team</h2>
                <div className="slider">
                    <div className="slider-items">
                        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                        <div className="slider-text">
                            <Slide activeIndex={this.state.activeIndex} />
                        </div>
                        <RightArrow goToNextSlide={this.goToNextSlide} />
                    </div>
                </div>
            </div>
        );
    }
}