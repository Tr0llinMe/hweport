import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, details, repoLink }) {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`project-card ${flipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="card-inner">
        <div className="card-front">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-back">
          <p>{details}</p>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
