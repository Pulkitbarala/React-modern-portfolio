
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/utils/animations';

const Portfolio = () => {
  useEffect(() => {
    // Initialize animation observers for scroll-triggered animations
    initScrollAnimations();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
