import React from 'react';
import products from './data'; 
import ItemDetail from './ItemDetail'; 

const ItemDetailContainer = ({ itemId }) => {
  const selectedItem = products.find((product) => product.id === itemId);

  if (!selectedItem) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <ItemDetail {...selectedItem} />
    </div>
  );
};

export default ItemDetailContainer;
