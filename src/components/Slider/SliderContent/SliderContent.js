import React from 'react';

import arrowToRight from '../../img/arrowToRight.svg'

import './slidercontent.css'
import SliderSubTitle from './SliderSubTitle/SliderSubTitle';
import SliderTitle from './SliderTitle/SliderTitle';
import SliderText from './SlderText/SliderText';

function SliderContent() {
    return (
        <div className='slider-content'>
            
            <SliderSubTitle />

            <SliderTitle />
            
            <SliderText />

            <div className="btn">
                <a href="#" className="read-more__btn">read more</a>
                <img src={arrowToRight} alt="" />
            </div>

            <div className='slider-arrows'>
                <div className='arrow-prev'>PREV</div>
                <div className='arrow-next'>NEXT</div>
            </div>
            
        </div>
    )
}

export default SliderContent