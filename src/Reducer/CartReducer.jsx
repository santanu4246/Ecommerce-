import React from 'react'

const CartReducer = (state,action) => {
 if(action.type === "ADD_TO_CART"){
    let {id,Color,Product} = action.payload;

    let cartProduct;

    cartProduct  = {
        id : id + Color,
        name : Product.name,
        Color,
        image:Product.image[0].url,
        price : Product.price,
        max: Product.stock

    }
    return {
        ...state,
        cart:[...state.cart,cartProduct]
    }
 }
 return state;
}

export default CartReducer