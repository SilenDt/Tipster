import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Layout/NavBar';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import RoutesComponent from './routes'; 

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
      <NavBar isLoggedIn={isLoggedIn} />
        <Header />
        
        <RoutesComponent />
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;


