import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriasRef = collection(db, "categorias");
    getDocs(categoriasRef)
      .then((res) => {
        setCategories(res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }));
      });
  }, []);

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" activeClassName="active" className="navLink nav-link" aria-current="page">Inicio</NavLink>
      </li>
      {categories.map((category) => (
        <li key={category.id} className="nav-item">
          <NavLink to={`/category/${category.id}`} activeClassName="active" className="navLink nav-link">
            {category.nombre}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

