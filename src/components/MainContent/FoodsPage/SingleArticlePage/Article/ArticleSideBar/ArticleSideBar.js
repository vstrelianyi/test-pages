import React from 'react'
import ArticleSearch from './ArticleSearch/ArticleSearch'
import Topics from './Topics/Topics'
import Categories from '../../../../../Main/Categories/Categories'
import ArticleBlogs from './ArticleBlogs/ArticleBlogs'
import Paragraph from './Paragraph/Paragraph'

import './articlesidebar.css'


const ArticleSideBar = () => {
    return (
        <div className='articleSideBar'>
            <ArticleSearch />
            <Topics />
            <ArticleBlogs />
            <Categories />
            <Paragraph />
        </div>
    )
}


export default ArticleSideBar