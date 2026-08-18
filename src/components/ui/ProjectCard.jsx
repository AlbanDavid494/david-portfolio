import GlowCard from "./GlowCard";

const ProjectCard = ({ project, delay, inView }) => {
  return (
    <GlowCard
      className={`p-0 overflow-hidden card-hover anim-fade-up ${inView ? "show" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Mockup preview */}
      <div
        className="h-44 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}12, ${project.color}05)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 100%, ${project.color}20 0%, transparent 70%)`,
          }}
        />

        <div className="absolute inset-4 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
            <div className="flex-1 mx-2 h-3 rounded-full bg-white/10" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2 rounded-full bg-white/10 w-3/4" />
            <div className="h-2 rounded-full bg-white/8 w-1/2" />
            <div className="flex gap-2 mt-3">
              {["25", "15", "10"].map((opacity) => (
                <div key={opacity} className="h-8 flex-1 rounded-lg" style={{ background: project.color + opacity }} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3">
          <span
            className="px-2.5 py-1 rounded-lg text-xs font-bold"
            style={{
              background: `${project.color}22`,
              color: project.color,
              border: `1px solid ${project.color}33`,
            }}
          >
            {project.tag}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="syne font-bold text-lg">{project.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-xs border border-white/10 bg-white/5 text-white/45 font-medium">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button className="flex items-center gap-1.5 text-xs text-white/45 hover:text-white transition-colors px-3 py-2 rounded-lg border border-white/10 bg-transparent cursor-pointer hover:border-white/20">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Repository
          </button>
          <button
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:brightness-110"
            style={{
              background: `${project.color}18`,
              color: project.color,
              border: `1px solid ${project.color}33`,
            }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </button>
        </div>
      </div>
    </GlowCard>
  );
};

export default ProjectCard;
