import React, { useState, useEffect } from "react";
import "./CartItem.css";
import FormatPrice from "./Helper/FormatPrice";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";

const CartItem = ({ id, name, image, Color, price, max }) => {
  const [amount, setAmount] = useState(() => {
    const storedAmount = localStorage.getItem(`cartItem_${id}_amount`);
    return storedAmount ? parseInt(storedAmount) : 1;
  });



  const { removeitem,updateItemQuantity } = useCartContext();
const increaseAmount = () => {
  setAmount((prevAmount) => {
    const newAmount = prevAmount + 1 ;
    updateItemQuantity(id, newAmount);
    return newAmount;
  });
};

const decreaseAmount = () => {
  setAmount((prevAmount) => {
    const newAmount = prevAmount - 1 ;
    updateItemQuantity(id, newAmount);
    return newAmount;
  });
};



  // Store amount in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`cartItem_${id}_amount`, amount.toString());
  }, [amount, id]);

  return (
    <div className="CartItemContainer">
      <div className="img-name-color cardItemInnerX">
        <div className="cart-image">
          <img src={image} alt={id} />
        </div>
        <div className="name-color">
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: Color, color: Color }}
            ></div>
          </div>
        </div>
      </div>

      <div className="Cart-item-price cardItemInnerX">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <div className="Cart-item-quantity cardItemInnerX">
        <button onClick={decreaseAmount} style={{pointerEvents: amount <= 1 ? 'none' : 'auto' }}>
          <FaMinus />
        </button>
        <p>{amount}</p>
        <button onClick={increaseAmount} style={{pointerEvents: amount >= max ? 'none' : 'auto' }}>
          <FaPlus />
        </button>
      </div>

      <div className="Cart-item-subtotal cardItemInnerX">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div className="Cart-item-remove cardItemInnerX">
        <FaTrash
          style={{ color: "red"}}
          onClick={() => {
            removeitem(id);
          }}
          
        />
      </div>
    </div>
  );
};

export default CartItem;
