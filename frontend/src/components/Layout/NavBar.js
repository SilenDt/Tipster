import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn }) => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-white text-xl font-bold">App Name</span>
        </div>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex items-center">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-white px-4 py-2 hover:bg-blue-500 rounded-md">
                Profile
              </Link>
              <Link to="/logout" className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-md ml-2">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white px-4 py-2 hover:bg-blue-500 rounded-md">
                Login
              </Link>
              <Link to="/signup" className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md ml-2">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
