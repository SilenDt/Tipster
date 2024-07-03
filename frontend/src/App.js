import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes'; 
import './index.css';

const App = () => {

  return (
    <Router>
      <div className="app">
        <RoutesComponent />
      </div>

    </Router>
  );
};

export default App;


