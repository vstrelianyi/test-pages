import React from 'react';
import StoriesLittle from './StoriesLittle/StoriesLittle'
import BigStory from './BigStory/BigStory'
import Title from '../../../Title/Title'

import './stories.css'

function Stories({
        foodPageArticlesData,
        toggleLike
    }) {
    return(
        <div className='stories'>
            <div className='container'>

                <Title title="Recent stories"/>

                <div className='recent-stories'> 

                    <StoriesLittle 
                        foodPageArticlesData={foodPageArticlesData}
                        toggleLike={toggleLike} />

                    <BigStory />
                
                
                </div>
                
            </div>
        </div>
    )
}


export default Stories