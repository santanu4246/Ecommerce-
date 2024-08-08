import React from 'react';

const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            let { id, Color, Product } = action.payload;

            let cartProduct = {
                id: id + Color,
                name: Product.name,
                Color,
                image: Product.image[0].url,
                price: Product.price,
                max: Product.stock,

            };

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            };
        }

        case "REMOVE_ITEM": {
            let updatedCart = state.cart.filter(
                (curElem) => curElem.id !== action.payload
            );
            return {
                ...state,
                cart: updatedCart,
                amount:0
            };
        }

        case "CLEAR_CART": {
            return {
                ...state,
                cart: [],
                amount:0,
            };
            
        }

        case "UPDATE_ITEM_QUANTITY": {
            const updatedCart = state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, amount: action.payload.amount }
                    : item
            );
            const totalItems = updatedCart.reduce(
                (total, item) => total + item.amount,
                0
            );
            return { ...state, amount:totalItems };
        }
        case 'ADD_TO_CART_INCREMENT':
            return {
                ...state,
                amount: state.amount + 1, // Increment the amount by 1
            };
        default:
            return state;
    }
}

export default CartReducer;
