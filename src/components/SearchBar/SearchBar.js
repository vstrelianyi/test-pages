import React from 'react';

import './searchbar.css'
import glass from '../img/magnifying-glass.svg'

function SearchBar() {
    return (
        <div className="about-search">
        <input className="search" type="search" placeholder="search" />
        <div className='glass'>
            <img src={glass} alt="" />
        </div>
    </div>
    )
}

export default SearchBar