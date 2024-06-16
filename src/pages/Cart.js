import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className='cart-box'>
      <div className="shopping-cart">
        <h1>Your Shopping Cart</h1>
        <div className="cart-items">
          <div className="cart-item">
            <div className="item-details">
              <h3>Monthly Plan</h3>
              <p>$19.99 x 1</p>
              <button>Remove</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="item-details">
              <h3>Quarterly Plan</h3>
              <p>$54.99 x 1</p>
              <button>Remove</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="item-details">
              <h3>Yearly Plan</h3>
              <p>$199.99 x 1</p>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="cart-summary">
          <h3>Total: $274.97</h3> {/* This is just an example, the total should be calculated dynamically */}
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
