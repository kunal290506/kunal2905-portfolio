// Navbar.jsx 


import { useState, useEffect } from 'react';
import './Navbar.css';


const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [open, setOpen]     = useState(false);   
  const [active, setActive] = useState('home');  

  useEffect(() => {
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop - 80;
        if (scrollY >= top && scrollY < top + el.offsetHeight) {
          setActive(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">Kunal<span>.</span></a>

        {}
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={closeMenu}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {}
        <button
          className="navbar-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}