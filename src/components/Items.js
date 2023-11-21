
import React from 'react';

const Items = ({ name, description, price, image, category }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <img src={image} className="card-img-top img-fluid" alt={name} />
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Categoría: {category}</p>
        <button className="btn btn-primary">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Items;
