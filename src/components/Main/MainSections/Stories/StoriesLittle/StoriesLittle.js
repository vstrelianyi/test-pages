import React, { Component } from 'react'
import StoriesLittleItem from './StoriesLittleItem'

import './storieslittle.css'

class StoriesLittle extends Component {

    state = {
        items: 4
    };

render() {
    const {
        foodPageArticlesData,
        toggleLike
    } = this.props
    return (
            <div className='stories-little'>
                {foodPageArticlesData.map(({
                    id,
                    image,
                    category,
                    year,
                    title,
                    isLiked
                }) => (
                        
                    <StoriesLittleItem 
                        key={id} 
                        {...{image, category, year, title, id, isLiked, toggleLike}}/>
                       
                    )).slice(0, this.state.items)
                }
            </div>
        )
}
}

export default StoriesLittle