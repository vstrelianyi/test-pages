import React from 'react';
import StoriesLittle from './StoriesLittle/StoriesLittle'
import BigStory from './BigStory/BigStory'
import Title from '../../../Title/Title'

import './stories.css'

function Stories() {
    return(
        <div className='stories'>
            <div className='container'>

                <Title title="Recent stories"/>

                <div className='recent-stories'> 

                    <StoriesLittle />

                    <BigStory />
                
                
                </div>
                
            </div>
        </div>
    )
}


export default Stories