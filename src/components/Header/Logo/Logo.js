import React from 'react'
import { Link } from 'react-router-dom'

import './logo.css'

function Logo() {
    return (
        <div >
            <Link to='/' className='logo'>
                <h2 className="logo-name">ThankGodForFood<span>.</span></h2>
            </Link>
        </div>
    )
}

export default Logo