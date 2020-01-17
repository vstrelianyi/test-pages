import React from 'react'
import arrowToRight from '../../img/arrowToRight.svg'

import './readmorebtn.css'

function ReadMoreBtn() {
    return (
        <div className="btn post-btn">
            <a href="#" className="read-more__btn">read more</a>
            {/* <img src={arrowToRight} height='20' alt="" /> */}
        </div>
    )
}

export default ReadMoreBtn