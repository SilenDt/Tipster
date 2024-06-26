import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
import Routes from './routes';  // Import the Routes component
import './styles/main.css';  // Import your main CSS file for global styles

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;

