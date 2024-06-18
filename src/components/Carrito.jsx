import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import howgarts from '../assets/portada.png'

export const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto, restarCantidadProducto } = useContext(CartContext);

    const handleSumar = (producto) => {
        if (producto.cantidad < producto.stock) {
            restarCantidadProducto(producto);
        }
    };

    const handleRestar = (producto) => {
        if (producto.cantidad > 1) {
            restarCantidadProducto(producto);
        }
    };

    return (
        <div className='carritoCompra'>
            {carrito.map((prod) => (
                <div key={prod.id} className='carritoDetail'>
                    <div className='imageCarritoDetail'>
                        <img className="imgProducto" src={prod.imagen} alt={prod.nombre} />
                    </div>

                    <div className='carritoDescription'>
                        <h3>{prod.nombre}</h3>
                        <p>Precio unit: ${prod.precio.toFixed(2)}</p>
                        <p>Precio total: ${(prod.precio * prod.cantidad).toFixed(2)}</p>
                        <p>Cant: {prod.cantidad}</p>
                    </div>

                    <div className="itemCount">
                        <button onClick={() => handleRestar(prod)}>-</button>
                        <span>{prod.cantidad}</span>
                        <button onClick={() => handleSumar(prod)}>+</button>
                        <button className='eliminarProducto' onClick={() => eliminarProducto(prod)}>Eliminar Producto</button>
                    </div>

                </div>
            ))}

            {carrito.length > 0 ? (
                <div className='totalCarrito'>
                    <div className='totalVaciar'>
                        <h2>Total: ${calcularTotal().toFixed(2)}</h2>
                        <button className="vaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                    <Link to="/checkout">Finalizar Compra</Link>
                </div>
            ) : (
                <div className='carritoVacio'>
                    <h2>Carrito Vacío</h2>
                    <Link to='/productos'> Explorá nuestros productos</Link>
                    <img src={howgarts} />
                </div>


            )}
        </div>
    );
};



