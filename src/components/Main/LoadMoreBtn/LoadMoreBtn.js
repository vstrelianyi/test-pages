import React from 'react'
import {Link} from 'react-router-dom'


import './loadmorebtn.css'

const LoadMoreBtn = () => {
    return (
        <div className="btn load-more">
            <Link to='/' className="load-more-btn">load more. . .</Link>
        </div>
    )
}

export default LoadMoreBtn