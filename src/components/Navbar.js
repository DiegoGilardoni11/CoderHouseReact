import React from 'react';
import CartWidget from './CartWidget';

const Navbar = ({ brand, categories, onCategoryChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">{brand}</a>
        <ul className="navbar-nav mr-auto">
          {categories.map((category, index) => (
            <li key={index} className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => onCategoryChange(category.name)}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        <CartWidget /> {}
      </div>
    </nav>
  );
};

export default Navbar;