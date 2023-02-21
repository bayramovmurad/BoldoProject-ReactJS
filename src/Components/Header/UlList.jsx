import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUlList } from '../../Actions/MainActions'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function UlList() {
    const ulList = useSelector(state => state.Data.ulList)
    const dispatch = useDispatch()

    // const [icon, setIcon] = useState(false)

    // function iconClose() {
    //     setIcon(!icon)
    // }

    // let closed = document.querySelector('.fa-x').addEventListener('click', function(){
    //     let ulList = document.querySelector('.ul-list').addEventListener('click', function(){
    //         ulList.style.display = 'none'
    //     })
    // })    

    useEffect(() => {
        dispatch(getUlList())
    }, [])
    return (

        <nav>
            <input type="checkbox" id="check-id" />
            {/* <input type="checkbox" id='check-x' /> */}

            <ul class="ul-list">
                <Link to={'/'}>{ulList.product}</Link>
                <Link to={'/about'}>{ulList.about}</Link>
                <Link to={'#'}>{ulList.services}</Link>
                <button>{ulList.login}</button>
                {/* <label htmlFor="check-x">
                <i class="fa-solid fa-x" style={{ color: 'white' }}></i>
                </label> */}
                
            </ul>
            <label htmlFor="check-id">
                <i class="fa-solid fa-bars"></i>
            </label>




        </nav>

    )
}

export default UlList