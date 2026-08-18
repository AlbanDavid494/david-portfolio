/** Section heading block with eyebrow label + shimmer title. */
const SectionHeading = ({ eyebrow, title, highlight, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <p className="text-purple-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">{eyebrow}</p>
      <div className="section-divider" />
      <h2 className="syne font-extrabold" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
        {title} <span className="shimmer-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-white/35 mt-3 max-w-sm mx-auto text-sm">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
