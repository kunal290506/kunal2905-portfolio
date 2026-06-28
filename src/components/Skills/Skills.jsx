// Skills.jsx

import { SKILLS } from '../../data/data';
import './Skills.css';

export default function Skills() {
  return (
   
    <section className="section" id="skills">
      <div className="section-wrap">
        <p className="section-eye">Skills</p>
        <h2 className="section-title">What I work with</h2>

        {}
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <div className="skill-icon">{skill.icon}</div>
                {}
                <span className={`skill-badge${skill.strong ? ' strong' : ''}`}>
                  {skill.level}
                </span>
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}