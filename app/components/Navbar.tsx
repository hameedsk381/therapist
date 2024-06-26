// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <a href="#" className="flex items-center py-4 px-2">
             
              <span className="font-semibold text-gray-500 text-lg">TheraFree</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#about" className="py-4 px-2 text-gray-500 hover:text-green-500">About</a>
            <a href="#services" className="py-4 px-2 text-gray-500 hover:text-green-500">Services</a>
            <a href="#testimonials" className="py-4 px-2 text-gray-500 hover:text-green-500">Testimonials</a>
            <a href="#contact" className="py-4 px-2 text-gray-500 hover:text-green-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
