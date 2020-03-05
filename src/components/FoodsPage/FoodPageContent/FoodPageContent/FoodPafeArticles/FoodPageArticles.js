import React from 'react'
import SingleFoodAricle from './SingleFoodArticle/SingleFoodArticle'
import './foodpagearticles.css'
import LoadMoreBtn from '../../../../Main/LoadMoreBtn/LoadMoreBtn'

const FoodsPageArticles = ({foodPageArticlesData, category}) => {

    const condFn = category ? (article) => article.category === category : Boolean
    
    return (
        <div className='postsItems'>
            {foodPageArticlesData.filter(condFn).map(({
                id,
                image,
                category,
                year,
                title,
            }) => (
                
                    <SingleFoodAricle key={id} {...{image, category, year, title}}/>
                
                ))
            }
<LoadMoreBtn />
        </div>
    )
}

export default FoodsPageArticles