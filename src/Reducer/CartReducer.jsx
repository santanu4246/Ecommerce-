import React from 'react'

const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, Color, Product } = action.payload;

        let cartProduct;

        cartProduct = {
            id: id + Color,
            name: Product.name,
            Color,
            image: Product.image[0].url,
            price: Product.price,
            max: Product.stock
        }
        return {
            ...state,
            cart: [...state.cart, cartProduct]
        }
    }

    if (action.type === "REMOVE_ITEM") {
        console.log("Remove item");
        let updatedCart = state.cart.filter(
            (curElem) => curElem.id != action.payload
        );
        return {
            ...state,
            cart: updatedCart
        }
    }
    return state;
}

export default CartReducer