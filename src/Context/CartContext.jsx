import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
const CartContext = createContext();
const initialstate = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 50000
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate)
    const addtoCart = (id, Color, Product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, Color, Product } })
    }
    return <CartContext.Provider value={{ ...state, addtoCart }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}
export { CartProvider, useCartContext }