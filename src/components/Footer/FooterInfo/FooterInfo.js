import React from 'react'

import './footerinfo.css'
import FooterTitle from '../FooterTitle/FooterTitle'

function FooterInfo() {
    return (
        <div className="footer-info">

            <FooterTitle footerTitle='Information'/>

            <a href="#" className="footer-info__link">Tetms Of Uses</a>
            <a href="#" className="footer-info__link">About Stories</a>
            <a href="#" className="footer-info__link">Privacy Policy</a>
            <a href="#" className="footer-info__link">Accessibility Help</a>
            <a href="#" className="footer-info__link">Advertise With Us</a>
        </div>
    )
}


export default FooterInfo