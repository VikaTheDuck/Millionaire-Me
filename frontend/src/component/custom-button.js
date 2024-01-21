// Button.js
import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

function CustomButton({ to, children }) {
  return (
    <Link to={to} className="custom-button">
      {children}
    </Link>
  );
}

export default CustomButton;
