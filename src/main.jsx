import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppPorvider } from './Context/ProductContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppPorvider>
    <App />
    </AppPorvider>
  </React.StrictMode>,
)
