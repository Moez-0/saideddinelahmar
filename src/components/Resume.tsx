import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Marketing Intern',
    company: 'Dino Marketing Group',
    date: 'Jan 2026 — Present',
    description: 'Source and draft UGC and brand copy for campaigns (including Hyundai Translead and Big Brothers), manage weekly engagement calendars for clients like Beko and MultiPro, and collaborate with creative, strategy, account teams, and senior leadership to deliver approval-ready content on tight timelines.',
  },
  {
    role: "Scholar — Director of Marketing & Operations for SAIF'21",
    company: 'Bezos Family Foundation',
    date: 'Mar 2021 — Jan 2026',
    description: 'Managed and trained interns to implement social media marketing for the South African Ideas Festival, directed commercials and music videos, and led virtual conference productions for 50+ entrepreneurs across Africa.',
  },
  {
    role: 'Media & Communications Intern',
    company: 'The Aspen Institute',
    date: 'Jun 2025 — Dec 2025',
    description: 'Produced a 20+ episode interview series with global leaders, coordinated Action Forum communications with Salesforce-supported workflows, and wrote 10+ stories while auditing 150+ WordPress posts.',
  },
  {
    role: 'TED-Ed Programs Community & Content Intern',
    company: 'TED Conferences',
    date: 'Sep 2024 — Jul 2025',
    description: 'Supported community needs and platform guidance for Student Talks, and assisted marketing by organizing data, reviewing submissions, and recommending talks for promotion.',
  },
  {
    role: 'Publicity & Digital Content Specialist',
    company: 'Undergraduate Research Assistant Program',
    date: 'Jan 2024 — Jun 2024',
    description: 'Developed data-driven recommendations for Time Passages publicity and social media campaigns through strategic content creation and community engagement planning.',
  },
  {
    role: 'Content Strategist & Videographer',
    company: 'Northwestern University Office of Undergraduate Admission',
    date: 'Sep 2023 — Jun 2024',
    description: 'Conceptualized and pitched promotional content, then executed production and post-production for approved admissions campaigns.',
  },
  {
    role: 'Video Specialist',
    company: 'Northwestern University',
    date: 'Nov 2022 — Nov 2023',
    description: 'Edited weekly educational and advertising videos using Adobe Creative Suite and supported on-set production with directors and production managers.',
  },
  {
    role: 'Director of Marketing & Operations',
    company: 'South African Ideas Festival',
    date: 'Mar 2021 — Jun 2022',
    description: 'Spearheaded festival marketing strategy, partnerships, and audience growth while overseeing planning and execution of creative advertising content and live opening-ceremony production.',
  },
];

export const Resume = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('.resume-item');
    items.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="resume" ref={sectionRef} className="py-40 bg-black px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">Chapter 04</span>
          <h2 className="text-6xl md:text-9xl tracking-tighter leading-none">RESUME</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest sticky top-40">
              Work History / Experience
            </p>
          </div>
          
          <div className="md:col-span-8 space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="resume-item group"
              >
                <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-6 group-hover:border-white transition-colors">
                  <div>
                    <h3 className="text-3xl md:text-5xl tracking-tighter leading-none mb-2">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    {exp.date}
                  </span>
                </div>
                <p className="text-lg font-light text-white/60 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
