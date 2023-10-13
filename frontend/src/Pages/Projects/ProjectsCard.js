import React, { useState } from 'react';

function projectsCard({ title, image, shortDescription, expandedContent, onClick  }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="projects-card">
            <div className="card-header">
                <h2>{title}</h2>
                <img className="projects-card-image" src={image} alt={title} />
            </div>
            <div className="card-content">
                <p>{shortDescription}</p>
            </div>
            <div className="card-footer">
            <button className="btn-form" onClick={onClick}>
                View More
            </button>
            </div>
            
        </div>
    );
}

export default projectsCard;
