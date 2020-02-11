import React from 'react'

import './category.css'

const Category = ({category, setCategory, setCat}) => {

    return(
        <button className="tag" onClick={() => setCategory(setCat)}>{category}</button>
    )
}
 
export default Category