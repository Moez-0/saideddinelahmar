import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Narrative', href: '#work' },
  { name: 'Journalism', href: '#journalism' },
  { name: 'Resume', href: '#resume' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pointer-events-none p-6 md:p-10 flex justify-between items-start">
      <div className="pointer-events-auto">
        <a href="#" className="font-display text-2xl md:text-3xl tracking-tighter leading-none block">
          SAIFEDDINE<br />LAHMAR
        </a>
      </div>

      <div className="flex flex-col items-end gap-4 pointer-events-auto">
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
