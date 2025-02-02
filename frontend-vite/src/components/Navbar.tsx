import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-indigo-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">Redemption Package</Link>
      <div className="space-x-4">
        <Link to="/word" className="text-white hover:text-gray-200">Word</Link>
        <Link to="/books" className="text-white hover:text-gray-200">Books</Link>
        <Link to="/worship" className="text-white hover:text-gray-200">Worship</Link>
        <Link to="/movies" className="text-white hover:text-gray-200">Movies</Link>
        <Link to="/others" className="text-white hover:text-gray-200">Others</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;