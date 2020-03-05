import React from 'react'

import './footerq.css'
import FooterTitle from '../FooterTitle/FooterTitle'
import pin from '../../img/pin.svg'
import phone from '../../img/telephone-handle-silhouette.svg'
import email from '../../img/email-envelope-button.svg'

function FooterQ() {
    return (
        <div className="footer-q">

            <FooterTitle footerTitle='Have a question?' />

            <a href="#" className="footer-q__link">
                <img src={pin} alt="" />
                13D Fake St. Kyiv View, Kyiv obl., Ukraine
            </a>
            <a href="#" className="footer-q__link">
                <img src={phone} alt="" />
                +3 (8) 067 362 11 22
            </a>
            <a href="#" className="footer-q__link">
                <img src={email} alt="" />
                info@yourdomain.com
            </a>
        </div>
    )
}


export default FooterQ