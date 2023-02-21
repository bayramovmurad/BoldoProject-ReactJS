import React from 'react'
import SectionValuesCard from './SectionValuesCard'
import Img from '../../../../images/blueback.png'
import Img2 from '../../../../images/greenback.png'
import Img3 from '../../../../images/hands.png'

function SectionValues() {
    return (
        <div class="z-section-values-container">
            <h5>Our values</h5>
            <h3>Things in we believe</h3>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
            <SectionValuesCard
            H4={'We are commited.'}
            P={'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.'}
            IMG ={Img}
            />
            <SectionValuesCard
            H4={'We are responsible.'}
            P={'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.'}
            IMG ={Img2}

            />
            <SectionValuesCard
            H4={'We aim for progress.'}
            P={'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.'}
            IMG ={Img3}
            />
        </div>
    )
}

export default SectionValues