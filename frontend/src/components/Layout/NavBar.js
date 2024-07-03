import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/image.png'

const NavBar = ({ isLoggedIn }) => {
  return (

    
    <nav className="bg-green-300 p-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* Left section */}
    <div className="flex items-center space-x-4">
      <Link to="/" className="flex items-center text-white text-lg font-semibold">
        <img src={image} alt="App Logo" className="w-8 h-8 mr-2" />
      </Link>
      
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-2 rounded-md text-black"
      />
    </div>

    {/* Middle section */}
    <div className="flex items-center space-x-4">
      <Link to="/" className="text-white">Home</Link>
      <Link to="/profile" className="text-white">Profile</Link>
    </div>

    {/* Right section */}
    <div className="flex items-center space-x-4">
      {isLoggedIn ? (
        <Link to="/logout" className="text-white">Logout</Link>
      ) : (
        <>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
        </>
      )}
    </div>
  </div>

  
</nav>
)}

export default NavBar;