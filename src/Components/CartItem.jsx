import React from 'react'
import './CartItem.css'
import FormatPrice from './Helper/FormatPrice';
const CartItem = ({ id, name, image, Color, price }) => {
    console.log(Color);

    return (
        <div className='CartItemContainer'>

            <div className="img-name-color">
                <div className="cart-image">
                    <img src={image} alt="" />
                </div>

                <div className="name-color">
                    <p>{name}</p>
                    <div className="color-div">
                        <p>Color:</p>
                        <div className="color-style" style={{ backgroundColor: Color, color: Color }}></div>
                    </div>
                </div>
            </div>

            <div className='Cart-item-price'>
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            <div className="Cart-item-quantity">
                <p>1</p>
            </div>

            <div className="Cart-item-subtotal">
                <p>0</p>
            </div>

            <div className="Cart-item-remove">
                <p>0</p>
            </div>
        </div>
    )
}

export default CartItem