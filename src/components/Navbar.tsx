import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Narrative', href: '#work' },
  { name: 'Journalism', href: '#journalism' },
  { name: 'Resume', href: '#resume' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const nextTheme = savedTheme ?? (systemPrefersLight ? 'light' : 'dark');

    document.documentElement.classList.toggle('light', nextTheme === 'light');
    setTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('light', nextTheme === 'light');
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pointer-events-none p-6 md:p-10 flex justify-between items-start">
      <div className="pointer-events-auto">
        <a href="#" className="font-display text-2xl md:text-3xl tracking-tighter leading-none block">
          SAIFEDDINE<br />LAHMAR
        </a>
      </div>

      <div className="flex flex-col items-end gap-4 pointer-events-auto">
        <button
          onClick={toggleTheme}
          className="font-mono text-[10px] uppercase tracking-[0.22em] px-3 py-2 border border-white/25 hover:border-white/55 transition-colors"
          aria-label="Toggle light mode"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-link group overflow-hidden h-4"
          >
            <motion.span
              initial={{ y: 0 }}
              whileHover={{ y: -20 }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="block"
            >
              <span className="block">{item.name}</span>
              <span className="block italic font-bold">{item.name}</span>
            </motion.span>
          </a>
        ))}
      </div>
    </nav>
  );
};
