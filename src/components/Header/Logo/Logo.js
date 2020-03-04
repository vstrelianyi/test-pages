import React from 'react'
import { NavLink } from 'react-router-dom'

import './logo.css'

function Logo() {
    return (
        <div >
            <NavLink to='/home' className='logo'>
                <h2 className="logo-name">ThankGodForFood<span>.</span></h2>
            </NavLink>
        </div>
    )
}

export default Logo