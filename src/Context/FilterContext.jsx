import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './ProductContext';
const FilterContext = createContext();
import reducer from '../Reducer/FilterReducer';
const initialstate = {
  filter_products:[],
  all_products:[],
}


export const FilterContextProvider = ({children})=>{
  const {products} = useProductContext()
  const [state,dispatch] = useReducer(reducer,initialstate)
  useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
  },[products])
  return (
    <FilterContext.Provider value={{...state}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = ()=>{
  return useContext(FilterContext)
}