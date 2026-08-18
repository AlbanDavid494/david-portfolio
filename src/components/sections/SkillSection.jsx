import { SKILLS } from "../../data/skills";
// FIX: EXTRA_TECH used to be defined inline in this component — moved to
// data/ to match the pattern the rest of the app follows.
import { EXTRA_TECH } from "../../data/extraTech";
import { useInView } from "../../hooks/useInView";
import AnimatedBar from "../ui/AnimatedBar";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

const SkillSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="skills" className="py-28 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`anim-fade-up ${inView ? "show" : ""}`}>
          <SectionHeading eyebrow="Expertise" title="My" highlight="Skills" />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {SKILLS.map((skill, i) => (
            <GlowCard
              key={skill.name}
              className={`p-6 card-hover anim-fade-up ${inView ? "show" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm syne"
                    style={{ background: `${skill.color}20`, color: skill.color, border: `1px solid ${skill.color}30` }}
                  >
                    {skill.name[0]}
                  </div>
                  <span className="font-semibold text-white/88 text-sm">{skill.name}</span>
                </div>
                <span className="text-white/35 text-xs font-mono tabular-nums">{skill.level}%</span>
              </div>
              <AnimatedBar level={skill.level} color={skill.color} delay={i * 60 + 200} />
            </GlowCard>
          ))}
        </div>
        <GlowCard className={`mt-10 p-6 anim-fade-up ${inView ? "show" : ""}`} style={{ transitionDelay: "0.5s" }}>
          <p className="text-white/30 text-xs uppercase tracking-widest text-center mb-5">Also working with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {EXTRA_TECH.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/50 text-xs font-medium hover:border-purple-500/30 hover:text-white/80 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </GlowCard>
      </div>
    </section>
  );
};

export default SkillSection;
