import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className="hero-image">
      <div className="overlay">
        <div className='heroText'>
          <h1 className="hero-title">Juro solemnemente que mis intenciones no son buenas.</h1>
          <p className="hero-subtitle">Bienvenido a Pottery Store. Descubre la magia en cada pieza</p>
          <Link to="/productos"><button className="hero-button">Accio Tienda</button></Link>
        </div>
      </div>
    </div>

  )
}
