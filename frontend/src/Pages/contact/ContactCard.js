function ContactCard({ title, description, icon, onClick }) {
  return (
    <div className="fd-contact-card" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}>
      <div className="fd-contact-card__icon">{icon}</div>
      <div className="fd-contact-card__title">{title}</div>
      <div className="fd-contact-card__desc">{description}</div>
      <span className="fd-contact-card__cta">Open →</span>
    </div>
  );
}

export default ContactCard;
