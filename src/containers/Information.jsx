import React from 'react';

import '../styles/components/Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-contet">
        <div className="Information-header">
          <h2>Informacion de contat</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="address" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="city" name="city" />
            <input type="text" placeholder="country" name="country" />
            <input type="text" placeholder="estado" name="state" />
            <input type="text" placeholder="cp" name="cp" />
            <input type="text" placeholder="phone" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">regresar</div>
          <div className="Information-next">Pagar</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos</h3>
        <div className="Information-item">
          <h4>Item Name</h4>
          <span>$ gatos</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
