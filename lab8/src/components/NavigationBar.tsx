import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      <span> {'>'} </span>
      <Link to="/product-list">Product List</Link>
    </div>
  );
}

export default NavigationBar;
