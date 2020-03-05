import React from 'react'
import Title from '../../../../../Title/Title'

import './interesting.css'

const Interesting = () => {
    return(
        <div> <Title title='Interesting...' />
             <div className="interesting">
                    <div className="interesting-img">
                        <div className="interesting-item interesting-item1">
                            <div className="text">
                                <a href="#">Foods</a>
                            </div>
                        </div>
                        <div className="interesting-item interesting-item2">
                            <div className="text">
                                <a href="#">Lifestyle</a>
                            </div>
                        </div>
                        <div className="interesting-item interesting-item3">
                            <div className="text">
                                <a href="#">Others</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default Interesting