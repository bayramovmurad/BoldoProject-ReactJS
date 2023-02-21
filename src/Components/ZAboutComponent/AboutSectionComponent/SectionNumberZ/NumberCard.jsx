import React, { useEffect } from 'react'

function NumberCard({ H5, H3 }) {

    // let num = document.querySelectorAll('.num')
    // let i = 0
    // let a = Number(num[0].innerHTML)
    // let b = Number(num[1].innerHTML)
    // let d = Number(num[2].innerHTML)
    // let c = Number(num[3].innerHTML)
    // function numberPlus() {
    //     i++
    //     if (i <= a) {
    //         num[0].innerHTML = i
    //     }
    //     if (i <= b) {
    //         num[1].innerHTML = i
    //     }
    //     if (i <= d) {
    //         num[2].innerHTML = i
    //     }
    //     if (i <= c) {
    //         num[3].innerHTML = i
    //     }
    // }
    //     setInterval(numberPlus, 10)
    //     let say = 0;
    //     window.addEventListener('scroll', () => {
    //         let g = document.documentElement.scrollTop;
    //         if (g > 1200) {
    //             say++;
    //             if (say == 1) {
    //                 setInterval(numberPlus, 10)
    //             }

    //         }
    //     })

    return (
        <div class="z-number-container">
            <h5>{H5}</h5>
            <h3>{H3}</h3>
            <div class="z-number-all">
                <div class="z-number-card">
                    <h4 className='num'>120m</h4>
                    <p>Cool feature title</p>
                </div>
                <div class="z-number-card">
                    <h4 className='num'>10.000</h4>
                    <p>Cool feature title</p>
                </div>
                <div class="z-number-card">
                    <h4 className='num'>240</h4>
                    <p>Cool feature title</p>
                </div>
            </div>
        </div>
    )
}

export default NumberCard