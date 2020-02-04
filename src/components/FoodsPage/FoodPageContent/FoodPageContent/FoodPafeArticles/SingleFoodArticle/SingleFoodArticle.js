import React from 'react'
import {Link} from 'react-router-dom'

import MainSocial from '../../../../../Main/MainSocial/MainSocial'
import ReadMoreBtn from '../../../../../Main/Btn/ReadMoreBtn'

import './singlefoodarticle.css'

const SingleFoodArticle = ({
    image,
    category,
    year,
    title,
}) => {
    return (
        <div className='stories-little__item post-item article'>
        <img className="post-img" src={image} alt={title} />

        <MainSocial />

        <div className="stories-little__item-cat">
            <span>{category}</span>
            <span>{year}</span>
        </div>
        <Link to='/singleArticlePage' className="stories-little__item-title post-item-title">
            {title}
        </Link>

       <ReadMoreBtn />

    </div>
    )
}

export default SingleFoodArticle