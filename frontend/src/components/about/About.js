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
            <p>For experience within the space, I first started with learning a laravel framework stack within my first internship. This stack included php, html, css and js to create a mondernized framework that most website application were not apart of at the time. This served as a valuble lesson to understand the coding environment and the importance of dockerized container images. My next workplace took me under the AWS framework, where we were building new products to streamline some of the processes for users.</p>
            <p>This included created creating a new engine that connected the old work into new AI that would be able to do the work that was done manually, autonomosly (using dataflow mapping). Now, most projects and tech stacks are working within a flaks and reactjs framework in order to keep up with modern standards for design, and implementations of new technologies.</p>
          </div>
          <img src="/images/capstone.jpg" alt="Experience" className="section-photo right" />
        </section>
        <section className="about-section">
          <img src="/images/code.png" alt="Skills" className="section-photo left" />
          <div className="section-text">
            <h3>Skills</h3>
            <ul>
              <li>Programming Languages: C++ ∘ Python ∘ SQL ∘ Javascript ∘ PHP ∘ CSS ∘ HTML</li>
              <li>Frameworks: Laravel ∘ Bootstrap ∘ Netbeans ∘ AWS ∘ React ∘ Flask</li>
              <li>Tools and Technologies: Git & Github ∘ Docker ∘ Bitbucket ∘ Navicat ∘ Ubuntu ∘ MySQL ∘ Jira ∘ Pandas</li>
            </ul>
          </div>
        </section>
        <section className="about-section personal-interests">
          <div className="section-text">
            <h3>Personal Interests</h3>
            <p>During my freetime, I enjoy exploring the outdoors and trying out new sports/activites. Bouldering has been a new hobby that has been integral in my health and enjoyment. Model building has always been something that I've done with conjunction to reading, as both activies allow me to enjoy more relaxed and peaceful activites.</p>
            <p>With my peers, I've enjoyed playing TCG (Trading Card Games), like Pokemon, and even board games with others. In the "To the Top" section, there is a documented journey of my experience learning the new tcg.</p>
          </div>
          <div className="photo-grid">
            <img src="/images/mountains.jpg" alt="Personal Interests 1" className="section-photo" />
            <img src="/images/gundam.jpg" alt="Personal Interests 2" className="section-photo" />
            <img src="/images/climb.png" alt="Personal Interests 3" className="section-photo" />
            <img src="/images/study.jpg" alt="Personal Interests 4" className="section-photo" />
          </div>
        </section>
      </div>
    
    
    </div>
  );
}

export default About;
