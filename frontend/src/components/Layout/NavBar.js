import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/image.png'

const NavBar = ({ isLoggedIn }) => {
  return (

    <nav className="bg-green-300 w-64 min-h-full p-4">
      {/* Logo and Search */}
      <div className="flex flex-col items-start space-y-4">
        <Link to="/" className="flex items-center text-white text-lg font-semibold mb-4">
          <img src={image} alt="App Logo" className="w-8 h-8 mr-2 font-serif" />
          Tipster
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 rounded-md text-black w-full"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col space-y-4 mt-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/profile" className="text-white">Profile</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="/logout" className="text-white">Logout</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" className="text-white">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-white">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
)}

export default NavBar;