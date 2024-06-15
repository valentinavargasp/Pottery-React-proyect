import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';

export const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto, restarCantidadProducto } = useContext(CartContext);

    const handleSumar = (producto) => {
        if (producto.cantidad < producto.stock) {
            restarCantidadProducto(producto); // Utiliza restarCantidadProducto para decrementar la cantidad
        }
    };

    const handleRestar = (producto) => {
        if (producto.cantidad > 1) {
            restarCantidadProducto(producto); // Utiliza restarCantidadProducto para decrementar la cantidad
        }
    };

    return (
        <div>
            {carrito.map((prod) => (
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <p>Precio unit: ${prod.precio.toFixed(2)}</p>
                    <p>Precio total: ${(prod.precio * prod.cantidad).toFixed(2)}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <div className="itemCount">
                        <button onClick={() => handleRestar(prod)}>-</button>
                        <span>{prod.cantidad}</span>
                        <button onClick={() => handleSumar(prod)}>+</button>
                    </div>
                    <button onClick={() => eliminarProducto(prod)}>Eliminar Producto</button>
                </div>
            ))}

            {carrito.length > 0 ? (
                <>
                    <h2>Total: ${calcularTotal().toFixed(2)}</h2>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </>
            ) : (
                <h2>Carrito Vacío</h2>
            )}
        </div>
    );
};



