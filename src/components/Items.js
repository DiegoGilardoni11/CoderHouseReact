import React from 'react';


const Items = ({ id, name, description, price, image }) => {
    return (
        <div className="card" style={{ maxWidth: '400px' }}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <img src={image} className="card-img-top img-fluid" alt={name} />
            <p className="card-text">Precio: ${price}</p>
            <button className="btn btn-primary">Añadir al carrito</button>
          </div>
        </div>
      );
    };
export default Items;
