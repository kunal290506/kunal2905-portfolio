import { ABOUT_CARDS } from "../../data/data";
import "./About.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-wrap">
        <p className="section-eye">About</p>
        <h2 className="section-title">Who I am</h2>

        <div className="about-grid">
          <div className="about-body">
            <p>
              I'm a <strong>Computer Science student at VIT Chennai</strong>,
              passionate about frontend development and building user-friendly
              web applications. I enjoy turning ideas into responsive,
              accessible, and visually appealing digital experiences.
            </p>

            <p>
              Beyond academics, I actively work on personal projects to improve
              my development skills. From event ticketing systems to travel
              accommodation platforms, every project helps me learn something
              new about software engineering.
            </p>

            <p>
              My goal is to secure a <strong>Frontend Development Internship</strong>,
              contribute to meaningful products, and continue growing as a
              developer while pursuing my degree.
            </p>
          </div>

          <div className="about-cards">
            {ABOUT_CARDS.map((card) => (
              <div className="info-card" key={card.label}>
                <div className="info-icon">
                  {card.icon}
                </div>

                <div className="info-content">
                  <div className="info-label">
                    {card.label}
                  </div>

                  <div className="info-val">
                    {card.val}
                  </div>

                  <div className="info-sub">
                    {card.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}