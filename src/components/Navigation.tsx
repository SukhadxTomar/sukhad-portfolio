import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const LINKS = [
  { label: 'WORK', href: '#work' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
  { label: 'RESUME', href: '/resume.pdf' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 backdrop-blur-md bg-black/40 border-b border-white/10">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-[var(--ink)] hover:text-[var(--acid)] transition-colors"
        >
          SUKHAD://
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.label === 'RESUME' ? '_blank' : undefined}
                rel={l.label === 'RESUME' ? 'noopener noreferrer' : undefined}
                className="group relative text-xs tracking-[0.15em] font-medium uppercase text-[var(--ink)] transition-colors hover:text-[var(--acid)]"
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden font-display text-xs tracking-[0.2em] uppercase text-[var(--acid)] border border-[var(--acid)] px-4 py-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          MENU
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black flex flex-col justify-between p-6"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center">
              <span className="font-display text-lg text-[var(--ink)]">SUKHAD://</span>
              <button onClick={close} aria-label="Close menu" className="text-[var(--acid)]">
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <a
                    href={l.href}
                    onClick={close}
                    target={l.label === 'RESUME' ? '_blank' : undefined}
                    rel={l.label === 'RESUME' ? 'noopener noreferrer' : undefined}
                    className="font-display text-[15vw] leading-[0.95] uppercase text-[var(--ink)] hover:text-[var(--acid)] transition-colors block"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <span className="text-xs tracking-[0.2em] text-[var(--chrome-2)] uppercase">
              Delhi, India — 2026
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
