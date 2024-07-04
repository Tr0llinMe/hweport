import React from 'react';
import './about.css';

function About() {
  return (
    <div className="am-container">
      <section id="aboutme" className="section">
        <h1>About Me</h1>
        <p>This is the about page.</p>
        <img src= "/images/aboutme.jpg" alt="About Me Huy" className= "aboutme-image" />
      </section>
    </div>
  );
}

export default About;
