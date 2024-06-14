import React from 'react'
import { NavBar } from './NavBar'
import logo from '../../assets/img/logo.svg'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <header className='header'>
      <Link to="/"> <img className='logoImg' src={logo} alt="" /> </Link>
      <NavBar />
      <CartWidget />
    </header>
  )
}
