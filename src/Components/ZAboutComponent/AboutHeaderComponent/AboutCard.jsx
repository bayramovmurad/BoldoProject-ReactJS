import React from 'react'

function AboutCard({ H1, H5, P }) {
    return (
        <div class="z-header-center-container">
            <h5>{H5}</h5>
            <h1>{H1}</h1>
            <p>{P}</p>
        </div>
    )
}

export default AboutCard