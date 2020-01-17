import React from 'react';

import SliderPhoto from './SliderPhoto/SliderPhoto'
import SliderContent from './SliderContent/SliderContent'

import './slider.css'

function Slider() {
    return (
        <div className='slider'>
            <div className='container'>
                <div className='slider-item'>

                    <SliderPhoto />

                    <SliderContent />
                    
                </div>
            </div>
        </div>
    )
}

export default Slider