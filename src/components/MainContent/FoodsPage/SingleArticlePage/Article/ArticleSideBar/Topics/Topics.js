import React from 'react'

import './topics.css'
import Title from '../../../../../../Title/Title'
import Topic from './Topic/Topic'

const Topics = () => {
    return (
        <div className='topics'>
            <Title title='Topics' />

            <Topic name='Travel' quantity='12' />
            <Topic name='Tour' quantity='22' />
            <Topic name='Destination' quantity='37' />
            <Topic name='Drinks' quantity='42' />
            <Topic name='Food' quantity='132' />
            <Topic name='Gravel pit' quantity='120' />
            <Topic name='OnetwoOnetwo' quantity='122' />
        </div>
    )
}


export default Topics