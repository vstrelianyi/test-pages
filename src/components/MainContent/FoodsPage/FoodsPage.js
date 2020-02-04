import React from 'react'
import FoodPageIntro from './FoodPageIntro/FoodPageIntro'
import Subs from '../../Main/Subs/Subs'
import FoodPageContent from './FoodPageContent/FoodPageContent'



const FoodsPage = ({foodPageArticlesData, category, setCategory, showFullArticle}) => { 

    return (
        <div>
            <FoodPageIntro />
            <FoodPageContent 
                foodPageArticlesData={foodPageArticlesData}
                category={category}
                setCategory={setCategory}
                showFullArticle={showFullArticle}/>
            <Subs />

        </div>
    )
}

export default FoodsPage