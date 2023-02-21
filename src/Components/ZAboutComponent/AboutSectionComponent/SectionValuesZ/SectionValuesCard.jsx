import React from 'react'

function SectionValuesCard({IMG,H4,P}) {
    return (
        <div class="z-values-card-all">
            <div class="z-values-img-card">
                <img src={IMG} alt="" />
            </div>
            <div class="z-values-text-card">
                <h4>{H4}</h4>
                <p>{P}</p>
            </div>
        </div>
    )
}

export default SectionValuesCard