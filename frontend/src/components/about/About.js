import React from 'react';
import './about.css';

function About() {
  return (
    <div className="am-container">
      <div className="about-intro">
        <div className="about-summary">
          <h1>About Me</h1>
          <p>
            Hi there.My name is Huy Pham, a passionate recent graduate at the Toronto Metropolitan University studying software engineering. I am driven by my motivation to learn new things everyday, and have a desire to learn more about artificial intelligence and machien learning.
          </p>
        </div>
        <img src= "/images/aboutme.jpg" alt="About Me Huy" className= "about-photo" />
      </div>

      <div className= "about-details">
        <section className="about-section">
          <img src="/images/graduation.jpg" alt="Education" className="section-photo left" />
          <div className="section-text">
            <h3>Education</h3>
            <p>I attended TMU where I recieved my Bachelor's of Engineering: Computer Engineering - Software Engineering. From here, I also worked a 1-year coop under the FEAS program. I was able to learn about data structure, algorithms, coding frameworks, and many other topics under my studying term.</p>
            <p>For Extracurriculars, I was the president of the TMU Esports Club, and a collegiate player for the TMU Esports Team (League of Legends).</p>
          </div>
        </section>
        <section className="about-section">
          <div className="section-text">
            <h3>Experience</h3>
            <p>[Summary of Experience]</p>
          </div>
          <img src="https://via.placeholder.com/300x200" alt="Experience" className="section-photo right" />
        </section>
        <section className="about-section">
          <div className="section-text">
            <h3>Skills</h3>
            <ul>
              <li>Programming Languages: [Languages]</li>
              <li>Frameworks: [Frameworks]</li>
              <li>Tools and Technologies: [Tools]</li>
              <li>Soft Skills: [Skills]</li>
            </ul>
          </div>
        </section>
        <section className="about-section">
          <div className="section-text">
            <h3>Personal Interests</h3>
            <p>[hobbies and everything]</p>
          </div>
          <img src="https://via.placeholder.com/300x200" alt="Personal Interests" className="section-photo right" />
          <img src="https://via.placeholder.com/300x200" alt="Personal Interests" className="section-photo right" />
          <img src="https://via.placeholder.com/300x200" alt="Personal Interests" className="section-photo right" />
        </section>
      </div>
    
    
    </div>
  );
}

export default About;
