import React from 'react'
import Logo from '../../Header/Logo'
import UlList from '../../Header/UlList'
import AboutCard from './AboutCard'

function AboutHeader() {
    return (
        <div id="header">
            <div className="header-head-container">
                <Logo />
                <UlList />
            </div>
            <AboutCard
                H5={"About"}
                H1={"We love to make great things, things that matter."}
                P={"Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure."}
            />
        </div>

    )
}

export default AboutHeader