import React from 'react'
import FoodPageIntro from './FoodPageIntro/FoodPageIntro'
import Subs from '../../Main/Subs/Subs'
import FoodPageContent from './FoodPageContent/FoodPageContent'



const FoodsPage = ({
    foodPageArticlesData, 
    category, 
    setCategory, 
}) => { 
    return (
        <div>
            <FoodPageIntro />
            <FoodPageContent 
                foodPageArticlesData={foodPageArticlesData}
                category={category}
                setCategory={setCategory}
                />
            <Subs />
        </div>
    )
}

export default FoodsPage