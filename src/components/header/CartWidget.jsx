import React, { useContext } from 'react'
import cart4 from '../../assets/img/cart4.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext);

  return (
    <Link className="Cart" to='/carrito'>
        <img src={cart4} alt="" /> {calcularCantidad()}
    </Link>
  )
}
