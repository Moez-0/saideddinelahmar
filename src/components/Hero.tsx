import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Continuous marquee animation
    gsap.to(marquee.querySelectorAll('.marquee-item'), {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: 'none',
    });

    // Scroll-based scaling and parallax
    gsap.to(marquee, {
      scale: 1.2,
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo(subtextRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power4.out' }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div ref={marqueeRef} className="flex whitespace-nowrap z-10 select-none">
        {[1, 2, 3].map((i) => (
          <div key={i} className="marquee-item flex items-center">
            <h1 className="marquee-text px-10">SAIFEDDINE LAHMAR</h1>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/20 mx-10 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      <div ref={subtextRef} className="mt-12 text-center z-10 px-6">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/40 mb-4">
          Creative Media / Film / Journalism
        </p>
        <h2 className="text-xl md:text-3xl font-light tracking-tight text-white/80 max-w-2xl mx-auto normal-case font-sans">
          Championing creative media innovation through purposeful storytelling.
        </h2>
      </div>

      {/* Abstract visual element */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
};
