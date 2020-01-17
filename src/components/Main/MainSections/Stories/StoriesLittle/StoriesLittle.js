import React from 'react'
import StoriesLittleItem from './StoriesLittleItem'
import storiesLittleData from './storiesLittleData'

import './storieslittle.css'

function StoriesLittle() {
    return (
        <div className='stories-little'>

            {storiesLittleData.map(({
                id,
                image,
                category,
                year,
                title,
            }) => (
                    <div key={id}>
                        <StoriesLittleItem {...{image, category, year, title}}
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


export default StoriesLittle