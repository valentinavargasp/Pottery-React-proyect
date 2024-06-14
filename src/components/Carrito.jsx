import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    return (
        <div>
            {carrito.map((prod) => (
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <p>Precio unit: ${prod.precio.toFixed(2)}</p>
                    <p>Precio total: ${(prod.precio * prod.cantidad).toFixed(2)}</p>
                    <p>Cant: {prod.cantidad}</p>
                </div>
            ))}

            {carrito.length > 0 ? (
                <>
                    <h2>Total: ${calcularTotal()}</h2>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </>
            ) : (
                <h2>Carrito Vacío</h2>
            )}
        </div>
    );
};


