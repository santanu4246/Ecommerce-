import React, { useState } from 'react'
import './CartItem.css'
import FormatPrice from './Helper/FormatPrice';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../Context/CartContext';
const CartItem = ({ id, name, image, Color, price, stock }) => {
    const [amount, setAmount] = useState(1);

    const increaseAmount = () => {
        setAmount((prevAmount) => prevAmount + 1);
    }

    const decreaseAmount = () => {
        setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
    }
    const { removeitem } = useCartContext();
    return (
        <div className='CartItemContainer'>
            <div className="img-name-color cardItemInnerX">
                <div className="cart-image">
                    <img src={image} alt="id" />
                </div>
                <div className="name-color">
                    <p>{name}</p>
                    <div className="color-div">
                        <p>Color:</p>
                        <div className="color-style" style={{ backgroundColor: Color, color: Color }}></div>
                    </div>
                </div>
            </div>

            <div className='Cart-item-price cardItemInnerX'>
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            <div className="Cart-item-quantity cardItemInnerX">
                <button onClick={decreaseAmount}><FaMinus /></button>
                <p>{amount}</p>
                <button onClick={increaseAmount}><FaPlus /></button>
            </div>

            <div className="Cart-item-subtotal cardItemInnerX">
                <p><FormatPrice price={price * amount} /></p>
            </div>

            <div className="Cart-item-remove cardItemInnerX">
            <FaTrash style={{ color: "red" }} onClick={() => { removeitem(id); console.log("op"); }} />

            </div>
        </div>
    )
}

export default CartItem;
