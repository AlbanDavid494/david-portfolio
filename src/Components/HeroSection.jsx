import { useInView } from "../hooks/useInView";
import GlowCard from "../ui/GlowCard";
import { SparkleCanvas } from "../ui/SparkleCanvas";
import TypewriterText from "../ui/TypewriterText";

const HeroSection = ({ scrollTo }) => {
    const HERO_STATS = [
  { value: "3+",   label: "Years Experience", icon: "⚡" },
  { value: "20+",  label: "Projects Done",    icon: "🚀" },
  { value: "8+",   label: "Technologies",     icon: "🛠"  },
  { value: "100%", label: "Satisfaction",     icon: "⭐" },
];
  const TYPEWRITER_TEXTS = [
    "Frontend Engineer.",
    "UI/UX Developer.",
    "Web Applications Dev.",
    "Client-Side Architect.",
  ];
  const SOCIAL_LINKS = [
    {
      label: "GitHub",
      path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    },
    {
      label: "LinkedIn",
      path: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
    },
    {
      label: "Behance",
      path: "M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zM7.33 18.054c-1.161 0-2.059-.573-2.059-1.627 0-1.049.95-1.57 2.059-1.57h.008c1.232 0 2.059.573 2.059 1.57 0 1.054-.827 1.627-2.059 1.627H7.33zm0-7.609c-1.068 0-1.966-.487-1.966-1.468 0-.966.898-1.468 1.966-1.468 1.073 0 1.966.502 1.966 1.468 0 .981-.893 1.468-1.966 1.468zM0 5v14h9.093c2.666 0 4.888-1.478 4.888-4.155 0-1.898-1.018-3.152-2.551-3.686 1.157-.576 1.838-1.67 1.838-3.118 0-2.59-2.08-3.041-4.376-3.041H0z",
    },
  ];
  const HERO_BADGES = [
    {
      label: "React",
      logo: "https://unpkg.com/simple-icons@v11/icons/react.svg",
      color: "#00d8ff",
      top: "4%",
      right: "-18%",
      delay: "0s",
    },
    {
      label: "Next.js",
      logo: "https://unpkg.com/simple-icons@v11/icons/nextdotjs.svg",
      color: "#ffffff",
      bottom: "12%",
      right: "-20%",
      delay: "1s",
    },
    {
      label: "Tailwind CSS",
      logo: "https://unpkg.com/simple-icons@v11/icons/tailwindcss.svg",
      color: "#38bdf8",
      top: "20%",
      left: "-20%",
      delay: "0.5s",
    },
    {
      label: "TypeScript",
      logo: "https://unpkg.com/simple-icons@v11/icons/typescript.svg",
      color: "#3178c6",
      bottom: "4%",
      left: "-12%",
      delay: "1.5s",
    },
  ];
  const [ref, inView] = useInView(0.1);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{ zIndex: 1 }}
    >
      <SparkleCanvas />

      <div
        className="max-w-6xl mx-auto px-6 w-full py-20"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ── Text column ── */}
          <div
            ref={ref}
            className={`flex-1 space-y-8 anim-fade-left ${inView ? "show" : ""}`}
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for freelance work
            </div>

            {/* Headline */}
            <h1
              className="syne font-extrabold leading-[1.1]"
              style={{ fontSize: "clamp(2.5rem, 2.2vw, 1.9rem)" }}
            >
              Hi, I'm <span className="shimmer-text">David</span>
              <br />
              <TypewriterText texts={TYPEWRITER_TEXTS} />
            </h1>

            <p className="text-white/45 text-lg leading-relaxed max-w-lg">
focused on building beautiful, fast, and smoothly animated web applications. Combining clean code with a passion for great design, I create highly interactive and responsive user interfaces that bring digital products to life.
            </p>

            {/* CTA buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <button className="glow-btn px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2.5 text-sm">
                <span className="relative z-10">Download Resume</span>
                <svg
                  className="relative z-10 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("Projects")}
                className="px-8 py-4 rounded-xl border border-white/15 text-white/70 font-semibold hover:border-purple-500/40 hover:bg-purple-500/8 hover:text-white transition-all duration-300 text-sm cursor-pointer bg-transparent"
              >
                View Work →
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Avatar column ── */}
          <div
            className={`relative shrink-0 anim-fade-right ${inView ? "show" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 float">
              {/* Spinning conic ring */}
              <div
                className="absolute inset-0 rounded-full spin-slow"
                style={{
                  padding: "3px",
                  background:
                    "conic-gradient(from 0deg, #a855f7, #22d3ee, #f59e0b, #a855f7)",
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: "#060610" }}
                />
              </div>

              {/* Inner avatar */}
              <div
                className="absolute inset-3 rounded-full overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #1a0a2e 0%, #0a1628 100%)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, rgba(168,85,247,0.2) 0%, transparent 60%)",
                  }}
                />
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-purple-500/30 to-cyan-500/20 flex items-center justify-center border border-purple-500/30">
                    <svg
                      className="w-10 h-10 text-purple-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <p className="syne font-bold text-sm text-white/80">
                    David David Alban
                  </p>
                  <p className="text-purple-400 text-xs">Front-End Dev</p>
                </div>
              </div>

              {/* Floating tech badges */}
              {HERO_BADGES.map(
                ({ label, logo, color, top, right, bottom, left, delay }) => (
                  <div
                    key={label}
                    className="absolute px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md float2 flex items-center gap-1.5"
                    style={{
                      top,
                      right,
                      bottom,
                      left,
                      animationDelay: delay,
                      border: `1px solid ${color}44`,
                      background: `${color}18`,
                      color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {/* SVG Logo */}
                    <img
                      src={logo}
                      alt={`${label} logo`}
                      className="w-4 h-4 object-contain"
                      style={{
                        // This keeps the Next.js logo white/visible if you are using a dark background
                        filter:
                          label === "Next.js" && color === "#ffffff"
                            ? "none"
                            : `drop-shadow(0 0 1px ${color})`,
                      }}
                    />
                    <span>{label}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 anim-fade-up ${inView ? "show" : ""}`}
          style={{ transitionDelay: "0.4s" }}
        >
          {HERO_STATS.map(({ value, label, icon }) => (
            <GlowCard key={label} className="p-5 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="syne font-extrabold text-2xl shimmer-text">
                {value}
              </div>
              <div className="text-white/35 text-xs mt-1">{label}</div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
