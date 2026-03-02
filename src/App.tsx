import { useEffect } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Narrative } from './components/Narrative';
import { Journalism } from './components/Journalism';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { CustomCursor, FilmGrain } from './components/Common';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="relative min-h-screen bg-black text-white"
    >
      <CustomCursor />
      <FilmGrain />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Narrative />
        <Journalism />
        <Resume />
        <Contact />
      </main>
    </motion.div>
  );
}
