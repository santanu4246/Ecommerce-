import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../Reducer/ProducerReducer'
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoding: false,
    singleProduct: {}
}
const AppPorvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    // Second api call for single product
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLEPAGE_LODING" });
        try {
            const res = await axios.get(url);
            const Product = await res.data;
            // console.log(singleProduct);
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: Product })
        } catch (error) {
            dispatch({ type: "SET_SINGLEPAGE_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])
    return <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
}

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppPorvider, AppContext, useProductContext }
