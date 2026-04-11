function ProjectsCard({ title, tags = [], description, onClick }) {
  return (
    <div className="fd-project-card" onClick={onClick}>
      <div className="fd-project-card__body">
        <h3 className="fd-project-card__title">{title}</h3>
        <p className="fd-project-card__desc">{description}</p>
      </div>
      {tags.length > 0 && (
        <div className="fd-tags fd-project-card__tags">
          {tags.map(tag => (
            <span key={tag} className="fd-tag">{tag}</span>
          ))}
        </div>
      )}
      <div className="fd-project-card__footer">
        <span className="fd-project-card__cta">View →</span>
      </div>
    </div>
  );
}

export default ProjectsCard;
