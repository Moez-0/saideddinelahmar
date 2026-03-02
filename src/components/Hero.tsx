import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const intro = contentRef.current;
    if (!marquee || !intro) return;

    const marqueeTween = gsap.to(marquee.querySelectorAll('.marquee-item'), {
      xPercent: -100,
      repeat: -1,
      duration: 22,
      ease: 'none',
    });

    const introTimeline = gsap.timeline();
    introTimeline.fromTo(
      intro,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    );

    return () => {
      marqueeTween.kill();
      introTimeline.kill();
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black pt-28 sm:pt-32 md:pt-40 pb-14 md:pb-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.15),transparent_42%),radial-gradient(circle_at_86%_82%,rgba(255,255,255,0.08),transparent_36%)]" />
      </div>

      <div className="absolute top-[26%] sm:top-[30%] md:top-[33%] left-0 w-full pointer-events-none overflow-hidden opacity-[0.12] md:opacity-[0.16]">
        <div ref={marqueeRef} className="flex whitespace-nowrap z-10 select-none">
        {[1, 2, 3].map((i) => (
          <div key={i} className="marquee-item flex items-center">
              <h2 className="marquee-text px-6 sm:px-8 md:px-10 !text-[20vw] sm:!text-[14vw] md:!text-[10vw]">SAIFEDDINE LAHMAR</h2>
              <div className="w-8 sm:w-12 md:w-16 h-[1px] bg-white/40 mx-4 sm:mx-6 md:mx-8" />
          </div>
        ))}
        </div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] md:tracking-[0.5em] text-white/55 mb-6 md:mb-8">
          Saifeddine Lahmar / Director & Storyteller
        </p>

        <h1 className="text-[16vw] sm:text-[12vw] md:text-[9vw] leading-[0.88] tracking-tight max-w-5xl">
          Building bold narratives
          <span className="block text-white/75">for screen, culture, and impact.</span>
        </h1>

        <p className="mt-6 md:mt-9 text-[15px] sm:text-base md:text-xl text-white/75 max-w-2xl leading-relaxed">
          A multidisciplinary creative shaping films, journalism, and campaigns that are emotionally sharp and culturally grounded.
        </p>

        <div className="mt-9 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
          <a
            href="#work"
            className="inline-flex items-center justify-center border border-white/25 hover:border-white/60 transition-colors px-6 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/85 hover:text-white transition-colors"
          >
            Let’s Connect
            <span className="w-10 h-px bg-white/60" />
          </a>
        </div>

        <div className="mt-10 md:mt-14 pt-5 border-t border-white/15 flex flex-wrap items-center gap-x-8 gap-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">Chicago / Tunis</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">Film • Journalism • Marketing</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 pointer-events-none" />
    </section>
  );
};
