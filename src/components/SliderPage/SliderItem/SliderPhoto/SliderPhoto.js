import React from 'react';


import './sliderphoto.css'

function SliderPhoto({image}){
    return(
        <div className='slider-photo'>
           <img src={image} className='slider-img'></img>
        </div>
    )
}

export default SliderPhoto