import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFifthImgF, getFifthImgM } from '../../../Actions/MainActions'
import SectionFifthCard from './SectionFifthCard'

function SectionFifthButton() {
    const fifthImgM = useSelector(state => state.Data.fifthImgM)
    const fifthImgF = useSelector(state => state.Data.fifthImgF)

    const dispatch = useDispatch()

    const [button, setButton] = useState(false)



    useEffect(() => {
        dispatch(getFifthImgF())
        dispatch(getFifthImgM())
    }, [])

    function buttonShow(){
        setButton(!button)
    }
    return (

        <div>
            <div class="section-container-blog">


                <SectionFifthCard
                    imgFifthM={fifthImgM.cardImg1}
                    imgFifthF={fifthImgF.userPhoto1}
                />
                <SectionFifthCard
                    imgFifthM={fifthImgM.cardImg2}
                    imgFifthF={fifthImgF.userPhoto2}
                />
                <SectionFifthCard
                    imgFifthM={fifthImgM.cardImg3}
                    imgFifthF={fifthImgF.userPhoto3}
                />
                {
                    button ?
                        <>
                            <SectionFifthCard
                                imgFifthM={fifthImgM.cardImg1}
                                imgFifthF={fifthImgF.userPhoto1}
                            />
                            <SectionFifthCard
                                imgFifthM={fifthImgM.cardImg2}
                                imgFifthF={fifthImgF.userPhoto2}
                            />
                            <SectionFifthCard
                                imgFifthM={fifthImgM.cardImg3}
                                imgFifthF={fifthImgF.userPhoto3}
                            />
                        </> : null
                }
            </div>
            <div class="section-blog-button">
                <button onClick={()=>buttonShow()}>
                {
                    button?
                    <p>Show Less</p>:<p>Load More</p>
                }
                </button>
            </div>
        </div>
    )
}

export default SectionFifthButton