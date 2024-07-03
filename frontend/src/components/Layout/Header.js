import React from 'react';

const Header = () => {
  return (
    <div className='bg-blue-300'>
      <header className="border-t-2 border-b-2 border-yellow-500">
        {/* Header content goes here */}
        <nav className="py-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="/" className="text-gray-800 hover:text-blue-500">Home</a></li>
            <li><a href="/profile" className="text-gray-800 hover:text-blue-500">Profile</a></li>
            <li><a href="/logout" className="text-gray-800 hover:text-blue-500">Logout</a></li>
            <li><a href="/practice" className="text-gray-800 hover:text-blue-500">PracticePage</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
