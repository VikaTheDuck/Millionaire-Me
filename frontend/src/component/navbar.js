// Navbar.js
import React from 'react';
import './navbar.css';
import CustomButton from './button';

function navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">Millionaire me</div>
      <div className="navbar-right">
        <span className="navbar-text">{/*No text here for now! */}</span>
        <CustomButton onClick={() => console.log('Info Clicked')}>Info</CustomButton>
      </div>
    </nav>
  );
}

export default navbar;



