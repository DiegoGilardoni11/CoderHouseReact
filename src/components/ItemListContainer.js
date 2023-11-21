// ItemListContainer.js
import React from 'react';
import products from './data'; // Importa el arreglo de productos
import Item from './Items'; // Importa el componente Item

const ItemListContainer = () => {
  return (
    <div>
      <h2>Productos</h2>
      <div className="item-list">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
