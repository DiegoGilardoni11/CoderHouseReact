import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {}
      <div className="container">
        <Link className="navbar-brand" to="/">
          Nombre Tienda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">
                Productos
              </Link>
            </li>
          </ul>
          <div className="ml-auto">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
