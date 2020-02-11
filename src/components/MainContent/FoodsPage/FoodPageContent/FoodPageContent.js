import React from 'react'
import Title from '../../../Title/Title'

import './foodpagecontent.css'
import FoodsPageArticles from './FoodPageContent/FoodPafeArticles/FoodPageArticles'
import SideBar from './SideBar/SideBar'

const FoodPageContent = ({ 
    foodPageArticlesData, 
    category, 
    setCategory 
}) => {
    return (
        <div className="container">
            <Title title="Recent food articles" />

            <div className="content">
                <FoodsPageArticles
                    foodPageArticlesData={foodPageArticlesData}
                    category={category}
                    setCategory={setCategory} />
                <SideBar setCategory={setCategory} />
            </div>
        </div>
    )
}

export default FoodPageContent