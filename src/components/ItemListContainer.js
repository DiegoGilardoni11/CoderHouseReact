import React from 'react';

const ItemListContainer = ({ greeting, category }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        {category === "Inicio" ? (
            <div>
              <h2>{greeting}</h2>
              <p>
                Bienvenido a la página de inicio. Este es un mensaje de bienvenida especial para la página de inicio.
              </p>
            </div>
          ) : (
            <h2>{}</h2>
          )}
          {category === "Productos" ? (
            <div>
              <h2>{greeting}</h2>
              <p>
                Ejemplo de Producto:
              </p>
              <div>
                <h3>Disco SSD Kingston</h3>
                <p>Disco de estado solido marca Kingston con una tasa de transferencia de 3000 mb/s</p>
                <p>Precio: $15000.00</p>
              </div>
            </div>
          ) : (
            <h2>{}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
