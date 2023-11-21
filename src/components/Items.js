// Item.js
import React from 'react';

const Item = ({ id, name, precio }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <p>Precio: ${precio}</p>
      {/* Agrega más información del producto si es necesario */}
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Item;
