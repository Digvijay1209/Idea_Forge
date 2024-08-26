import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Advice from './Advice.jsx';
import Jokes from './Jokes.jsx';
import Navbar from './Navbar.jsx';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/advice" element={<Advice />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/" element={<Advice />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
