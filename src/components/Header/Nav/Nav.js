import React from 'react'
import {Link} from 'react-router-dom'

import './nav.css'



function Nav({favCount}) {
    return(
        <nav className="nav">
        <div className="hamburger-menu">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3 "></div>
        </div>
        <ul className="nav-list">
            <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/' className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to='/foodsPage' className="nav-link">Foods</Link>
            </li>
            <li className="nav-item">
                <Link to='/favourite' className="nav-link">Favourite{favCount ? ` (${favCount})` : ''}</Link>
            </li>
            <li className="nav-item">
                <Link to='/' className="nav-link">Contact</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Nav