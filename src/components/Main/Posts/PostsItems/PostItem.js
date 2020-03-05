import React from 'react'
import MainSocial from '../../MainSocial/MainSocial'
import ReadMoreBtn from '../../Btn/ReadMoreBtn'

import './postitem.css'
// import './../../MainSections/Stories/StoriesLittle/storieslittleitem.css'



const PostItem = ({
    image,
    category,
    year,
    title,
}) => {
    return(
        <div className='stories-little__item post-item'>
            <img className="post-img" src={image} alt={title} />

            <MainSocial />

            <div className="stories-little__item-cat">
                <span>{category}</span>
                <span>{year}</span>
            </div>
            <div className="stories-little__item-title post-item-title">
                {title}
            </div>

           <ReadMoreBtn />

        </div>
    )
}

export default PostItem