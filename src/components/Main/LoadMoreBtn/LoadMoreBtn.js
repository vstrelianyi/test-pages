import React from 'react'

import './loadmorebtn.css'

const LoadMoreBtn = ({loadMoreFn}) => {
    return (
        <div className="loadMore">
            <button
                className="load-more-button"
                onClick={loadMoreFn}>load more. . .</button>
        </div>
    )
}

export default LoadMoreBtn