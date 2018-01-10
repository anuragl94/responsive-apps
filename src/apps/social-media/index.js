import React from 'react'

import './style.css'

export default function PageNotFound (props) {
  return (
    <div className='SocialMedia page'>
      <nav>
        <a href=''>Home</a>
        <a href=''>About</a>
      </nav>
      <main className='width-container'>
          Here is my social media website design. On smaller devices, the navbar shifts to the bottom for better accessibility.
          This approach however has its flaws as this design increases chances of accidentally clicking a menu item because of
          the resting position of the thumb.
      </main>
    </div>
  )
}
