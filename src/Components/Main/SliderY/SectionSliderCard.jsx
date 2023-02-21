import React from 'react'

function SectionSliderCard({ Title, IMG, H5, H6 }) {
    return (
        <div className="slider-circle-card">
            <div className="slider-card-c-top">
                <p>{Title}</p>
            </div>
            <div className="slider-circle-b">
                <img src={IMG} alt="" />
                <div className="circle-card-text">
                    <h5>{H5}</h5>
                    <h6>{H6}</h6>
                </div>
            </div>
        </div>
    )
}

export default SectionSliderCard