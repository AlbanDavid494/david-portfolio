import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import CustomCursor from "./components/ui/CustomCursor";
import FloatingOrb from "./components/ui/FloatingOrb";
// FIX: scrollTo used to not exist anywhere — Navbar, Footer, and
// HeroSection all expected it as a prop but nothing defined or passed it,
// so every nav click threw "scrollTo is not a function".
import { scrollTo } from "./utils/scrollTo";

export default function Portfolio() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background: "#060610",
        fontFamily: "'DM Sans', sans-serif",
        maxWidth: "100vw",
      }}
    >
      <CustomCursor />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; }
        html, body { overflow-x: hidden; max-width: 100vw; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #060610; }
        ::-webkit-scrollbar-thumb { background: #a855f7; border-radius: 2px; }
        .syne { font-family: 'Syne', sans-serif; }
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-18px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-12px) rotate(3deg)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeLeft { from{opacity:0;transform:translateX(-32px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeRight { from{opacity:0;transform:translateX(32px)} to{opacity:1;transform:translateX(0)} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 20px rgba(168,85,247,0.3)} 50%{box-shadow:0 0 40px rgba(168,85,247,0.6)} }
        .float { animation: float 5s ease-in-out infinite; }
        .float2 { animation: float2 6s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #a855f7, #22d3ee, #f59e0b, #a855f7);
          background-size: 300% auto;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .grid-bg {
          background-image: linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .glow-btn {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          transition: all 0.3s; cursor: pointer; border: none;
        }
        .glow-btn::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #22d3ee44, #a855f744);
          opacity: 0; transition: opacity 0.3s;
        }
        .glow-btn:hover::after { opacity: 1; }
        .glow-btn:hover { box-shadow: 0 0 35px rgba(168,85,247,0.55); transform: translateY(-2px); }
        .tag-btn {
          border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.55); transition: all 0.3s; cursor: pointer;
        }
        .tag-btn:hover { border-color: rgba(168,85,247,0.4); color: white; background: rgba(168,85,247,0.08); }
        .tag-active {
          background: linear-gradient(135deg, #a855f7, #7c3aed) !important;
          color: white !important; border-color: transparent !important;
          box-shadow: 0 0 20px rgba(168,85,247,0.4);
        }
        .contact-input {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; padding: 14px 16px; color: white; width: 100%; outline: none;
          transition: border 0.3s, box-shadow 0.3s; font-family: 'DM Sans', sans-serif; font-size: 14px;
        }
        .contact-input:focus { border-color: #a855f7; box-shadow: 0 0 0 3px rgba(168,85,247,0.15); }
        .contact-input::placeholder { color: rgba(255,255,255,0.25); }
        .card-hover { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .anim-fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .anim-fade-up.show { opacity: 1; transform: translateY(0); }
        .anim-fade-left { opacity: 0; transform: translateX(-32px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .anim-fade-left.show { opacity: 1; transform: translateX(0); }
        .anim-fade-right { opacity: 0; transform: translateX(32px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .anim-fade-right.show { opacity: 1; transform: translateX(0); }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -3px; left: 0; width: 0; height: 1.5px; background: #a855f7; transition: width 0.3s; }
        .nav-link:hover::after { width: 100%; }
        .section-divider {
          width: 60px; height: 3px; border-radius: 99px;
          background: linear-gradient(90deg, #a855f7, #22d3ee);
          margin: 0 auto 20px;
        }
      `}</style>
      <div className="fixed inset-0 grid-bg pointer-events-none" style={{ zIndex: 0 }} />
      <FloatingOrb style={{ width: 700, height: 700, background: "radial-gradient(circle, #a855f755, transparent)", top: -200, left: -300, zIndex: 0 }} />
      <FloatingOrb style={{ width: 500, height: 500, background: "radial-gradient(circle, #22d3ee44, transparent)", top: "35%", right: -200, zIndex: 0 }} />
      <FloatingOrb style={{ width: 450, height: 450, background: "radial-gradient(circle, #7c3aed44, transparent)", bottom: "5%", left: "15%", zIndex: 0 }} />

      <Navbar scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
