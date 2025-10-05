
import React from 'react';
import StarryBackground from '../components/StarryBackground';
import Header from '../components/portfolio/Header';
import About from '../components/portfolio/About';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import Experience from '../components/portfolio/Experience';
import Education from '../components/portfolio/Education';
import Contact from '../components/portfolio/Contact'; // Added import for Contact
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <StarryBackground />
      
      <div className="relative z-10">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact /> {/* Added Contact component */}
        <Footer />
      </div>
    </div>
  );
}
