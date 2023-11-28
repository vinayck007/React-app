
import React, { useState } from 'react';

const ProductList = ({ products, addProduct, deleteProduct }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    const product = { id, name, price: parseFloat(price) };
    addProduct(product);
    setId('');
    setName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add Product</h3>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default ProductList;
