import React from 'react'
import PostsItems from './PostsItems/PostsItems'
import AboutCreator from './AboutCreator/AboutCreator'

import './posts.css'
import Title from '../../Title/Title'

function Posts() {
    return (
        <div className='featured-posts'>
            <div className='container'>

                <div className='title-wrapper'>

                    <Title title="Reatured Posts"/>
                    
                </div>

                <div className='posts'>

                    <PostsItems />

                    <AboutCreator />

                </div>

            </div>
        </div>
    )
}

export default Posts