// Logo.js
import React from 'react';
import logoImage from '../assets/download.png'; // Import your logo image

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="uoBooks Logo" className="logo" />
    </div>
  );
}

export default Logo;
