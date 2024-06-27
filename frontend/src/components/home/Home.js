import React from 'react';
import ProjectCard from '../home/ProjectCard';
import './home.css';
function Home() {
  return (
    <div className="Testpage">
      <div className="container">
        <section id="about" className="section">
          <h2>About Me</h2>
          <div className= "about-content">
            <img src= "/images/homepic.jpg" alt="Huy (David)" className= "about-image" />
            <p>
              Hi there! I'm Huy (also known as David) and welcome to my website. I am a recent software engineering graduate that is trying to showcase my abilities and
              display my personal hobbies/passions in my spare time. Hope we can be in touch soon.
            </p>
          </div>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <ProjectCard 
            title="Anomaly Road Detection" 
            description="Created a training model for roads." 
            details="Main developer of a test training model. Was later referenced for a larger project" 
            repoLink="https://github.com/Tr0llinMe/Anomaly-Road-Detection" 
          />
          <ProjectCard 
            title="Filler for Capstone" 
            description="Short description." 
            details="Filler for Capstone" 
            repoLink="https://github.com/yourusername/project2" 
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
    </div>
  );
}
export default Home;
