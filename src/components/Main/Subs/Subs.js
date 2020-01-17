import React from 'react'
import SubsInput from './SubsInput/SubsInput'

import './subs.css'
import Title from '../../Title/Title'
import SubsText from './SubsText/SubsText'

function Subs() {
    return (
        <div className="subs">

        <Title title='Subcribe to our Newsletter' />

        <SubsText />
      
        <SubsInput />

    </div>
    )
}

export default Subs