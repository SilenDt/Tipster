import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="bg-gray-800 text-white flex justify-end items-center p-4">
       <h1 className='flex-grow'>TIPSTER</h1>
      <div>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
     
    </header>
  );
};

export default Header;