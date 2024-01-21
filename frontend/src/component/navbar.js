// Navbar.js
import React from 'react';
import CustomButton from './button'; // Ensure the correct import path for the Button component

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <p className="text-xl font-semibold">Millionaire Me</p>
        <div className="flex items-center space-x-4">
          <CustomButton onClick={() => console.log('Info Clicked')}>Info</CustomButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



