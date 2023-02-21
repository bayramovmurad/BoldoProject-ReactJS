import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import HeaderScrool from '../Components/HeaderScrool/HeaderScrool'
import AboutHeader from '../Components/ZAboutComponent/AboutHeaderComponent/AboutHeader'
import AboutSection from '../Components/ZAboutComponent/AboutSectionComponent/AboutSection'

function AboutPages() {
  const [loadingAbout, setLoadingAbout] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoadingAbout(true)
    }, 2000)
    setLoadingAbout(false)
  }, [])
  return (
    <div>
      {
        loadingAbout ?
          <div>
            <HeaderScrool/>
            <AboutHeader/>
            <AboutSection/>
            <Footer />
          </div>
          : <div id='loader-gif'>
            <img src="https://gifimage.net/wp-content/uploads/2018/04/loading-gif-transparent-background.gif" alt="" />
          </div>
      }
    </div>
  )
}

export default AboutPages