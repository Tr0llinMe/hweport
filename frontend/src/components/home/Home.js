import React from 'react';
import ProjectCard from '../home/ProjectCard';
import './home.css';
function Home() {
  return (
    <div className="Testpage">
      <div className="container">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>Brief introduction about yourself, your education, and your career goals.</p>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <ProjectCard 
            title="Project Title 1" 
            description="Short description." 
            details="Detailed project description, technologies used, and your role." 
            repoLink="https://github.com/yourusername/project1" 
          />
          <ProjectCard 
            title="Project Title 2" 
            description="Short description." 
            details="Detailed project description, technologies used, and your role." 
            repoLink="https://github.com/yourusername/project2" 
          />
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Reach out to me at <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        </section>
      </div>
      <footer>
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
}
export default Home;
