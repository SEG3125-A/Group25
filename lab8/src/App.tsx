// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Help from './components/Help';
import Ratings from './components/Ratings';
import Logo from './components/Logo'; // Import the Logo component
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="main-content">
      <div className="top-middle-content">
        <Logo /> {/* Use the Logo component */}
        <h1 className="title">uoBooks</h1>
      </div>
      <div className="bottom-left-content">
        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/ratings">Ratings</Link></li>
            <li><Link to="/product-list">List of Products</Link></li>
            <li><Link to="/Help">Help</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
