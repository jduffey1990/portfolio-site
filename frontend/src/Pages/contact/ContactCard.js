import React from 'react';

function ContactCard({ title, image, onClick }) {
    return (
        <div className="projects-card">
            <div className="card-header">
                <h2>{title}</h2>
                <img className="projects-card-image" src={image} alt={title} />
            </div>
            <div className="card-footer">
                <button className="btn-form" onClick={onClick}>
                    Visit
                </button>
            </div>
        </div>
    );
}

export default ContactCard;