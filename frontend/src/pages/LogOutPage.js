import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';

const LogoutPage = () => {
  const { setAuthState } = useContext(AuthContext);

  useEffect(() => {
    // Simulate a logout process
    setAuthState({ isAuthenticated: false, user: null });
  }, [setAuthState]);

  return <Redirect to="/" />;
};

export default LogoutPage;
