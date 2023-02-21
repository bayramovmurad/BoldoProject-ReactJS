import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAbsImgZ} from '../../../../Actions/MainActions'

function SectionAbsImg() {
    const absImgZ = useSelector(state => state.Data.absImgZ)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAbsImgZ())
    },[])

    return (
        <div class="z-section-container">
            <div class="z-section-container-images">
                <div class="z-section-card-images-left">
                    <img src={absImgZ.absPhoto1} alt="" />
                    <img src={absImgZ.absPhoto2} alt="" />
                </div>
                <div class="z-section-card-images-center">
                    <img src={absImgZ.absPhoto3} alt="" />
                </div>
                <div class="z-section-card-images-right">
                    <img src={absImgZ.absPhoto4} alt="" />
                    <img src={absImgZ.absPhoto5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectionAbsImg