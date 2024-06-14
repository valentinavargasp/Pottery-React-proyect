import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';


export const Item = ({ producto }) => {

  const { agregarCarrito } = useContext(CartContext);

  return (

    <div className='containerCards'>
      <div className="producto">
        <img className="imgProducto" src={producto.imagen} />
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <div className='cardFooter'>
          <p>${producto.precio}</p>
          <Link to={`/item/${producto.id}`}>Ver más</Link>
          <button onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}
