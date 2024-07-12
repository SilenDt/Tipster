import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import HomePage from '../../pages/HomePage';
import ProfilePage from '../../pages/ProfilePage';
import PracticePage from '../../pages/PracticePage';
import ErrorPage from '../../pages/ErrorPage';

const LayoutTemplate = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <div className="flex flex-1">
          <NavBar />
          <main className="flex-1 bg-gray-100 p-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default LayoutTemplate;
