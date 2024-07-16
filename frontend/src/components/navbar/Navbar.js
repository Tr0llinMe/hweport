import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInstagram, FaLinkedin } from 'react-icons/fa';
import SpotifyPlaylist from './SpotifyPlaylist';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container-fluid container-custom">
        <div className="icon-group">
          <Link to="/" className="icon"><FaHome /></Link>
          <a href="https://www.instagram.com/hwe.huy/" target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/huydpham/" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin /></a>
        </div>
        <div className="title">
          <h1>Huy (David) Pham</h1>
          <h2>Software Engineering Graduate</h2>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>          
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/tothetop" className="nav-link">To the Top!</Link>
            </li>
          </ul>
        </div>
        <div className={`spotify-playlist-wrapper ${isOpen ? 'open' : ''}`}>
          <SpotifyPlaylist />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
