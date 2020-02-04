import React, { Component } from 'react'
import Title from '../../Title/Title'

import './foodpagecontent.css'
import FoodsPageArticles from './FoodPageContent/FoodPafeArticles/FoodPageArticles'
import SideBar from './SideBar/SideBar'
import foodPageArticlesData from './FoodPageContent/FoodPafeArticles/foodPageArticlesData'


class FoodPageContent extends Component {

    state = {
        foodPageArticlesData,
        category: null

    }

    setCategory = (category = null) => {
        this.setState({category})
    }

    //СategoryFilter = () => {foodPageArticlesData.filter(function(article) { return article.id === 2})}

render() {

    return (
        <div className="container">
            <Title title="Recent food articles" />

            <div className="content">
                <FoodsPageArticles foodPageArticlesData={this.state.foodPageArticlesData} category={this.state.category}/>
                <SideBar setCategory={this.setCategory}/>
            </div>

        </div>
        )
    }
}

export default FoodPageContent