import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Product from './Components/Products/Product';
import Contact from './Components/Contact/Contact';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Cart from './Components/Cart/Cart';
import Error from './Components/ErrorPage/Error';

import Header from './Components/Header/Header';
import Footer from './Components/Footer';
const App = () => {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/productdetils/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App