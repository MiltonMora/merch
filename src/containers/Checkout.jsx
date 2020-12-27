import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Checkout.css';

const Checkout = () => {
  const {state: {cart}, removeFromCar } = useContext(AppContext);

  const handleRemoveCar = product => () => {
    removeFromCar(product)
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;  
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista</h3>
        {cart.length > 0 &&
          cart.map((el) => (
            <div className="Checkout-item" key={cart.indexOf(el)}>
              <div className="Checkout-element">
                  <h4>{el.title}</h4>
                  <span>$ {el.price}</span>
              </div>
              <button type="button" onClick={handleRemoveCar(el)}>Eliminar</button>
            </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
