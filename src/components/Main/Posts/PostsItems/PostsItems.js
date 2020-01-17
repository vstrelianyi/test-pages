import React from 'react'
import postItemData from './postItemData'
import PostItem from './PostItem'


import './postsitems.css'

function PostsItems() {
    return (
        <div className='postsItems'>
            {postItemData.map(({
                id,
                image,
                category,
                year,
                title,
            }) => (
                    <div key={id}>
                        <PostItem {...{ image, category, year, title }}
                        // image={image}
                        // category={category}
                        // year={year}
                        // title={title}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default PostsItems