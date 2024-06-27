import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      // Perform logout logic, for example, clearing local storage
      setAuthState({ isAuthenticated: false, user: null });
      // Redirect to the home page after logout
      navigate('/');
    };

    logout();
  }, [setAuthState, navigate]);

  return null; 
};

export default LogoutPage;
