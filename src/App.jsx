import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ListingsProvider } from './context/ListingsContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Sell from './pages/Sell';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeProvider>
      <ListingsProvider>
        <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop searchQuery={searchQuery} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </Layout>
      </ListingsProvider>
    </ThemeProvider>
  );
}

export default App;
