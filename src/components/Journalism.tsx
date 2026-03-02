import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reports = [
  {
    title: 'Interview Series with Global Leaders (20+ Episodes)',
    location: 'Washington, DC',
    date: '2025',
    type: 'Media Production'
  },
  {
    title: '10+ Reported Stories + 150+ Blog Audits',
    location: 'The Aspen Institute',
    date: '2025',
    type: 'Editorial'
  },
  {
    title: 'TED-Ed Student Talks Community & Content Curation',
    location: 'United States',
    date: '2024 — 2025',
    type: 'Community'
  },
  {
    title: 'Data-Driven Publicity Campaigns for Time Passages',
    location: 'Northwestern University',
    date: '2024',
    type: 'Digital Content'
  },
];

export const Journalism = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Marquee for the background
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'none',
    });

    const items = section.querySelectorAll('.journal-item');
    items.forEach((item) => {
      gsap.fromTo(item,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="journalism" ref={sectionRef} className="py-40 bg-black relative overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none whitespace-nowrap">
        <div ref={marqueeRef} className="text-[30vw] font-display leading-none">
          JOURNALISM JOURNALISM JOURNALISM JOURNALISM
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">Chapter 03</span>
          <h2 className="text-6xl md:text-9xl tracking-tighter leading-none">JOURNALISM</h2>
        </div>

        <div className="mb-16 border border-white/10 p-4 md:p-6">
          <img
            src="/teded_thumbnail.jpg"
            alt="TED-Ed Student Talks thumbnail featuring Saifeddine Lahmar"
            className="w-full h-auto object-cover"
          />
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 mt-4">
            Featured — TED-Ed Student Talks / Leadership Through Listening
          </p>
        </div>

        <div className="space-y-0 border-t border-white/10">
          {reports.map((report, index) => (
            <div
              key={index}
              className="journal-item group border-b border-white/10 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 px-4"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100">
                  {report.type} / {report.date}
                </span>
                <h3 className="text-3xl md:text-5xl tracking-tighter leading-none group-hover:italic transition-all">
                  {report.title}
                </h3>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100">
                  {report.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
