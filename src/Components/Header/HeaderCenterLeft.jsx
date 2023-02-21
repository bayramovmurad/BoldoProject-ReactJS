import React from 'react'

function HeaderCenterLeft({H1,P,B1,B2}) {
  return (
    <div class="header-center-left-text">
      <h1>{H1}</h1>
      <p>{P}</p>
      <div class="header-center-left-button">
        <button>
          {B1}
        </button>
        <button>
          {B2}
        </button>
      </div>
    </div>
  )
}

export default HeaderCenterLeft