import React from 'react'

import './paragraph.css'
import Title from '../../../../../../Title/Title'

const Paragraph = () => {
    return (
        <div className="paragraph">
            <Title title='Paragraph' />
            <p className="paragraph-text">Lorem ipsum 
                sdolor sit amet consectetur adipisicing elit. Commodi quibusdam
                vel et ipsa, praesentium sequi hic deserunt omnis vitae 
                suscipit voluptas mollitia aliquam cum rerum illo
                iure velit, nam necessitatibus.</p>
        </div>
    )
}

export default Paragraph