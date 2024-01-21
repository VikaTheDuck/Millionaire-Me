// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from './button'; // Ensure the correct import path for the Button component

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">
          🚀 Millionaire Me
        </Link>
        <div className="flex items-center space-x-4">
        <Link to="/info">Info</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



