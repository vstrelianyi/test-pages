import React from 'react'

import './footerstories.css'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twitter.svg'
import facebook from '../../img/facebook.svg'
import telegram from '../../img/telegram.svg'
import FooterTitle from '../FooterTitle/FooterTitle'
import FooterStoriesText from './FooterStoriesText/FooterStoriesText'

function FooterStories() {
    return (
        <div className="footer-stories">

        <FooterTitle footerTitle='ThankGodForFood'/>

        <FooterStoriesText />

        <div className="footer-stories__social">
            <a href="#" className="footer-stories__social-link">
                <img src={instagram} alt="" />
            </a>
            <a href="#" className="footer-stories__social-link">
                <img src={twitter} alt="" />
            </a>
            <a href="#" className="footer-stories__social-link">
                <img src={facebook} alt="" />
            </a>
            <a href="#" className="footer-stories__social-link">
                <img src={telegram} alt="" />
            </a>
        </div>

    </div>
    )
}


export default FooterStories