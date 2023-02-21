import React from 'react'
import Logo from '../Header/Logo'

import HeaderCenterLeft from './HeaderCenterLeft'
import HeaderCenterRight from './HeaderCenterRight'
import HeaderSlider from './HeaderSlider'
import UlList from './UlList'


function Headers() {
  return (
    <header>
      <div className="header-head-container">
        <Logo/>
        <UlList/>
      </div>
      <div className="header-center-container">
        <HeaderCenterLeft
        H1={'Save time by building  fast with Boldo Template '}
        P={'Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.'}
        B1={'Buy template'}
        B2={'Explore'}
        />
        <HeaderCenterRight/>
      </div>
      <HeaderSlider/>
    </header>

  )
}

export default Headers