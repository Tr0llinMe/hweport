import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="icon-group">
          <Link to="/" className="icon"><FaHome /></Link>
          <a href="https://www.instagram.com/hwe.huy/" target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/huydpham/" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin /></a>
        </div>
        <div className="title">
          <h1>Huy (David) Pham</h1>
          <h2>Software Engineering Graduate</h2>
        </div>
        <nav className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/tothetop">To The Top!</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
