import React from 'react';
import Share from './Share'
import View from './View'
import Like from './Like'
import Comment from './Comment'

import './mainsocial.css'

function MainSocial() {
    return(
        <div class="stories-little__item-social">
                            <a href='#' class="stories-little__social-icon">
                                <View />                 
                            </a>
                            <a href='#' class="stories-little__social-icon">
                                <Like />                        
                            </a>
                            <a href='#' class="stories-little__social-icon">
                                <Comment />                             
                            </a>
                            <a href='#' class="stories-little__social-icon">
                                <Share /> 
                            </a>
                        </div>
    )
}

export default MainSocial