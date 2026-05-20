import { NAV_LINKS } from "../data/navLinks"

const Footer = ({ scrollTo }) => {
  return (
    <footer className="border-t border-white/5 py-8 relative" style={{zIndex: 1}}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="syne font-bold text-lg">
                <span className="shimer-text">David</span>
                <span className="text-white/25">&lt;/&gt;</span>
            </div>

            <div className="flex items-center gap-6 flex-wrap justify-center">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-white/25 hover:text-white text-sm transition-colors cursor-pointer bg-none border-none"
            >
              {link}
            </button>
          ))}
        </div>

        <p className="text-white/20 text-sm">© 2024 All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer