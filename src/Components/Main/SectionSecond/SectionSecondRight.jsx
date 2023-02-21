import React from 'react'
import SectionSecondTick from './SectionSecondTick'

function SectionSecondRight({ Title }) {
    return (
        <div class="section-static-text-one">
            <h3>{Title}</h3>
           
                <SectionSecondTick
                    tickP={'We connect our customers with the best.'}
                />
                <SectionSecondTick
                    tickP={'Advisor success customer launch party.'}
                />
                <SectionSecondTick
                    tickP={'Business-to-consumer long tail.'}
                />
            </div>
    )
}

export default SectionSecondRight