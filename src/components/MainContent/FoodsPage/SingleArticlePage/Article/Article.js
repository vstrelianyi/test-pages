import React from 'react'
import ArticleSideBar from './ArticleSideBar/ArticleSideBar'

import './article.css'
import ArticleContent from './ArticleContent/ArticleContent'


const Article = ({
    id,
    image,
    image2,
    category,
    year,
    title,
    author,
    subTitle2,
    subTitle1,
    p1,
    p2  
}) => {
    return (
        <div className='articlePage'>

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

                <div className='article'>

                    <ArticleSideBar />

                    <ArticleContent 
                        image2={image2}   
                        subTitle1={subTitle1}
                        subTitle2={subTitle2}
                        p1={p1}
                        p2={p2}
                        author={author} />    
                  
                    
                </div>
            </div>
        </div>
    )
}


export default Article