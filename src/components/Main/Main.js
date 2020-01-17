import React from 'react';
import Stories from './MainSections/Stories/Stories';
import Posts from './Posts/Posts';
import Roger from './Roger/Roger';
import Stats from './Stats/Stats';
import Subs from './Subs/Subs'




import './main.css';

function Main() {
    return (
        <div className='main'>
            
            <Stories />

            <Posts />

            <Roger />

            <Stats />

            <Subs />
            
        </div>
    )
}

export default Main