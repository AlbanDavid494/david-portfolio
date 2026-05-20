import { useState } from "react";

/** Card with a subtle purple glow border on hover. */
const GlowCard = ({ children, className = "", style = {} }) => {
 
    const [hovered, setHovered] = useState(false);

  return (
      <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500
        ${hovered ? "border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.15)]" : ""}
        ${className}`}
      style={style}
    >
      {hovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
        />
      )}
      {children}
    </div>
  )
}

export default GlowCard

