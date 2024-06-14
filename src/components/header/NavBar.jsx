import React from 'react'
import { NavLink } from 'react-router-dom'
import categories from "../../data/categorias.json";

export const NavBar = () => {
  return (
    <nav>
      <ul className='menuNav'>
        <li> <NavLink to="/" activeclassname="active" className="navLink"> Inicio </NavLink> </li>
        {
          categories.map((category) => {
            return (
              <li key={category.id}>
                <NavLink to={`/category/${category.id}`} activeclassname="active" className="navLink" >
                  {category.nombre}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
