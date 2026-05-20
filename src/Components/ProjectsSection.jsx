import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import  SectionHeading  from '../ui/SectionHeading';
import { PROJECTS } from '../data/projects';
import { useInView } from '../hooks/useInView';

const ProjectsSection = () => {
  const [activeTab, setActiveTab]  = useState("Web App");
  const [ref, inView] = useInView(0.1);
  const filtered = PROJECTS.filter(p => activeTab === "All" || p.tag === activeTab);
  return (
    <section id="projects" className="py-28 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`anim-fade-up ${inView ? "show" : ""}`}>
          <SectionHeading eyebrow="Portfolio" title="My" highlight="Projects" />
        </div>

        {/* Filter tabs */}
        <div className={`flex justify-center gap-3 mb-10 flex-wrap anim-fade-up ${inView ? "show" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {["Web App", "Mobile", "All"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === tab ? "tag-active" : "tag-btn"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.title + activeTab}
              project={project}
              delay={i * 80 + 200}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
