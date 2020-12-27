import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Information.css';

const Information = () => {
  const {state: {cart}, addToBuyer} = useContext(AppContext);

  const form = useRef(null);
  const histrory = useHistory();

  const handleSubmit = () => {
    const fromData = new FormData(form.current);
    const buyer = {
      'name': fromData.get('name'),
      'email': fromData.get('email'),
      'address': fromData.get('address'),
      'apto': fromData.get('apto'),
      'city': fromData.get('city'),
      'country': fromData.get('country'),
      'state': fromData.get('state'),
      'cp': fromData.get('cp'),
      'phone': fromData.get('phone'),
    }
    addToBuyer(buyer);
    histrory.push('/checkout/payment');
    
  }

  return (
    <div className="Information">
      <div className="Information-contet">
        <div className="Information-header">
          <h2>Informacion de contat</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="address" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="city" name="city" />
            <input type="text" placeholder="country" name="country" />
            <input type="text" placeholder="state" name="state" />
            <input type="text" placeholder="cp" name="cp" />
            <input type="text" placeholder="phone" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos</h3>
        {cart.map( el => (
            <div className="Checkout-item" key={cart.indexOf(el)}>
            <div className="Checkout-element">
                <h4>{el.title}</h4>
                <span>$ {el.price}</span>
            </div>
          </div>
        ))}
        <div className="Information-item">
          <h4>Item Name</h4>
          <span>$ gatos</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
