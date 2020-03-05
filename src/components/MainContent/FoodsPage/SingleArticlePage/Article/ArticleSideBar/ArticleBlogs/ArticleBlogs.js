import React from 'react'
import ArticleBlog from './ArticleBlog/ArticleBlog'

import './articleblogs.css'
import blog1 from '../../../../../../img/bg_2.jpg'
import blog2 from '../../../../../../img/bg_3.jpg'
import blog3 from '../../../../../../img/bg_4.jpg'
import Title from '../../../../../../Title/Title'

const ArticleBlogs = () => {
    return(
        <div className='articleBlogs'>
            <Title title='Blogs' />

            <ArticleBlog  
                bg={blog1} 
                blogTitle='Even the all-powerful Pointing has no control about the blind texts'
                date='13.05.2019'/>

            <ArticleBlog  
                bg={blog2} 
                blogTitle='Even the all-powerful Pointing has no control about the blind texts'
                date='13.05.2019'/>
                
            <ArticleBlog  
                bg={blog3} 
                blogTitle='Even the all-powerful Pointing has no control about the blind texts'
                date='13.05.2019'/>
        </div>
    )
}

export default ArticleBlogs