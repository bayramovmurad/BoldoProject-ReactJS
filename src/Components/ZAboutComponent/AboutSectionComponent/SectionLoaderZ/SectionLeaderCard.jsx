import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeaderZ } from '../../../../Actions/MainActions'


function SectionLeaderCard() {
    const leaderZ = useSelector(state => state.Data.leaderZ)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getLeaderZ())
    })

    return (
        <div class="z-leader-container">
            <div class="z-leader-card">
                <img src={leaderZ.ImgL1} alt=""/>
                    <h3>{leaderZ.H3L1}</h3>
                    <p>{leaderZ.PL1}</p>
            </div>
            <div class="z-leader-card">
                <img src={leaderZ.ImgL2}  alt=""/>
                    <h3>{leaderZ.H3L2}</h3>
                    <p>{leaderZ.PL2}</p>
            </div>
            <div class="z-leader-card">
                <img src={leaderZ.ImgL3}  alt=""/>
                    <h3>{leaderZ.H3L3}</h3>
                    <p>{leaderZ.PL3}</p>
            </div>
        </div>
    )
}

export default SectionLeaderCard