import React from 'react';
import { FaHome } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="home-icon">
        <a href="#home"><FaHome /></a>
      </div>
      <div className="title">
        <h1>Your Name</h1>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
