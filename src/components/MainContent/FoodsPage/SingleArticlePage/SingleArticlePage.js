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
                image2,
                category,
                year,
                title,
                author,
                subTitle1,
                subTitle2,
                p1,
                p2,
            }) => (
                    <Article key={id} 
                    {...{id, image, image2, category, year, title, 
                        author, 
                        subTitle1,
                        subTitle2,
                        p1,
                        p2,}} />
                ))

            }
        </div>
    )
}

export default SingleArticlePage