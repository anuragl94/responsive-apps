import React from 'react'

import './style.css'
import iconSrc from './palette_icon.svg'

export default function StylePicker () {
  return (
    <div className='floating-palette-button'>
      <img src={iconSrc} />
    </div>
  )
}
