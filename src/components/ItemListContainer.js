// ItemListContainer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from './data';
import Items from './Items';


const ItemListContainer = ({ categories }) => {
  const { category } = useParams();

  // Si se accede a la ruta "/productos", mostrar las categorías
  if (!category) {
    return (
      <div>
        <h2>Categorías</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <a href={`/productos/${category}`}>{category}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Si se accede a una categoría específica, mostrar los productos de esa categoría
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="card-deck">
      {filteredProducts.map((product) => (
        <Items key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
