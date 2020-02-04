import React from 'react'
import Title from '../../../Title/Title'

import './foodpagecontent.css'
import FoodsPageArticles from './FoodPageContent/FoodPafeArticles/FoodPageArticles'
import SideBar from './SideBar/SideBar'

const FoodPageContent = ({ foodPageArticlesData, category, setCategory, showFullArticle }) => {

    
    return (
        <div className="container">
            <Title title="Recent food articles" />

            <div className="content">
                <FoodsPageArticles
                    foodPageArticlesData={foodPageArticlesData}
                    category={category}
                    showFullArticle={showFullArticle}
                    setCategory={setCategory} />
                <SideBar setCategory={setCategory} />
            </div>

        </div>
    )
}


// class FoodPageContent extends Component {

//     state = {
//         foodPageArticlesData,
//         category: null

//     }

//     setCategory = (category = null) => {
//         this.setState({category})
//     }


// render() {

//     return (
//         <div className="container">
//             <Title title="Recent food articles" />

//             <div className="content">
//                 <FoodsPageArticles foodPageArticlesData={this.state.foodPageArticlesData} category={this.state.category}/>
//                 <SideBar setCategory={this.setCategory}/>
//             </div>

//         </div>
//         )
//     }
// }

export default FoodPageContent