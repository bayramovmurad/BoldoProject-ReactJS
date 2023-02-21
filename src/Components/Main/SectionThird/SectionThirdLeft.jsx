import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getZeroTextTh} from '../../../Actions/MainActions'

function SectionThirdLeft() {
    const zeroTextTh = useSelector(state => state.Data.zeroTextTh)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getZeroTextTh())
    })

    return (
        <div class="section-static-text-zero">
            <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
            <div class="section-static-text-card-zero">
                <i class="fa-solid fa-feather"></i>


                <p>{zeroTextTh.zp1}</p>
            </div>
            <div class="section-static-text-card-zero">
                <i class="fa-solid fa-eye"></i>
                <p>{zeroTextTh.zp2}</p>
            </div>
            <div class="section-static-text-card-zero">
                <i class="fa-solid fa-sun"></i>
                <p>{zeroTextTh.zp3}</p>
            </div>
        </div>
    )
}

export default SectionThirdLeft