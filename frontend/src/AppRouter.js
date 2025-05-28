import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Tothetop from './components/tothetop/Tothetop';
import './App.css';

function AppRouter() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tothetop" element={<Tothetop />} />
            <Route path="/projects/:projectId" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
