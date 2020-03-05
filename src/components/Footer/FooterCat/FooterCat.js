import React from 'react'

import './footercat.css'
import FooterTitle from '../FooterTitle/FooterTitle'

function FooterCat() {
    return (
        <div className="footer-cat">
           
            <FooterTitle footerTitle='Categories'/>

            <a href="#" className="footer-cat__link">Food</a>
            <a href="#" className="footer-cat__link">Restaurant</a>
            <a href="#" className="footer-cat__link">Dessert</a>
            <a href="#" className="footer-cat__link">Lifestyle</a>
            <a href="#" className="footer-cat__link">Recipes</a>
        </div>
    )
}


export default FooterCat