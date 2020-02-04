import React from 'react'
import {Link} from 'react-router-dom'

import MainSocial from '../../../../../../Main/MainSocial/MainSocial'
import ReadMoreBtn from '../../../../../../Main/Btn/ReadMoreBtn'

import './singlefoodarticle.css'

const SingleFoodArticle = ({
    id,
    image,
    category,
    year,
    title, showFullArticle
}) => {
    return (
        <div className='stories-little__item post-item item'>
        <img className="post-img" src={image} alt={title} />

        <MainSocial />

        <div className="stories-little__item-cat">
            <span>{category}</span>
            <span>{year}</span>
        </div>
        <Link to='/singleArticlePage' 
            className="stories-little__item-title post-item-title"
            onClick={() => showFullArticle(id)}>
            {title}
        </Link>

       <ReadMoreBtn />
       

    </div>

    )
    
}

export default SingleFoodArticle