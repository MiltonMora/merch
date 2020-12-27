import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Payment.css';

const Payment = () => {
  
  const {state: {cart, buyer}, addNewOrder} = useContext(AppContext);
  const histrory = useHistory();
  
  const paypalOptions = {
    clientId: 'Afa0g53FQQB9RtlyE6sfvQv4XT12GN8q9rub-yWV6fUJMNA-rjS-DmFVdD2HC1MS1GVGqr5s3INRf4Jt',
    intent: 'capture'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;  
  }

  const handlePaymentSuccess= (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder);
      histrory.push('/checkout/success');
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map( el => (
            <div className="Checkout-item" key={cart.indexOf(el)}>
            <div className="Checkout-element">
                <h4>{el.title}</h4>
                <span>$ {el.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('payment start')}
            onPaymentSuccess={ data => handlePaymentSuccess(data)}
            onPaymentError = { error => console.log(error)}
            onPaymentCancel = { data => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
