import React from 'react'
import SearchBar from '../../../SearchBar/SearchBar'

import './aboutcreator.css'

import authorPhoto from './../../../img/author.jpg'
import Title from '../../../Title/Title'
import AboutText from './AboutText/AboutText'

function AboutCreator() {
    return (
        <div className="about">
            <div className="about-me">

                <Title title='About me' />
                
                <div className="about-photo">
                    <img src={authorPhoto} width="150" height="150" alt="" />
                </div>

                <AboutText />
               
                <SearchBar />

            </div>
        </div>
    )
}

export default AboutCreator