import React from 'react'

const Comment = ({name, comment}) => {
    console.log(name, comment)
    return (
        <div className='post'>
            <div>{name}</div>
            <div>{comment}</div>
        </div>
    )
}

export default Comment