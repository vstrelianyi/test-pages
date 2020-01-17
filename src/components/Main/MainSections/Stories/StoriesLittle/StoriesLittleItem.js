import React from 'react'
import PropTypes from 'prop-types'

import MainSocial from '../../../MainSocial/MainSocial'
import ReadMoreBtn from '../../../Btn/ReadMoreBtn'

import './storieslittleitem.css'

const StoriesLittleItem = ({
    image,
    category,
    year,
    title,
}) => {
    return(
        <div className='stories-little__item'>
            <img class="stories-little__item-img" src={image} alt={title} />

            <MainSocial />

            <div class="stories-little__item-cat">
                <span>{category}</span>
                <span>{year}</span>
            </div>
            <div class="stories-little__item-title">
                {title}
            </div>

           <ReadMoreBtn />

        </div>
    )
}

StoriesLittleItem.propTypes = {
    category: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default StoriesLittleItem