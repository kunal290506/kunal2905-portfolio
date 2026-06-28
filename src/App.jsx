// App.jsx

import './App.css';
import Navbar   from './components/Navbar/Navbar';
import Home     from './components/Home/Home';
import About    from './components/About/About';
import Skills   from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact  from './components/Contact/Contact';
import Footer   from './components/Footer/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  );
}