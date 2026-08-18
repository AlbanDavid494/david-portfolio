import { useEffect, useState } from "react";
import { NAV_LINKS } from "../../data/navLinks";

const Navbar = ({ scrollTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (link) => {
    scrollTo(link);
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-2xl bg-black/30 border-b border-white/5 ${scrolled ? "py-3 bg-black/50 shadow-lg" : "py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleLink("Home")} className="syne font-extrabold text-xl tracking-tight cursor-pointer bg-none border-none">
          <span className="shimmer-text">&lt;David/&gt;</span>
          <span className="text-white/40 font-light"></span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => handleLink(link)}
              className="nav-link text-sm font-medium text-white/60 hover:text-white transition-colors bg-none border-none cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white bg-none border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5 w-6">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 w-6" : "w-6"}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 w-6" : "w-4"}`} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-2xl bg-black/80 border-t border-white/10 px-6 py-5 space-y-1">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => handleLink(link)}
              className="block text-white/70 hover:text-white w-full text-left py-3 border-none bg-none cursor-pointer text-base border-b border-white/5 last:border-0"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
