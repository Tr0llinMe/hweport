import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import projectInfo from './projectInfo'
import "./Projects.css"

function Projects() {
  const { projectId } = useParams()
  const project = projectInfo[projectId]
  const [selectedImage, setSelectedImage] = useState(null)

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/" className="back-link">
            <span className="icon">←</span>
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="project-detail">
      <header className="project-header">
        <div className="container">
          <Link to="/" className="back-link">
            <span className="icon">←</span>
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="project-main">
        <div className="container">
          <div className="project-hero">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Client</span>
                <span className="meta-value">{project.client}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Year</span>
                <span className="meta-value">{project.year}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
            </div>
          </div>

          <div className="project-content">
            <section className="project-section">
              <h2 className="section-title">Project Overview</h2>
              <p className="section-text">{project.overview}</p>
            </section>

            <section className="project-section">
              <h2 className="section-title">Challenge</h2>
              <p className="section-text">{project.challenge}</p>
              <ul className="project-list">
                {project.challengePoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            <section className="project-section">
              <h2 className="section-title">Solution</h2>
              <div className="solution-grid">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="solution-card">
                    <h3 className="solution-title">{solution.title}</h3>
                    <p className="solution-text">{solution.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="project-section">
              <h2 className="section-title">Results</h2>
              <div className="results-grid">
                {project.results.map((result, index) => (
                  <div key={index} className="result-card">
                    <h3 className="result-value">{result.value}</h3>
                    <p className="result-label">{result.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {project.images && project.images.length > 0 && (
              <section className="project-section">
                <h2 className="section-title">Project Gallery</h2>
                <div className="gallery-grid">
                  {project.images.map((image, index) => (
                    <div key={index} className="gallery-item" onClick={() => handleImageClick(image)}>
                      <img 
                        src={image.src} 
                        alt={image.caption} 
                        className="gallery-image"
                      />
                      <div className="gallery-caption">
                        {image.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      {selectedImage && (
        <div className="image-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.caption} className="modal-image" />
            <div className="modal-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}

      <footer className="project-footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">Interested in working together?</p>
            <a href="mailto:phamhwe@gmail.com" className="contact-button">
              Get in Touch
              <span className="icon">→</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Projects 