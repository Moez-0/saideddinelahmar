import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Menghir Harissa',
    category: 'Short Film',
    image: '/menghir_harissa.jpg',
    year: '2024',
    logline: 'A bold, culture-rooted short film blending humor and identity.'
  },
  {
    title: 'Menghir Hrissa — Scene Still',
    category: 'Film Frame',
    image: '/menghir_scene.png',
    year: '2025',
    logline: 'Selected frame from a key scene in Menghir Hrissa.'
  }
];

export const Narrative = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.project-card-v2');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.9, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-40 bg-black px-6 md:px-10">
      <div className="flex justify-between items-end mb-20">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">Chapter 02</span>
          <h2 className="text-6xl md:text-9xl tracking-tighter leading-none">NARRATIVE</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card-v2 group cursor-pointer"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest bg-white text-black px-2 py-1">
                  {project.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                  {project.year}
                </span>
              </div>
              
              <div className="overflow-hidden">
                <h3 className="text-4xl md:text-6xl tracking-tighter leading-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.33,1,0.68,1]">
                  {project.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 mt-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.33,1,0.68,1] delay-75">
                  {project.logline}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};
