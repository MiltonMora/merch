import React, { useContext } from 'react';

import Product from './Product';
import AppContext from '../context/AppContext';

import '../styles/components/Products.css';

const Products = () => {
  const {state: {products}, addToCar} = useContext(AppContext);

  const handleAddToCar = product => () => {
    addToCar(product)
  }
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCar={handleAddToCar}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
