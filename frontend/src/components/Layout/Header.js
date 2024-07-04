import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-blue-300'>
      <header className="border-t-2 border-b-2 border-yellow-500">
        <nav className="py-4">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="text-gray-800 hover:text-blue-500">Home </Link></li>
            <li><Link to="/profile" className="text-gray-800 hover:text-blue-500">Profile</Link></li>
            <li><Link to="/logout" className="text-gray-800 hover:text-blue-500">Logout</Link></li>
            <li><Link to="/practice" className="text-gray-800 hover:text-blue-500">PracticePage</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
