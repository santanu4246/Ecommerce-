import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
const CartContext = createContext();

function getLocalCartData (){
    let LocalData = localStorage.getItem("santanuCart");
    if(LocalData == []){
        return []
    }
    else{
        return JSON.parse(LocalData)
    }
}
function getLocalCartAmount() {
    const storedAmount = localStorage.getItem('cartAmount');
    return storedAmount ? Number(storedAmount) : 0;
}
const initialstate = {
    // cart: [],
    cart : getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
    amount:getLocalCartAmount()
}



const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate)

    useEffect(() => {
        localStorage.setItem("santanuCart", JSON.stringify(state.cart))

    }, [state.cart])
    
    useEffect(() => {
        localStorage.setItem('cartAmount', state.amount);
    }, [state.amount]);
    const addtoCart = (id, Color, Product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, Color, Product } })
    }

    const removeitem = (id) => {
        console.log("removeFunction");
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }

    const ClearCart = ()=>{
 
        dispatch({type:"CLEAR_CART"})
    }

    const addtocart = () => {
       
        dispatch({ type: 'ADD_TO_CART_INCREMENT' });
    };
   
  const updateItemQuantity = (id, amount) => {
    dispatch({ type: "UPDATE_ITEM_QUANTITY", payload: { id, amount } });
  };

    return <CartContext.Provider value={{ ...state, addtoCart, removeitem ,ClearCart,updateItemQuantity,addtocart}}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}
export { CartProvider, useCartContext }