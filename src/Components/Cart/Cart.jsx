import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.css';
import CartItem from '../CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, ClearCart } = useCartContext();

  const removeAllItemsFromLocalStorage = () => {
    cart.forEach((item) => {
      const key = `cartItem_${item.id}_amount`;
      console.log(`Removing key: ${key}`);
      localStorage.removeItem(key);
    });
  };

  if (cart.length === 0) {
    return (
      <div className="empty_div">
        <h3>No item in cart</h3>
      </div>
    );
  }

  return (
    <div className='CartContainer'>
      <div className="CartContainerHeading">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <div className="cart-item">
          {
            cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />
            })
          }
        </div>
        <hr />
        <div className="ContinuShop_ClearCart">
          <Link to={"/products"}>
            <button className='beautiful-button'>Continue Shopping</button>
          </Link>
          <button
            onClick={() => {
              ClearCart();
              removeAllItemsFromLocalStorage();
            }}
            className='beautiful-button'
            style={{ backgroundColor: "orange" }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
