import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

export default function PageNotFound (props) {
  return (
    <main className='Home page'>
      <h1 className='centered'>Select an app</h1>
      <ul className='app-links'>
        <li>
          <Link className='app-link' to='/social-media'>
            Social Media
          </Link>
        </li>
      </ul>
    </main>
  )
}
