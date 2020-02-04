import React from 'react'
import Title from '../../Title/Title'
import Category from './Category/Category'

import './categories.css'

const Categories = ({setCategory}) => {
    return(
        <div> <Title title="Categories"/>
            <div className="tags-bar">
                    <div className="tags">
                        <Category setCategory = {setCategory} category = 'ALL' />
                        <Category setCategory = {setCategory} setCat="desert" category='desert' />
                        <Category setCategory = {setCategory} setCat="food" category='food' />
                        <Category setCategory = {setCategory} setCat="soup" category='soup' />
                        <Category setCategory = {setCategory} setCat="tasty" category='tasty'/>
                        <Category setCategory = {setCategory} setCat="drinks" category='drinks' />
                        <Category setCategory = {setCategory} setCat="eat good" category='eat good' />
                        <Category setCategory = {setCategory} setCat="dish" category='dish' />
                    </div>
                </div> </div>
    )
}


export default Categories