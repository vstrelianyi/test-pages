import React, { Component } from 'react'
import Main from '../Main/Main'
import SliderPage from '../SliderPage/SliderPage'
import FoodsPage from './FoodsPage/FoodsPage'
import SingleArticlePage from './FoodsPage/SingleArticlePage/SingleArticlePage'
import foodPageArticlesData from './FoodsPage/FoodPageContent/FoodPageContent/FoodPafeArticles/foodPageArticlesData'

import { Route } from "react-router-dom"

class MainContent extends Component {
    state = {
        foodPageArticlesData,
        category: null,
        id: 0
    }

    setCategory = (category = null) => {
        this.setState({ category })
    }
        //СategoryFilter = () => {foodPageArticlesData.filter(function(article) { return article.id === 2})}

    // showFullArticle = (id) => {
    //     this.setState({id})
    //     console.log(id)
    // }

    render() {

        return (
            <div>
              
                    <Route exact path='/' component={SliderPage} />
                    <Route exact path='/' component={Main} />
                    <Route exact path='/foodsPage' 
                        render={() => ( 
                            <FoodsPage foodPageArticlesData={this.state.foodPageArticlesData}
                                category={this.state.category}
                                setCategory={this.setCategory}
                                />)} />

                    <Route path='/foodsPage/:article' component={SingleArticlePage}/>

                    {/* <Route path='/singleArticlePage'
                        render={() => (
                            <SingleArticlePage
                                foodPageArticlesData={this.state.foodPageArticlesData} 
                                id={this.state.id}
                                />)} /> */}
               
            </div>
        )
    }
}

// const MainContent = () => {
//     return (
//         <div>
//             <Route exact path='/' component={SliderPage} />
//             <Route exact path='/' component={Main} />
//             <Route path='/foodsPage' component={FoodsPage} />
//             <Route path='/singleArticlePage' component={SingleArticlePage} />
//         </div>
//     )
// }

export default MainContent