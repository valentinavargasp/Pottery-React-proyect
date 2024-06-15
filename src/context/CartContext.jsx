import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarCarrito = (producto, cantidad = 1) => {
        const itemAgregado = { ...producto, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((item) => item.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    };

    const calcularCantidad = () => {
        return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    };

    const calcularTotal = () => {
        return carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    };

    const restarCantidadProducto = (producto) => {
        const nuevoCarrito = carrito.map(item =>
            item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
        ).filter(item => item.cantidad > 0);
        setCarrito(nuevoCarrito);
    };

    const eliminarProducto = (producto) => {
        const productoEliminar = carrito.find(prod => prod.id === producto.id)
        const indice = carrito.indexOf(productoEliminar);

        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(indice, 1);
        setCarrito(nuevoCarrito);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={{ carrito, agregarCarrito, calcularCantidad, calcularTotal, vaciarCarrito, restarCantidadProducto, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    );
};


