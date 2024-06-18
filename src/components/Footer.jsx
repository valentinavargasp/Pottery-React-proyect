import React from 'react'
import instagram from '../assets/instagram.svg'
import whatsapp from '../assets/whatsapp.svg'
import linkedin from '../assets/linkedin.svg'

export const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; 2024 Pottery. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://wa.me/542954811116?text=Hola%20Valentina!%20Te%20escribo%20desde%20tu%20p%C3%A1gina%20web%20%F0%9F%98%84" target='blank' className='socialIcons'>
          <img src={whatsapp} alt="" />
        </a>
        <a href="https://www.instagram.com/valentinapescarav/" target='blank' className='socialIcons'>
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/avalentinavargas/" target='blank' className='socialIcons'>
          <img src={linkedin} alt="" />
        </a>
      </div>
      <p>Made with ❤ by <a href="https://github.com/valentinavargasp" target="blank">valentinavargasp</a> </p>
    </div>
  )
}
