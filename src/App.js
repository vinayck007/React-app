
import React, { useState } from 'react';
import ProductList from './components/AddProduct';
import TotalPrice from './components/TotalPrice';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className='products'>
      <h1>Product Management</h1>
      <ProductList products={products} addProduct={addProduct} deleteProduct={deleteProduct} />
      <TotalPrice products={products} />
    </div>
  );
};

export default App;
