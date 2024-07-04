import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="home-icon">
        <Link to="/"><FaHome /></Link>
      </div>
      <div className="title">
        <h1>Huy (David) Pham</h1>
        <h2>Software Engineering Graduate</h2>
      </div>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/test">TestPage</Link>
      </nav>
    </header>
  );
}

export default Navbar;
