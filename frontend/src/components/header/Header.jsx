import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = ({isAuth}) => {
  return (
    <header>
        <div className="logo">EduHub</div>
        <div className="link">
            <Link  to={'/'}>Home</Link>
            <Link  to={'/courses'}>Course</Link>
            <Link  to={'/about'}>About</Link>
            <Link  to={'/account'}>Account</Link>

        </div>
    </header>
  )
}

export default Header
