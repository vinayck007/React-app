
import React from 'react';

const TotalPrice = ({ products }) => {
  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Total Price</h2>
      <p>${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default TotalPrice;
