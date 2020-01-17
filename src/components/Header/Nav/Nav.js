import React from 'react'

import './nav.css'

function Nav() {
    return(
        <nav class="nav">
        <div class="hamburger-menu">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3 "></div>
        </div>
        <ul class="nav-list">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Foods</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Lifestyle</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </nav>
    )
}

export default Nav