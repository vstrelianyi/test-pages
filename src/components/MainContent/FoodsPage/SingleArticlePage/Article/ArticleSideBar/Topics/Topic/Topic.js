import React from 'react'

import './topic.css'

const Topic = ({name, quantity}) => {
    return (
        <div className='topic'>
                <div class="topic-name">{name}</div>
                <div class="topic-number">({quantity})</div>
        </div>
    )
}


export default Topic