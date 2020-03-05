import React, { Component } from 'react';
import sliderPageData from './sliderPagaData'
import { Animated } from "react-animated-css"

import Slider from 'react-slick'

import SliderItem from './SliderItem/SliderItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './sliderpage.css'

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className='arrow-next' onClick={onClick}>next</div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='arrow-prev' onClick={onClick}>prev</div>
    );
}


class SliderPage extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <Animated 
            animationIn="fadeIn"
        animationInDuration={2500} 
        isVisible={true} >
            <div className='slider'>
                <div className='container'>

                    <Slider {...settings}>
                        {sliderPageData.map(({
                            id,
                            image,
                            title,
                            text
                        }) => (
                                <div key={id}>
                                    <SliderItem {...{image, title, text}}/>
                                </div>
                            ))}
                    </Slider>

                </div>
            </div>
            </Animated>
        )
    }

}


export default SliderPage

