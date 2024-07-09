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
            title="Capstone: Notify Me App" 
            description="Navigation Application for Students Commuting." 
            details="The purpose is to allow university students a streamlined medium that allows them to see traffic, best time to leave, and many other data points when commuting to school, or anywhere they want to go." 
            repoLink="https://github.com/Tr0llinMe/Navigation-TMU" 
          />
          <ProjectCard 
            title="Personal Website: hwe" 
            description="Website made to showcase and share my passions." 
            details="Created a website to showcase my skills and abilities in the workfield. Also to share my passions and ambissions in the foreseeable future." 
            repoLink="https://github.com/Tr0llinMe/hweport" 
          />
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Reach out to me at <a href="huydavidpham@hotmail.com">huydavidpham@hotmail.com</a></p>
        </section>
      </div>
    </div>
  );
}
export default Home;
