import React from 'react'

import './articletext.css'

const ArticleText = ({ 
        image2,
        subTitle2,
        subTitle1,
        p1,
        p2,
        author }) => {
    return(
        <div>
            <h2 className="article-sub-title">{subTitle1}</h2>
            <p className="article-text">{p1}</p>
            <img src={image2} className="articleImg"/>
            <h2 className="article-sub-title">{subTitle2}</h2>
            <p className="article-text">{p2}</p>
            
            <span className="article-author"> - by {author}</span>

        </div>
    )
}

export default ArticleText