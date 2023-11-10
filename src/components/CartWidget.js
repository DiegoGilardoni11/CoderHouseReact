import React from 'react';

const CartWidget = () => {
  const cartItemsCount = 5;

  const cartImageStyle = {
    width: '24px',
    height: '24px',
    marginRight: '5px',
  };

  const cartItemCountStyle = {
    color: 'black',
  };

  return (
    <div className="cart-widget">
      <img src="/carrito.png" alt="carro" style={cartImageStyle} />
      <span style={cartItemCountStyle}>{cartItemsCount}</span>
    </div>
  );
};

export default CartWidget;