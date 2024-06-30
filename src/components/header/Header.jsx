import React from 'react';
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { CartWidget } from './CartWidget';

export const Header = () => {
  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand mx-auto">
            <img src={logo} alt="Logo" className='logoImg' />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <NavBar />
          </div>
          <div className="cart-widget">
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
}






