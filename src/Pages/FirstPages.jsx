import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Headers from '../Components/Header/Headers'
import HeaderScrool from '../Components/HeaderScrool/HeaderScrool'
import Main from '../Components/Main/Main'

function FirstPages() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
    setLoading(false)
  }, [])
  return (
    <div>
      {
        loading ?
          <div>
            <HeaderScrool />
              <Headers />
            <Main />
            <Footer />
          </div>
          : <div id='loader-gif'>
            <img src="https://gifimage.net/wp-content/uploads/2018/04/loading-gif-transparent-background.gif" alt="" />
          </div>
      }
    </div>
  )
}

export default FirstPages