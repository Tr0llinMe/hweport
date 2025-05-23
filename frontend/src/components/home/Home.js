import "./home.css"

function Home() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="container header-container">
          <a href="/" className="logo">
            Paul Smith
          </a>
          <nav className="nav">
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
          <a href="mailto:paul@example.com" className="email-button">
            <span className="icon">✉️</span>
            Email Me
          </a>
          <button className="menu-button">
            <span className="icon">▼</span>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Hello, I'm David Pham</h1>
                <p className="hero-subtitle">
                  Product Designer crafting clean, modern, and functional digital experiences
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
              <img src="/images/homepic.jpg" alt="David Pham" className="profile-image" />
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
              {[
                {
                  title: "Spotify Design System",
                  description: "A comprehensive design system for Spotify's internal tools",
                  image: "https://via.placeholder.com/600x400",
                },
                {
                  title: "Architectural Portfolio App",
                  description: "Mobile application for architects to showcase their work",
                  image: "https://via.placeholder.com/600x400",
                },
                {
                  title: "E-commerce Redesign",
                  description: "Complete UX/UI overhaul for a leading e-commerce platform",
                  image: "https://via.placeholder.com/600x400",
                },
                {
                  title: "Smart Home Dashboard",
                  description: "Intuitive interface for controlling smart home devices",
                  image: "https://via.placeholder.com/600x400",
                },
                {
                  title: "Travel Planning Platform",
                  description: "End-to-end travel planning experience with personalized recommendations",
                  image: "https://via.placeholder.com/600x400",
                },
                {
                  title: "Health & Wellness App",
                  description: "Mobile application focused on mental and physical wellbeing",
                  image: "https://via.placeholder.com/600x400",
                },
              ].map((project, index) => (
                <div key={index} className="portfolio-card">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="portfolio-image" />
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                    <a href="#" className="portfolio-link">
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
                My journey began in architecture, where I developed a strong foundation in spatial thinking and
                attention to detail. This background uniquely positions me to approach product design with both
                aesthetic sensibility and functional practicality.
              </p>
              <p className="about-text">
                After several years designing physical spaces, I transitioned to digital product design, bringing my
                architectural perspective to create intuitive, beautiful, and functional digital experiences.
              </p>
              <div className="stats-grid">
                {[
                  { label: "Years Experience", value: "8+" },
                  { label: "Clients", value: "50+" },
                  { label: "Projects Completed", value: "120+" },
                  { label: "Design Hours", value: "10,000+" },
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
              <p className="section-subtitle">My professional path from architecture to product design.</p>
            </div>
            <div className="timeline">
              {[
                {
                  year: "2016-2018",
                  title: "Freelance Architect",
                  description:
                    "Designed residential and small commercial spaces with a focus on sustainable materials and functional layouts.",
                },
                {
                  year: "2018-2022",
                  title: "Product Designer at Spotify",
                  description:
                    "Led design initiatives for internal tools and contributed to the consumer-facing mobile application. Developed and maintained the company's design system.",
                },
                {
                  year: "2022-Present",
                  title: "Freelance Product Designer",
                  description:
                    "Working with select clients across various industries to create meaningful digital experiences that solve real user problems.",
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
              <p className="section-subtitle">My approach to design is built on three core principles.</p>
            </div>
            <div className="principles-grid">
              {[
                {
                  title: "Efficient Workflow",
                  description:
                    "I've refined my process to deliver high-quality work within tight timelines. My architectural background taught me to manage complex projects efficiently.",
                },
                {
                  title: "Collaborative Process",
                  description:
                    "I believe the best designs emerge from close collaboration. I work with clients as partners, ensuring your vision and user needs remain central to the process.",
                },
                {
                  title: "Attention to Detail",
                  description:
                    "The difference between good and great design often lies in the details. I meticulously craft every element to create cohesive, polished experiences.",
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
              <p className="section-subtitle">Common questions about my design process and services.</p>
            </div>
            <div className="faq-container">
              {[
                {
                  question: "What is your design process?",
                  answer:
                    "My design process typically includes discovery (understanding the problem and users), ideation (exploring solutions), prototyping (creating interactive mockups), testing (validating with users), and implementation (working with developers to bring designs to life).",
                },
                {
                  question: "What design tools do you use?",
                  answer:
                    "I primarily work with Figma for UI design and prototyping, Miro for collaborative workshops, and various tools for user research and testing. I'm also comfortable with Adobe Creative Suite and Sketch.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on scope and complexity. A simple landing page might take 1-2 weeks, while a comprehensive application redesign could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "Do you work with development teams?",
                  answer:
                    "I believe in close collaboration with developers to ensure designs are implemented as intended. I can provide detailed specifications, assets, and support throughout the development process.",
                },
                {
                  question: "What types of projects do you take on?",
                  answer:
                    "I specialize in digital product design, including web applications, mobile apps, and design systems. I'm particularly interested in projects related to productivity, creativity, health, and sustainability.",
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
                I'm currently available for new projects and collaborations. Get in touch to discuss how we can create
                something amazing together.
              </p>
              <div className="contact-buttons">
                <a href="mailto:paul@example.com" className="primary-button">
                  <span className="icon">✉️</span>
                  Send an Email
                </a>
                <a href="#" className="secondary-button">
                  <span className="icon">📅</span>
                  Book a Call
                </a>
              </div>
            </div>
            <div className="contact-image">
              <img src="/images/mo.png" alt="Paul Smith" className="contact-img" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <p className="copyright">© {new Date().getFullYear()} Paul Smith. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              Dribbble
            </a>
            <a href="#" className="social-link">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
