// Projects.jsx 


import { PROJECTS } from '../../data/data';
import './Projects.css';

export default function Projects() {
  return (
    
    <section className="section" id="projects">
      <div className="section-wrap">
        <p className="section-eye">Projects</p>
        <h2 className="section-title">Things I've built</h2>

        {}
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div className="proj-card" key={project.title}>

              {}
              <div className="proj-top">
                <div className="proj-icon">{project.icon}</div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    Live ↗
                  </a>
                )}
              </div>

              {}
              <div>
                <p className="proj-title">{project.title}</p>
                <p className="proj-desc">{project.desc}</p>
              </div>

              {}
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span className="proj-tag" key={tag}>{tag}</span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}