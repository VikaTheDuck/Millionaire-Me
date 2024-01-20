// Button.js
import React from 'react';
import './button.css';

function CustomButton({ onClick, children }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;