import React from 'react'

import './articlesocial.css'
import View from '../../../../../../Main/MainSocial/View'
import Like from '../../../../../../Main/MainSocial/Like'
import Comment from '../../../../../../Main/MainSocial/Comment'
import Share from '../../../../../../Main/MainSocial/Share'
import MainSocial from '../../../../../../Main/MainSocial/MainSocial'

const ArticleSocial = () => {
    return (
        <div className='articleSocial'>


           <div className='articleSocial-icons'>
                <a href='#' className="articleSocial-icon">
                    <View /> 57
                </a>
                <a href='#' className="articleSocial-icon">
                    <Like /> 59
                </a>
                <a href='#' className="articleSocial-icon">
                   <Comment /> 13
                </a>
                <a href='#' className="articleSocial-icon">
                    <Share  /> 12
                </a>

                
           </div>

        </div>
    )
}

export default ArticleSocial