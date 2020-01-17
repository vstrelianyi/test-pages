import React from 'react';

import photo1 from '../../img/bg_2.jpg'

import './sliderphoto.css'

function SliderPhoto(){
    return(
        <div className='slider-photo'>
           <img src={photo1} className='slider-img'></img>
        </div>
    )
}

export default SliderPhoto