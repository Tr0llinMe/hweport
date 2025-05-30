import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import './App.css';

// Dont need about so far.
function AppRouter() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
