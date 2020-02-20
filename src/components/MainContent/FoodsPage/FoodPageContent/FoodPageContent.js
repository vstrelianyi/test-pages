import React from 'react'
import Title from '../../../Title/Title'

import './foodpagecontent.css'
import FoodPageArticles from './FoodPageContent/FoodPafeArticles/FoodPageArticles'
import SideBar from './SideBar/SideBar'

const FoodPageContent = ({ 
    foodPageArticlesData, 
    filterFn, 
    setCategory,
    toggleLike 
}) => {
    return (
        <div className="container">
            <Title title="Recent food articles" />

            <div className="content">
                <FoodPageArticles
                    foodPageArticlesData={foodPageArticlesData}
                    filterFn={filterFn}
                    toggleLike={toggleLike}/>
                <SideBar setCategory={setCategory} />
            </div>
        </div>
    )
}

export default FoodPageContent