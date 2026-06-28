// Home.jsx 


import './Home.css';


const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.8 19.8 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1.2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Home() {
  return (
    
    <section className="home" id="home">
      <div className="home-inner">

        {}
        <div className="home-badge">
          <span className="home-badge-dot" />
          Open to frontend internships
        </div>

        {}
        <h1 className="home-name">
          Kunal
          <span>Desai.</span>
        </h1>

        <p className="home-role">Frontend Developer &amp; Computer Science Student</p>

        <p className="home-bio">
          I build clean, fast web interfaces that actually work. Currently studying at
          VIT Chennai and looking for the opportunity to contribute on a real product.
        </p>

        {/* Three CTAs: view work, download resume, go to contact */}
        <div className="home-actions">
          <a href="#projects" className="btn-fill">View Projects →</a>
          
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>

        {}
        <div className="home-contacts">
          <div className="home-contact-item">
            <PhoneIcon />
            <a href="tel:7357380687">+91 7357380687</a>
          </div>
          <div className="home-contact-item">
            <MailIcon />
            <a href="mailto:kdesai626@gmail.com">kdesai626@gmail.com</a>
          </div>
          <div className="home-contact-item">
            <PinIcon />
            <span>Chennai, India</span>
          </div>
        </div>

      </div>
    </section>
  );
}