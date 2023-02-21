import React from 'react'
import SectionFifth from './SectionFifth/SectionFifth'
import SectionFourth from './SectionFourth/SectionFourth'
import SectionOne from './SectionOne/SectionOne'
import SectionSecond from './SectionSecond/SectionSecond'
import Email from './SectionSixthEm/Email'
import SectionThird from './SectionThird/SectionThird'
import SectionSliderY from './SliderY/SectionSliderY'

function Main() {
  return (
    <main>
        <section>
            <SectionOne/>
            <SectionSecond/>
            <SectionThird/>
            <SectionSliderY/>
            <SectionFourth/>
            <SectionFifth/>
            <Email/>
        </section>
    </main>
  )
}

export default Main