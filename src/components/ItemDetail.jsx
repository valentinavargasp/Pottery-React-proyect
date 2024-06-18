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
        <div className='containerDetail'>
            <div className="productoDetail">
                <div className='imageProductoDetail'>
                    <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className='detailsProductoDetail'>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <div className='cardFooterDetail'>
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
        </div>
    );
};


