import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import SingleProduct from "./components/single-product/SingleProduct";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Error from './components/errorpage/Error';
import { useAuth0 } from '@auth0/auth0-react';
import Alert from './components/alert/Alert';




function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path="/products" element={<Products/>} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to='/alert-login'></Navigate>} />
        <Route path='*' element={<Error />} />
        <Route path='/alert-login' element={isAuthenticated ? <Navigate to='/' ></Navigate>:<Alert />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
