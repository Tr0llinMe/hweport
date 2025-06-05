import "./home.css"
import projectInfo from '../projects/projectInfo'
import { useState } from 'react'

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="portfolio">
      <header className="header">
        <div className="container header-container">
          <a href="/" className="logo">
            Huy (David) Pham
          </a>
          <nav className={`nav ${isMobileMenuOpen ? 'show' : ''}`}>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#career" className="nav-link">
              Career
            </a>
            <a href="#why-me" className="nav-link">
              Why Me
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <a href="mailto:phamhwe@gmail.com" className="email-button">
            <span className="icon">✉️</span>
            Email Me
          </a>
          <button className="menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span className="icon">☰</span>
          </button>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Hello, I'm Huy Pham!</h1>
                <p className="hero-subtitle">
                Curious, driven developer focused on building real-world solutions and always learning.
                </p>
              </div>
              <div className="hero-buttons">
                <a href="mailto:paul@example.com" className="primary-button">
                  <span className="icon">✉️</span>
                  Email Me
                </a>
                <a href="#portfolio" className="secondary-button">
                  View My Work
                  <span className="icon">→</span>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/aboutme.jpg" alt="David Pham" className="profile-image" />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Latest Projects</h2>
              <p className="section-subtitle">
                A selection of my most recent design work across various platforms and industries.
              </p>
            </div>
            <div className="portfolio-grid">
              {Object.values(projectInfo).map((project) => (
                <div key={project.id} className="portfolio-card">
                  <img 
                    src={project.thumbnail || "/placeholder.svg"} 
                    alt={project.title} 
                    className="portfolio-image" 
                  />
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.subtitle}</p>
                    <a href={`/projects/${project.id}`} className="portfolio-link">
                      View Project
                      <span className="icon">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container about-container">
            <div className="about-image">
              <img src="/images/study.jpg" alt="David Pham Working" className="about-img" />
            </div>
            <div className="about-content">
              <h2 className="about-title">About Me</h2>
              <p className="about-text">
              I'm a software developer who loves working across the stack and turning messy problems into clean, 
              useful tools. I've built everything from web apps and mobile features to data dashboards and 
              machine learning pipelines — using tools like React, Flask, Python, MongoDB, and AWS. 
              Whether I'm working on backend logic or designing something users can interact with, I'm all about 
              learning fast, building better, and making things that actually help people.
              </p>
              <p className="about-text">
                In terms of my free time, I've competed in collegiate level esports for 4 years, competing in the game "League of Legends". 
                I'm a huge fan of bouldering, reading, curating music, playing the Pokemon TCG, and overall connecting with people from various backgrounds. 
                I'm constantly trying to learn new things and experiences, in order to then build something that could help the
                people sharing my same interests/hobbies.
              </p>
              <div className="stats-grid">
                {[
                  { label: "Projects Delivered End-to-End", value: "6+" },
                  { label: "Industry Domains Worked In", value: "3" },
                  { label: "ML/Data Pipelines Built", value: "2" },
                  { label: "Hours in Dev & Data Projects", value: "1000+" },
                ].map((stat, index) => (
                  <div key={index} className="stat-card">
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section id="career" className="career-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Career Journey</h2>
              <p className="section-subtitle">My professional path from 1st Year Student to Software Developer.</p>
            </div>
            <div className="timeline">
              {[
                {
                  year: "March 2019 - May 2021",
                  title: "Business Analyst at Crystal Reports Solutions Inc",
                  description:
                    "Worked as a BI Analyst for public sector clients, building reports and streamlining data workflows using Power BI, Crystal Reports, and SQL Server..",
                },
                {
                  year: "May 2021 - August 2021",
                  title: "Junior Software Developer at Intiveo",
                  description:
                    "Worked within the healthcare industry, building a web application for clients to help them manage their patient data, schedule appointments, and overall improve the healthcare experience.",
                },
                {
                  year: "June 2021 - May 2022",
                  title: "Software Developer at Accountabl",
                  description:
                    "Worked in a startup environment, building an app that allowed users to match with similar users based on their fitness goals, in order to gamify their fitness journey.",
                },
                {
                  year: "August 2022 - August 2023",
                  title: "Data Scientiest at Genellipse",
                  description:
                    "Worked within the life insurance industry, building a product that incoporated ML models to predict the likelihood of a claim. During the time, this was a first of its kind, and I was apart of the dataflow mapping process, working on the product team.",
                },
              ].map((item, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                  <div className="timeline-content">
                    <time className="timeline-year">{item.year}</time>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Me Section */}
        <section id="why-me" className="why-me-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Work With Me</h2>
              <p className="section-subtitle">Reasons why I believe I would be a great fit for your team.</p>
            </div>
            <div className="principles-grid">
              {[
                {
                  title: "Built to Learn, Growing to Better Myself",
                  description:
                    "From refactoring legacy systems to deploying full-stack apps, I focus on building things that work, scale, and solve real problems.",
                },
                {
                  title: "Learn Fast, Adapt Fast",
                  description:
                    "I'm comfortable stepping into unfamiliar tools or domains — whether it's OCR, ML workflows, or new frameworks — and figuring things out quickly.",
                },
                {
                  title: "Build with Purpose",
                  description:
                    "I aim to build tools that are thoughtful, practical, and genuinely improve the experience for the people who use them.",
                },
              ].map((pillar, index) => (
                <div key={index} className="principle-card">
                  <h3 className="principle-title">{pillar.title}</h3>
                  <p className="principle-description">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Common questions about my motivations and goals.</p>
            </div>
            <div className="faq-container">
              {[
                {
                  question: "Why do you want to work in this industry?",
                  answer:
                    "From a young age, I've been surrounded by many people who were apart of the tech industry, and I've always been fascinated by the process of using technology to build real-world solutions. This has always been a passion of mine, and I'm always looking to learn more about the industry.",
                },
                {
                  question: "What's a recent challenge that you solved and you're proud of?",
                  answer:
                    "For my recent project of Statmon, I knew this was a product that I wanted to create to help the TCG community, but it was difficult to understand where to start, and what my user needs were. I was able to outsource and reach out to some of the top players in the world, and have them express, reflect, and let me know what they would want in the product. I personally feel having a customer feedback loop helps the end product drastically, as now for this case I was able to build somethign they would want.",
                },
                {
                  question: "How do you apporach learning new tools or technologies?",
                  answer:
                    "I've found that the best way to learn new tools or technologies is to just jump in and start building with them. I've found that this is the best way to understand the tool, and how to use it to its fullest extent. Generally, not only do I read documentation to understand the use case of the tool, but I also look into real life applications of the tool being in use, in order to understand the best use cases of the tool.",
                },
                {
                  question: "What kind of projects do you like to work on?",
                  answer:
                    "From the projects that I've enjoyed the most, I noticed that many of these projects are the ones that have use cases that are able to help people in their daily lives. I've found that this is the most rewarding way to work, as I'm able to use my skills to help others, and in turn grow as a person.",
                },
                {
                  question: "What makes you different from your other peers?",
                  answer:
                    "Through my own experience, I've found that I'm able to pick up new tools and technologies quickly, and I'm always looking to learn more about the industry. I competed at a high collegiate level in esports, which allows me to make precise decision making, and adapt to the needs of a fast pace environment. I've found that this is a great asset to have, as it allows me to be flexible in my work, and always be looking for new ways to improve my skills.",
                },
              ].map((faq, index) => (
                <details key={index} className="faq-item">
                  <summary className="faq-question">{faq.question}</summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container contact-container">
            <div className="contact-content">
              <h2 className="contact-title">Let's Work Together</h2>
              <p className="contact-text">
                I'm currently available for new projects, collaborations, and career opportunities that could help me grow my passion in this industry. 
                Let's connect and see how we can create and grow together.
              </p>
              <div className="contact-buttons">
                <a href="mailto:paul@example.com" className="primary-button">
                  <span className="icon">✉️</span>
                  Send an Email
                </a>
                <a href="https://www.linkedin.com/in/huydpham/" className="connect-button">
                  <span className="icon">📅</span>
                  Let's Connect
                </a>
              </div>
            </div>
            <div className="contact-image">
              <img src="/images/graduation.jpg" alt="Paul Smith" className="contact-img" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <p className="copyright">© {new Date().getFullYear()} Huy Pham. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/huydpham/" className="social-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Tr0llinMe" className="social-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
