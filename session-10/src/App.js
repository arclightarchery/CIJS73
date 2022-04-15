import './App.css';
import Auth from './Auth';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Products from './Products';
import ProductItem from './ProductItem';
import Invoices from './Invoices';
import Cart from './Cart';
import Profile from './Profile';
import About from './About';
import MyContext from './MyContext';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [stayLogin, setStayLogin] = useState(false);
  return (
    <MyContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin, stayLogin: stayLogin, setStayLogin: setStayLogin }}>
      <Routes>
        <Route path='/' element={<Auth />}>
          <Route path='/products' element={<Products />}>
            <Route path=':productID' element={<ProductItem />} />
          </Route>
          <Route path='/invoices' element={<Invoices />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<SignUpForm />} />
      </Routes>
      <Outlet />
    </MyContext.Provider>
  );
}

export default App;
