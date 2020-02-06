import React from 'react'

import './articleblog.css'
import Comment from '../../../../../../../Main/MainSocial/Comment'

const ArticleBlog = ({ bg, blogTitle, date }) => {
    return (
        <div className="articleBlog">
            <div >
                <img src={bg} className="blogBg" />
            </div>
            <div className="blog">
                <div className="blog-title">
                    <a href="#">{blogTitle}</a>
                </div>
                <div className="blog-info">
                    <div className="blog-date">{date}</div>
                    <div className="blog-comments">
                        <Comment />
                        <span>19</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleBlog