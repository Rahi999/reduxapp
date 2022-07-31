import React from 'react'
import { useSelector } from 'react-redux';
import {Routes,Route,Link} from "react-router-dom";
import { loadData } from '../utils/LocalStorage';
import About from './About';
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import Products from './Products';
import ProductsDetails from './ProductsDetails';

const AllRoutes = () => {
    const auth = useSelector((state)=> state.AuthReducer.isAuth)
    let isAuth = loadData("isAuth") || auth
   
  return (
    <div>
        
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={isAuth ? <Cart /> : <Login />} />
            <Route path='/products' element={isAuth ? <Products /> : <Login />} />
            <Route path='/products/:id' element={<ProductsDetails />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default AllRoutes