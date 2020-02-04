import React from 'react'
//import foodPageArticlesData from '../FoodsPage/FoodPageContent/FoodPageContent/FoodPafeArticles/foodPageArticlesData'

import './singlearticlepage.css'
import Article from './Article/Article';


const SingleArticlePage = ({ foodPageArticlesData, id }) => {

    const filterById = id ? (article) => article.id === id : Boolean;


    return (
        <div >
            {foodPageArticlesData.filter(filterById).map(({
                id,
                image,
                category,
                year,
                title,
                text,
                author
            }) => (
                    <Article key={id} 
                    {...{id,image, category, year, title, text, author}} />
                ))

            }
        </div>
    )
}

export default SingleArticlePage