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
      className="relative min-h-screen bg-[#080808] text-white"
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

      {/* Visual Design Accent */}
      <div className="fixed bottom-10 left-10 z-40 pointer-events-none opacity-20 hidden md:block">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-white" />
          <span className="font-mono text-[8px] uppercase tracking-[1em]">
            Cinema / Narrative / Archive
          </span>
        </div>
      </div>
    </motion.div>
  );
}
