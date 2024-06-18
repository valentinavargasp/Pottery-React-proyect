import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';

export const Item = ({ producto }) => {
    const { agregarCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleSumar = () => {
        if (cantidad < producto.stock) {
            setCantidad(cantidad + 1);
        }
    };

    const handleAgregar = () => {
        agregarCarrito(producto, cantidad);
    };

    return (
        <div className='containerCards'>
            <div className="producto">
                <div className='imageProducto'>
                    <img className="imgProducto" src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className='detailsProducto'>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <Link to={`/item/${producto.id}`}>Ver más</Link>
                </div>
                <div className='cardFooter'>
                    <p>${producto.precio}</p>
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