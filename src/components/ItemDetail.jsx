import React from 'react'

export const ItemDetail = ({producto}) => {
    return (
        <div className='containerCards'>
            <div className="producto">
                <img className="imgProducto" src={producto.imagen} />
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <div className='cardFooter'>
                    <p>${producto.precio}</p>
                </div>
            </div>
        </div>
    )
}
