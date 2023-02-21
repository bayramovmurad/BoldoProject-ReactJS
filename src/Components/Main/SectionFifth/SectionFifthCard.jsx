import React from 'react'

function SectionFifthCard({imgFifthF, imgFifthM}) {
    return (

            <div class="section-blog-card">
                   <img src={imgFifthM} alt=""/>
                   <div class="blog-text-all">
                       <div class="blog-text-up">
                           <h4>Category</h4>
                           <p>November 22, 2021</p>
                       </div>
                       <div class="blog-text-mid">
                           <h3>Pitch termsheet backing validation focus release.</h3>
                       </div>
                       <div class="blog-text-down">
                           <img src={imgFifthF} alt=""/>
                           <p>Chandler Bing</p>
                       </div>
                   </div>
               </div>
            
    )
}

export default SectionFifthCard