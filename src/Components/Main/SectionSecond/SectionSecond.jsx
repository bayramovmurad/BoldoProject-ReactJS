import React from 'react'
import SectionSecondLeft from './SectionSecondLeft'
import SectionSecondRight from './SectionSecondRight'

function SectionSecond() {
  return (
    <div className="section-container-static-one">
        <SectionSecondLeft/>
        <SectionSecondRight
        Title={'We connect our customers with the best, and help them keep up-and stay open.'}
        />
    </div>
  )
}

export default SectionSecond