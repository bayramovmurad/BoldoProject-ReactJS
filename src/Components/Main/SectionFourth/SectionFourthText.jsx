import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Change from './Change'


function SectionFourthText({ Title, P1, P2 }) {

    const [showHideZr, setShowHideZr] = useState(false)
    const [showHideOn, setShowHideOn] = useState(false)

    const [btnShowHide, setBtnShowHide] = useState(false)
    const [btnShowHideOn, setBtnShowHideOn] = useState(false)

    function showHideZero() {
        setShowHideZr(!showHideZr)
        setBtnShowHide(!btnShowHide)
        
    }
    function showHideOne() {
        setShowHideOn(!showHideOn)
        setBtnShowHideOn(!btnShowHideOn)

    }

    return (
        <div class="angle-text-all">

            <div class="angle-text-left">
                <h3>{Title}</h3>
            </div>




            <div class="angle-text-right">
                <div className="all-zero-st">
                    <div class="angle-down-up-zero">
                        <p>{P1}</p>
                        {
                            btnShowHide ?
                                <>

                                    <i onClick={() => showHideZero()} class="fa-solid fa-angle-up" style={{ display: 'flex' }}></i>

                                </> : <svg onClick={() => showHideZero()} svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="14" cy="14" r="14" fill="#0A2640" />
                                    <path d="M8 12L14 18L20 12" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                        }
                    </div>
                    {

                        showHideZr ?
                            <>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat non accusantium ipsam obcaecati earum minus asperiores sint a dolore. Delectus animi illum pariatur qui alias blanditiis itaque neque repudiandae?
                                </p>

                            </> : null
                    }

                </div>

                <div className="all-zero-st">
                    <div class="angle-down-up-one">
                        <p>{P2}</p>


                        {
                            btnShowHideOn ?
                                <>
                                    <i onClick={() => showHideOne()} class="fa-solid fa-angle-up" style={{display:'flex'}}></i>

                                </> : <svg onClick={() => showHideOne()} width="28" height="28" viewBox="0 0 28 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="14" cy="14" r="14" fill="#0A2640" />
                                    <path d="M8 12L14 18L20 12" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                        }


                    </div>
                    {
                        showHideOn ?
                            <>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat non accusantium ipsam obcaecati earum minus asperiores sint a dolore. Delectus animi illum pariatur qui alias blanditiis itaque neque repudiandae?
                                </p>
                            </> : null
                    }
                </div>


            </div>
        </div >

    )
}

export default SectionFourthText