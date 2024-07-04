import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './ProductContext';
const FilterContext = createContext();
import reducer from '../Reducer/FilterReducer';
const initialstate = {
  filter_products: [],
  all_products: [],
  sortingValue: "lowest",
  filters: {
    text: ""
  }
}


export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext()
  const [state, dispatch] = useReducer(reducer, initialstate)

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  }
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  }
useEffect(()=>{
  dispatch({type:"FILTERS_PRODUCTS"})
},[state.filters])
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products })
  }, [state.sortingValue])

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
  }, [products])

  return (
    <FilterContext.Provider value={{ ...state, sorting ,updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}