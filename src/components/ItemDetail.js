
import React from 'react';

const ItemDetail = ({ id, name, description, precio }) => {
  return (
    <div className="item-detail">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: ${precio}</p>
      {}
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ItemDetail;
