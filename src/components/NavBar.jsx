import React from 'react'
import './NavBar.css'


export default function NavBar() {
  return (
    <div>
      <ul className='nav'>
        <li className='cont'> <a href='#'>Home</a></li>
        <li className='cont'> <a href='#'>About Us</a></li>
        <li className='cont'> <a href='#'>Contact Us</a></li>
        <li className='cont'> <a href='#'>Terms and Conditi</a></li>
        <li className='cont'> <a href='#'>FeedBack</a></li>
      </ul>
    </div>
  )
}
