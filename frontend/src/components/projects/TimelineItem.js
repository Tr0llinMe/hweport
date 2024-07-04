import React, { useState } from 'react';
import './TimelineItem.css';

function TimelineItem({title, description, details, imgSRC, repoLink, date}) {
    
    //Using this to expand the timeline product
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    return(
        <div className ={`timeline-item ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
            <div className = "timeline-item-content">
                <span className = "tag" style={{ background: '#f39c12' }}>
                    {date}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                {isExpanded && (
                    <div className = "expanded-content">
                        <p>{details}</p>
                        <a href={repoLink} target ="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                        <div className = "timeline-item-media">
                            <img src = {imgSRC} alt={`${title} screenshot`} />
                        </div>
                    </div>
                )}
                <span className="circle" />
            </div>
        </div>
    );
}

export default TimelineItem;