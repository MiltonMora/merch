import React from 'react';

const Product = ({ key, product, handleAddToCar }) => {
  return (
    <div className="Products-item" key={key}>
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCar(product)}>Comprar</button>
    </div>
  );
};

export default Product;
