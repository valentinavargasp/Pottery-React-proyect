import React from 'react';

export const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {
    return (
        <div className='itemCount'>
            <button onClick={handleRestar}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar}>+</button>
            <button onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    );
};

