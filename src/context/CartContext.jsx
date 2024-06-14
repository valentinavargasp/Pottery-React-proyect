import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

    const calcularCantidad = () => {
        return carrito.length;
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

return (
<CartContext.Provider  value={{ carrito, agregarCarrito, calcularCantidad, calcularTotal, vaciarCarrito }}>
    {children}
</CartContext.Provider>
)
}