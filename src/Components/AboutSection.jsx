import { ABOUT_SERVICES } from "../data/aboutServices";
import { useInView } from "../hooks/useInView";

const AboutSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="about" className="py-28 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Avatar card */}
          <div
            ref={ref}
            className={`relative shrink-0 anim-fade-left ${inView ? "show" : ""}`}
          >
            <div className="relative">
              <div
                className="w-56 h-56 rounded-3xl overflow-hidden float"
                style={{
                  background: "linear-gradient(135deg, #1a0a2e, #0a1628)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.25) 0%, transparent 60%)",
                  }}
                />
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div className="text-center px-4">
                    <p className="syne font-bold text-sm">David Alban</p>
                    <p className="text-white/40 text-xs">Port Harcourt, Nigeria</p>
                  </div>
                </div>
              </div>
              {/* Decorative shapes */}
              <div
                className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl rotate-12 border border-purple-500/25"
                style={{ background: "rgba(168,85,247,0.05)" }}
              />
              <div
                className="absolute -bottom-5 -left-5 w-14 h-14 rounded-xl rotate-45 border border-cyan-500/25"
                style={{ background: "rgba(34,211,238,0.05)" }}
              />
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 px-3 py-2 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold">
                ● Open to Work
              </div>
            </div>
          </div>
          {/* Bio */}
          <div
            className={`flex-1 space-y-6 anim-fade-right ${inView ? "show" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div>
              <p className="text-purple-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                About Me
              </p>
              <h2
                className="syne font-extrabold leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                I'm <span className="shimmer-text">David David Alban</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Software Engineering Master's student at USTHB and freelance
                web/mobile developer in Algiers. I create tailored solutions
                using Laravel, React, Flutter, and more for startups and growing
                businesses. Passionate about clean code, beautiful UIs, and
                solving real problems with technology.
              </p>
            </div>
            
            <div className="space-y-3">
              {ABOUT_SERVICES.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-xl shrink-0">{icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/85 font-semibold text-sm">
                      {label}
                    </p>
                    <p className="text-white/35 text-xs mt-0.5">{desc}</p>
                  </div>
                  <svg
                    className="w-4 h-4 text-purple-400/50 group-hover:text-purple-400 transition-colors shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
