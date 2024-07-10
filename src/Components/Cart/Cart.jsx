import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './Cart.css'
import CartItem from '../CartItem';
const Cart = () => {
  const {cart} = useCartContext();
  // console.log(cart);
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
          cart.map((curElem)=>{
            return <CartItem key={curElem.id} {...curElem} />
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Cart