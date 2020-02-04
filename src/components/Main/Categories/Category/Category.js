import React from 'react'

import './category.css'

const Category = ({category, setCategory, setCat}) => {
    console.log(setCategory)
    return(
    <button className="tag" onClick={() => setCategory(setCat)}>{category}</button>
    )
}
 
export default Category