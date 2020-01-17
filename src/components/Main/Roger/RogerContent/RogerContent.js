import React from 'react'

import './rogercontent.css'
import play from '../../../img/play-button-arrowhead.svg'
import RogerText from './RogerText/RogerText'


function RogerContent() {
    return (
        <div className="roger-content">
            <div className="roger-video">
                <a href='#'>watch video
            <img src={play} alt="" />
                </a>
            </div>
            <div className="roger-name">
                Roger Bosch
        </div>

            <RogerText />

            <div className="roger-sig">
                Roger.Bosch
            </div>
        </div>
    )
}

export default RogerContent