import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './pages/landing_page/home/HomePage';
import SignUp from './pages/landing_page/signup/SignUp';
import SupportPage from './pages/landing_page/supports/SupportPage';
import PricingPage from './pages/landing_page/pricing/PricingPage';
import ProductPage from './pages/landing_page/products/ProductPage';
import AboutPage from './pages/landing_page/about/AboutPage';
import Navbar from './pages/landing_page/Navbar';
import Footer from './pages/landing_page/Footer';
import NotFound from './pages/landing_page/Notfound';
import Login from './pages/landing_page/signup/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/support' element={<SupportPage/>}/>
  <Route path='/pricing' element={<PricingPage/>}/>
  <Route path='/product' element={<ProductPage/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='*' element={<NotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);

