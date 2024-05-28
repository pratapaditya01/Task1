// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Form  from './components/Form';
import RequestMoreDetails from './components/RequestMoreDetails'
const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/form' element={<Form />} />
        <Route path='/RequestMoreDetails' element={<RequestMoreDetails />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
