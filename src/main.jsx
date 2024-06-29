import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppPorvider } from './Context/ProductContext.jsx'
import { FilterContextProvider } from './Context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppPorvider>
    <FilterContextProvider>
    <App />
    </FilterContextProvider>
    </AppPorvider>
  </React.StrictMode>,
)
