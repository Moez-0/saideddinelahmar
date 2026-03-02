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
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black md:pt-40 md:pb-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.15),transparent_42%),radial-gradient(circle_at_86%_82%,rgba(255,255,255,0.08),transparent_36%)]" />
      </div>

      <div className="absolute top-[38%] sm:top-[34%] md:top-[33%] left-0 w-full pointer-events-none overflow-hidden opacity-[0.12] md:opacity-[0.16]">
        <div ref={marqueeRef} className="flex whitespace-nowrap z-10 select-none">
        {[1, 2, 3].map((i) => (
          <div key={i} className="marquee-item flex items-center">
              <h2 className="marquee-text px-6 sm:px-8 md:px-10 !text-[20vw] sm:!text-[14vw] md:!text-[10vw]">SAIFEDDINE LAHMAR</h2>
              <div className="w-8 sm:w-12 md:w-16 h-[1px] bg-white/40 mx-4 sm:mx-6 md:mx-8" />
          </div>
        ))}
        </div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-10 min-h-[100svh] flex flex-col justify-center pt-24 pb-12 md:min-h-0 md:block md:pt-0 md:pb-0">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.32em] md:tracking-[0.42em] text-white/70 mb-6 md:mb-8">
          Saifeddine Lahmar / Director & Storyteller
        </p>

        <h1 className="text-[16vw] sm:text-[12vw] md:text-[9vw] leading-[0.9] tracking-tight max-w-5xl font-bold">
          Bold narratives.
        </h1>

        <p className="mt-5 md:mt-7 text-[15px] sm:text-base md:text-xl font-medium text-white/85 max-w-md leading-relaxed">
          Film and journalism with cultural clarity.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
          <a
            href="#work"
            className="inline-flex items-center justify-center border border-white/35 hover:border-white/70 transition-colors px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 hover:text-white transition-colors"
          >
            Let’s Connect
            <span className="w-10 h-px bg-white/60" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 pointer-events-none" />
    </section>
  );
};
