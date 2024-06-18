import React from 'react';
import cart from '../assets/cart4.svg'

export const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {
    return (
        <div className='itemCount'>
            <button onClick={handleRestar}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar}>+</button>
            <button onClick={handleAgregar}>
                <img src={cart}></img>
            </button>
        </div>
    );
};

