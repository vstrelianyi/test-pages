import React from 'react';
import './footer.css';
import FooterStories from './FooterStories/FooterStories';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterCat from './FooterCat/FooterCat'
import FooterQ from './FooterQ/FooterQ';
import Creator from './Creator/Creator';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-content">

                   <FooterStories />

                   <FooterInfo />

                   <FooterCat />

                   <FooterQ />
                
                </div>

                <Creator />

            </div>
        </footer>
    )
}

export default Footer