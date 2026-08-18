import { useInView } from "../../hooks/useInView";
import GlowCard from "../ui/GlowCard";
import { SparkleCanvas } from "../ui/SparkleCanvas";
import TypewriterText from "../ui/TypewriterText";
// FIX: HERO_STATS, TYPEWRITER_TEXTS, SOCIAL_LINKS, HERO_BADGES used to be
// defined inline inside this component (recreated every render, and
// inconsistent with the rest of the app keeping content in data/).
import { HERO_STATS, TYPEWRITER_TEXTS, SOCIAL_LINKS, HERO_BADGES } from "../../data/heroContent";

const HeroSection = ({ scrollTo }) => {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20" style={{ zIndex: 1 }}>
      <SparkleCanvas />

      <div className="max-w-6xl mx-auto px-6 w-full py-20" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text column */}
          <div ref={ref} className={`flex-1 space-y-8 anim-fade-left ${inView ? "show" : ""}`}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for freelance work
            </div>

            {/* FIX: clamp(min, preferred, max) requires min <= max — it was
                clamp(2.5rem, 2.2vw, 1.9rem), which is backwards and just
                locks to 1.9rem on every screen size. */}
            <h1 className="syne font-extrabold leading-[1.1]" style={{ fontSize: "clamp(1.9rem, 4vw, 3.5rem)" }}>
              Hi, I'm <span className="shimmer-text">David</span>
              <br />
              <TypewriterText texts={TYPEWRITER_TEXTS} />
            </h1>

            <p className="text-white/45 text-lg leading-relaxed max-w-lg">
              focused on building beautiful, fast, and smoothly animated web applications. Combining clean code with a passion for great design, I create highly interactive and responsive user interfaces that bring digital products to life.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button className="glow-btn px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2.5 text-sm">
                <span className="relative z-10">Download Resume</span>
                <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("Projects")}
                className="px-8 py-4 rounded-xl border border-white/15 text-white/70 font-semibold hover:border-purple-500/40 hover:bg-purple-500/8 hover:text-white transition-all duration-300 text-sm cursor-pointer bg-transparent"
              >
                View Work →
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Avatar column */}
          <div className={`relative shrink-0 anim-fade-right ${inView ? "show" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 float">
              <div
                className="absolute inset-0 rounded-full spin-slow"
                style={{ padding: "3px", background: "conic-gradient(from 0deg, #a855f7, #22d3ee, #f59e0b, #a855f7)" }}
              >
                <div className="w-full h-full rounded-full" style={{ background: "#060610" }} />
              </div>

              <div className="absolute inset-3 rounded-full overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #0a1628 100%)" }}>
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 30%, rgba(168,85,247,0.2) 0%, transparent 60%)" }} />
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-purple-500/30 to-cyan-500/20 flex items-center justify-center border border-purple-500/30">
                    <svg className="w-10 h-10 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <p className="syne font-bold text-sm text-white/80">David Alban</p>
                  <p className="text-purple-400 text-xs">Front-End Dev</p>
                </div>
              </div>

              {HERO_BADGES.map(({ label, logo, color, top, right, bottom, left, delay }) => (
                <div
                  key={label}
                  className="absolute px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md float2 flex items-center gap-1.5"
                  style={{
                    top, right, bottom, left,
                    animationDelay: delay,
                    border: `1px solid ${color}44`,
                    background: `${color}18`,
                    color,
                    whiteSpace: "nowrap",
                  }}
                >
                  <img
                    src={logo}
                    alt={`${label} logo`}
                    className="w-4 h-4 object-contain"
                    style={{ filter: label === "Next.js" && color === "#ffffff" ? "none" : `drop-shadow(0 0 1px ${color})` }}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 anim-fade-up ${inView ? "show" : ""}`} style={{ transitionDelay: "0.4s" }}>
          {HERO_STATS.map(({ value, label, icon }) => (
            <GlowCard key={label} className="p-5 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="syne font-extrabold text-2xl shimmer-text">{value}</div>
              <div className="text-white/35 text-xs mt-1">{label}</div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
