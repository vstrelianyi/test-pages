import React from 'react'
import FoodPageIntro from './FoodPageIntro/FoodPageIntro'
import Subs from '../Main/Subs/Subs'
import FoodPageContent from './FoodPageContent/FoodPageContent'



const FoodsPage = () => {
    return (
        <div>
            <FoodPageIntro />
            <FoodPageContent />
            <Subs />

        </div>
    )
}

export default FoodsPage