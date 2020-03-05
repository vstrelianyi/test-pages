import React from 'react';
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import { Animated } from "react-animated-css"

import './header.css'

function Header( {favCount} ) {
    return (
        <Animated 
        animationIn="bounceInDown" 
        animationInDuration={1500} 
        isVisible={true} >
            <header className='header'>
                <div className='container'>
                    <div className='navbar'>
                  
    
                        <Logo />

                    
    
                        <Nav favCount={favCount}/>
                      
                    </div>
                </div>
            </header>
            </Animated>
    )
}

export default Header