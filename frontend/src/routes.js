import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LogOutPage from './pages/LogOutPage';
import ErrorPage from './pages/ErrorPage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/logout" element={<LogOutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesComponent;

