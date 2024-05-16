import React from 'react'
import { NavBar } from './NavBar'
import logo from '../../assets/img/logo.svg'
import { CartWidget } from './CartWidget'

export const Header = () => {
  return (
    <header className='header'>
        <a href="#"><img className='logoImg' src={logo} alt="" /></a>
    <NavBar />
    <CartWidget />
    </header>
  )
}
