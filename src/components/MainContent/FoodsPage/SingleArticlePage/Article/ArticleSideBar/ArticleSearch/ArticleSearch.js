import React from 'react'
import glass from '../../../../../../img/magnifying-glass.svg'

import './articlesearch.css'

const ArticleSearch = () => {
    return (
        <div className='search-bar'>
            <input className="search" type="search" placeholder="Type a key word and hit enter" />
            <img src={glass} height="20" alt="" />
        </div>
                )
            }
            
            
export default ArticleSearch