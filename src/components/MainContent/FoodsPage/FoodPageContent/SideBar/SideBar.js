import React from 'react'
import Interesting from './Interesting/Interesting'
import Categories from '../../../../Main/Categories/Categories'

import './sidebar.css'


const SideBar = ({setCategory}) => {
    return (
        <div className="sidebar">
            <Categories setCategory={setCategory}/>
            <Interesting />
        </div>
    )
}

export default SideBar