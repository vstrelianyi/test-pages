import React from 'react';
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

import './header.css'

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='navbar'>

                    <Logo />

                    <Nav />
                  
                </div>
            </div>
        </header>
    )
}

export default Header