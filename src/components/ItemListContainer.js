import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from './data';
import Items from './Items';

const LoadingGif = () => (
  <div className="loading-container">
    <img src="/assets/loading.gif" alt="Loading" />
  </div>
);

const ItemListContainer = ({ categories }) => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      const filtered = category
        ? products.filter((product) => product.category === category)
        : products;

      setFilteredProducts(filtered);
      setLoading(false);
    }, 1000);
  }, [category]);

  if (loading) {
    return <LoadingGif />;
  }

  return (
    <div>
      {category ? (
        <div className="card-deck">
          {filteredProducts.map((product) => (
            <Items key={product.id} {...product} />
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ItemListContainer;
