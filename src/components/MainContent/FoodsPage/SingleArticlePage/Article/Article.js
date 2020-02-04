import React from 'react'

import './article.css'

const Article = ({
    id,
    image,
    category,
    year,
    title,
    text,
    author
}) => {
    return (
        <div className='article'>

            <div className='article-intro'>
                <img className="article-img" src={image} alt={title} />
                <div className='article-title'>
                    <div className='main-article-title'>{title}</div>
                    <span>Home ></span>
                    <span>Foods ></span>
                    <span>{category} ></span>
                </div>
                <div className="overlay"></div>
            </div>

            <div className="container">

                <div>{text}</div>
                <div>{author}</div>

                <div>
                    <span>{year}</span>
                </div>
                
            </div>
        </div>
    )
}


export default Article