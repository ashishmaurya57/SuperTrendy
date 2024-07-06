// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import ItemDetails from './pages/itemDetails/ItemDetails'; // Import the new ItemDetails component

const App = () => {
  return (
    <div className='app'>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeorder />} />
        <Route path='/:itemName' element={<ItemDetails />} /> {/* Add dynamic route */}
      </Routes>
      
    </div>
  );
}

export default App;
