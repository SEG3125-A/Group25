// App.js
import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Ratings from './components/Ratings';
import Logo from './components/Logo'; // Import the Logo component

function App() {
  return (
    <div className="container">
      <div className="main-content">
        {/* Move Ratings, ProductList, and Cart to the bottom left */}
        <div className="top-middle-content">
          <Logo /> {/* Use the Logo component */}
          <h1 className="title">uoBooks</h1>
        </div>
        <div className="bottom-left-content">
          <Ratings />
          <ProductList />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
