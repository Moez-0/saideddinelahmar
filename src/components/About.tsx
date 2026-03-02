import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(leftRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(rightRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex flex-col md:flex-row items-center bg-[#080808] border-y border-white/10 overflow-hidden">
      <div ref={leftRef} className="w-full md:w-1/2 p-10 md:p-20 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-10 block">The Perspective</span>
        <h2 className="text-5xl md:text-[8vw] leading-[0.9] tracking-tighter mb-10">
          CREATIVE<br />STORYTELLER
        </h2>
        <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
          Northwestern University / Medill + Film & TV
        </p>
      </div>

      <div ref={rightRef} className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
        <div className="max-w-md space-y-8">
          <p className="text-xl md:text-3xl font-light leading-tight text-white/80">
            Multidisciplinary storyteller, writer-director, and marketing strategist.
          </p>
          <p className="text-base md:text-lg font-light text-white/40 leading-relaxed">
            I combine journalism, filmmaking, and digital media to craft narratives and campaigns that drive engagement and cultural impact.
          </p>
          <div className="pt-10">
            <div className="w-20 h-px bg-white/20 mb-6" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">
              Entertainment / Marketing / Journalism
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
