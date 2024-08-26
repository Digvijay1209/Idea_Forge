import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/advice" className="nav-link">Advice</Link>
      <Link to="/jokes" className="nav-link">Jokes</Link>
    </nav>
  );
};

export default Navbar;
