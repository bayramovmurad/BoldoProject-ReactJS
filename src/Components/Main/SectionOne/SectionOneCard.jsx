import React from 'react'

function SectionOneCard({ sectionImgCardOne, sectionTitleCardOne }) {
  return (
    <div class="section-our-card">
      <div class="our-react">
        <img src={sectionImgCardOne} alt=""/>
          <div class="section-our-card-text">
            <h3>{sectionTitleCardOne}</h3>
            <p>Learning curve network effects return on investment.</p>
            <div class="section-our-link">
              <a href="#">
                <h4>Explore page</h4>
              </a>
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14H19" stroke="#0A2640" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M12 7L19 14L12 21" stroke="#0A2640" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
      </div>

    </div>
  )
}

export default SectionOneCard