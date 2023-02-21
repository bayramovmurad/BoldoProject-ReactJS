import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getLogo } from '../../Actions/MainActions'


function Logo() {
    const logo = useSelector(state=> state.Data.logo)
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getLogo())
    },[])
    return (
        <div class="logo-first">
            <img src={logo.img} alt=""/>
            <h2>{logo.text}</h2>
        </div>
    )
}
export default Logo