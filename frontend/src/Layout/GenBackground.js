function GenBackground({ backgroundImage, compact = false, children }) {
  return (
    <div
      className={`fd-hero ${compact ? "fd-hero--compact" : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="fd-hero__overlay" />
      {children && <div className="fd-hero__content">{children}</div>}
    </div>
  );
}

export default GenBackground;
