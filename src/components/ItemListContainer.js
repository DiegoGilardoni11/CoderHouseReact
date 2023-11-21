import React from 'react';
import products from './data';
import Items from './Items'; 

const ItemListContainer = () => {
  return (
    <div className="card-deck">
      {products.map((product) => (
        <Items key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
