import React from 'react'

import './subsinput.css'

function SubsInput() {
    return (
        <div className="subs-mail">
            <input type="email" className="subs-mail-address" placeholder="Enter your e-mail" />
            <input type="button" className="subs-button" value="Subscribe" />
        </div>
    )
}

export default SubsInput