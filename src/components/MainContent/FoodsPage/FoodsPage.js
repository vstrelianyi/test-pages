import React from 'react'
import FoodPageIntro from './FoodPageIntro/FoodPageIntro'
import Subs from '../../Main/Subs/Subs'
import FoodPageContent from './FoodPageContent/FoodPageContent'



const FoodsPage = ({
    foodPageArticlesData, 
    filterFn, 
    setCategory, 
    toggleLike
}) => { 
    return (
        <div>
            <FoodPageIntro />
            <FoodPageContent 
                foodPageArticlesData={foodPageArticlesData}
                filterFn={filterFn}
                setCategory={setCategory}
                toggleLike={toggleLike}
                />
            <Subs />
        </div>
    )
}

export default FoodsPage