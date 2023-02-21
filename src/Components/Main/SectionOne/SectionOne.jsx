import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SectionOneCard from './SectionOneCard'
import SectionText from './SectionOneText'
import { getOurCards } from '../../../Actions/MainActions'

function SectionOne() {
    const ourCards = useSelector(state => state.Data.ourCards)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOurCards())
    },[])

  return (
    <div>
        <SectionText/>
        <div className="section-container-our">
            <SectionOneCard
            sectionImgCardOne={ourCards.img1}
            sectionTitleCardOne={ourCards.title1}
            />
            <SectionOneCard
            sectionImgCardOne={ourCards.img2}
            sectionTitleCardOne={ourCards.title2}
            />
            <SectionOneCard
            sectionImgCardOne={ourCards.img3}
            sectionTitleCardOne={ourCards.title3}
            />
        </div>
    </div>
  )
}

export default SectionOne