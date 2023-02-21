import React, { useState } from 'react'
import { useEffect } from 'react';

function HeaderScrool() {
    const [scroolTop, setScroolTop] = useState(0)

    function headerScrl(){
        const windowScrool = document.documentElement.scrollTop;
        const heightScrool = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scroolAll = (windowScrool / heightScrool) * 100;

        setScroolTop(scroolAll)

    }
    useEffect(() => {
        window.addEventListener('scroll', headerScrl)

        return () => window.removeEventListener('scroll', headerScrl)
    })
    return (
        <div id="progress-bar">
            <div id="bar" style={{width: `${scroolTop}%`}}>

            </div>
        </div>
    )
}

export default HeaderScrool