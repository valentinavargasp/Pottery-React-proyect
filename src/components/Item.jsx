import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {producto} ) => {
    return (
      <div className='containerCards'> 
      <div className="producto">
        <img className="imgProducto" src={producto.imagen} />
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <div className='cardFooter'>
        <p>${producto.precio}</p>
<Link to={`/item/${producto.id}`}>Ver más</Link>
        </div>
      </div>
      </div>
    )
  }
