import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ producto }) => {
    const { agregarCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        if (cantidad < producto.stock) setCantidad(cantidad + 1);
    };

    const handleAgregar = () => {
        agregarCarrito(producto, cantidad);
    };

    return (
        <div className='containerCards'>
            <div className="producto">
                <img className="imgProducto" src={producto.imagen} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <div className='cardFooter'>
                    <p>${producto.precio}</p>
                </div>
                <ItemCount 
                    cantidad={cantidad}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar={handleAgregar}
                />
            </div>
        </div>
    );
};


