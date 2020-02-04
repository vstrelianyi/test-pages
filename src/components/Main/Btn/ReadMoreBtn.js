import React from 'react'
import {Link} from 'react-router-dom'
// import arrowToRight from '../../img/arrowToRight.svg'

import './readmorebtn.css'

function ReadMoreBtn() {
    return (
        <div className="btn post-btn">
            <Link to='/' className="read-more__btn">read more</Link>
            {/* <img src={arrowToRight} height='20' alt="" /> */}
        </div>
    )
}

export default ReadMoreBtn