import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Marquee for the footer
    gsap.to(marqueeRef.current?.querySelectorAll('.marquee-item'), {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: 'none',
    });
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen bg-black flex flex-col justify-between overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-10 block">Get in touch</span>
        <h2 className="text-[15vw] md:text-[12vw] leading-none tracking-tighter mb-20 text-center">
          LET'S<br />WORK
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <a
            href="https://www.linkedin.com/in/saifeddinelahmar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-mono text-xs md:text-sm uppercase tracking-widest overflow-hidden"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">LinkedIn</span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-bold">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/saifeddine.lahmar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-mono text-xs md:text-sm uppercase tracking-widest overflow-hidden"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Instagram</span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-bold">Instagram</span>
          </a>
        </div>
      </div>

      <div ref={marqueeRef} className="border-t border-white/10 py-10 flex whitespace-nowrap select-none overflow-hidden">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="marquee-item flex items-center px-10">
            <span className="font-display text-4xl md:text-6xl tracking-tighter text-white/10">SAIFEDDINE LAHMAR — STORYTELLER — FILMMAKER — JOURNALIST — </span>
          </div>
        ))}
      </div>
    </section>
  );
};
