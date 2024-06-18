import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import reliquias from '../assets/reliquias.png'


export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState('');

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }

        const pedidosRef = collection(db, 'pedidos');
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <div className='sectionTravesura'>
                <div className='travesuraRealizada'>
                    <h2>Travesura realizada 🧙🏼‍♂️🦉</h2>
                    <h3>Hacé el seguimiento de tu pedido con el siguiente código:</h3>
                    <p className='codigo'>{docId}</p>
                    <button className='btn' onClick={() => window.location.href = '/'}>Volver a la tienda</button>
                </div>
            </div>
        );
    };

    return (
        <div className='formularioSection'>
            <img src={reliquias} />
            <h3> Checkout</h3>
            <div className='formularioCheckout'>
                <form onSubmit={handleSubmit(comprar)}>
                    <input type='text' placeholder='Nombre'{...register('nombre')} />
                    <input type='text' placeholder='Apellido' {...register('apellido')} />
                    <input type='email' placeholder='E-mail'{...register('email')} />
                    <button type='submit'>Comprar</button>
                </form>
            </div>
        </div>
    )
}
