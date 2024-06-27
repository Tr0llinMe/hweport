import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import TestPage from './components/test/Testpage';
import './App.css';

function AppRouter() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; 2024 David Pham</p>
        </footer>
      </div>
    </Router>
  );
}

export default AppRouter;
