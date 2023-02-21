import React from 'react'
import Email from '../../Main/SectionSixthEm/Email'
import AboutSectionImg from './AboutSectionAbsImg/AboutSectionImg'
import SectionLoaderZ from './SectionLoaderZ/SectionLoaderZ'
import SectionNumber from './SectionNumberZ/SectionNumber'
import SectionValues from './SectionValuesZ/SectionValues'

function AboutSection() {
  return (
    <main>
        <section>
            <AboutSectionImg/>
        </section>
        <section id='z-number'>
          <SectionNumber/>
        </section>
        <section >
          <SectionLoaderZ/>
        </section>
        <section id="z-section-values-all">
          <SectionValues/>
        </section>
        <section>
          <Email/>
        </section>
    </main>
  )
}

export default AboutSection