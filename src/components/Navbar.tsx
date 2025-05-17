
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-edu-primary text-white shadow-md">
      <div className="education-container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-bold">IT Career Module</Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-edu-secondary transition-colors">Home</Link>
            <Link to="/sessions" className="hover:text-edu-secondary transition-colors">Sessions</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
