import React from 'react';

const CartWidget = () => {
  return (
    <div>
      <span role="img" aria-label="cart">🛒</span>
      <span className="cart-num">5</span> {}
    </div>
  );
};

export default CartWidget;