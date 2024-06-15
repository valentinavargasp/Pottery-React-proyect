import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
    let { categoryId } = useParams();
    let [productos, setProductos] = useState([]);
    let [titulo, setTitulo] = useState("Productos");

    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;

        getDocs(q)
            .then((res) => {
                setProductos(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            });

        if (categoryId) {
            const categoriasRef = collection(db, "categorias");
            const catQuery = query(categoriasRef, where("id", "==", categoryId));
            getDocs(catQuery)
                .then((res) => {
                    if (res.docs.length > 0) {
                        setTitulo(res.docs[0].data().nombre);
                    }
                });
        } else {
            setTitulo("Productos");
        }
    }, [categoryId]);

    return (
        <div className="productosContainer">
            <h1>{titulo}</h1>
            <ItemList productos={productos} />
        </div>
    );
};
