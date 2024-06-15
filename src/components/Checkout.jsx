import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

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
            <>
                <h2> Travesura realizada 🧙🏼‍♂️🦉</h2>
                <h3>Hacé el seguimiento de tu pedido con el siguiente código: {docId} </h3>
            </>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input type='text' placeholder='Nombre'{...register('nombre')} />
                <input type='text' placeholder='Apellido' {...register('apellido')} />
                <input type='email' placeholder='E-mail'{...register('email')} />
                <button type='submit'>Comprar</button>
            </form>
        </div>
    )
}
