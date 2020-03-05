import React from 'react'
import StatsInfoItem from './StatsInfoItem'
import statsInfoData from './statsInfoData'

import './statsinfo.css'
import Title from '../../../Title/Title'
import StatText from './StatText/StatText'

function StatsInfo() {
    return (
        <div className="about-stories__content" >

            <Title title='About ThankGodForFood' />

            <StatText />

          <div className='about-stories__stat'>
                {statsInfoData.map(({
                    id,
                    number,
                    ofWhat
                }) => (
                        <div key={id}>
                            <StatsInfoItem {...{number, ofWhat}}
                                // image={image}
                                // category={category}
                                // year={year}
                                // title={title}
                            />
                        </div>
                    ))
                }
          </div>

        </div>
    )
}



export default StatsInfo