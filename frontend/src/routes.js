import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import PracticePage from './pages/PracticePage';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/Layout/NavBar';

const RoutesComponent = () => {

  const { isAuthenticated } = useAuth0();

  return (
  <div>
    <NavBar isLoggedIn={isAuthenticated} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </div>
  );
};

export default RoutesComponent;

