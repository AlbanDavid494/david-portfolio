import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import GlowCard from "../ui/GlowCard";
import { CONTACT_INFO } from "../data/contactInfo";
import { useInView } from "../hooks/useInView";



const ContactSection = () => {

    const [ref, inView] = useInView(0.1);
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [sent, setSent] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        setSent(true);
        setFormData({name: "", email: "", message: ""});
        setTimeout(() => setSent(false), 3000);
    };

    const updateField = (field) => (e) => setFormData(prev => ({...prev, [field]: e.target.value}));

  return (
    <section id="contact" className="py-28 relative" style={{zIndex: 1}}>

        <div className="max-w-5xl mx-auto px-6">
            <div ref={ref} className={`anim-fade-up ${inView ? "show" : ""}`}>
                <SectionHeading eyebrow="Get In Touch"
                title="Say"
                highlight="Hello"
                subtitle="Have a project in mind? Let's build something amazing together."
                />
            </div>

            <div className="gid md:grid-cols-5 gap-6">

             {/* Info Cards */}
             <div className={`md:cols-span-2 space-y-4 anim-fade-left ${inView ? "show": ""}`} style={{ transitionDelay: "0.1s" }}>
                {
                    CONTACT_INFO.map(({ icon, label, value }) => (
              <GlowCard key={label} className="p-4 flex items-center gap-4">
                <span className="text-xl w-8 text-center shrink-0">{icon}</span>
                <div>
                  <p className="text-white/25 text-xs uppercase tracking-wider">{label}</p>
                  <p className="text-white/80 font-medium text-sm mt-0.5">{value}</p>
                </div>
              </GlowCard>
            ))
                }
             </div>

             {/* Form */}
          <GlowCard
            className={`md:col-span-3 p-7 anim-fade-right ${inView ? "show" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-2xl pulse-glow">✓</div>
                <p className="syne font-bold text-xl text-green-400">Message Sent!</p>
                <p className="text-white/35 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/30 text-xs uppercase tracking-wider mb-2">Name</label>
                    <input
                      className="contact-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={updateField("name")}
                    />
                  </div>
                  <div>
                    <label className="block text-white/30 text-xs uppercase tracking-wider mb-2">Email</label>
                    <input
                      className="contact-input"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={updateField("email")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/30 text-xs uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    className="contact-input resize-none"
                    rows={6}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={updateField("message")}
                  />
                </div>
                <button onClick={handleSend} className="glow-btn w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2.5 text-sm">
                  <span className="relative z-10">Send Message</span>
                  <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            )}
          </GlowCard>
            </div>
        </div>

    </section>
  )
}

export default ContactSection