import { useEffect, useRef } from 'react';
import { Mail, FileText, Code2, Link2 } from 'lucide-react';
import { revealOnScroll } from '../animations/reveals';
import { useReducedMotion } from '../hooks/useReducedMotion';

const LINKS = [
  { label: 'Email', href: 'mailto:sukhadtomar@gmail.com', icon: Mail, sub: 'sukhadtomar@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/SukhadxTomar', icon: Code2, sub: 'SukhadxTomar' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sukhad-tomar', icon: Link2, sub: 'sukhad-tomar' },
  { label: 'Resume', href: '/resume.pdf', icon: FileText, sub: 'Download PDF' },
];

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return revealOnScroll(wrapRef.current, reducedMotion, { y: 50 });
  }, [reducedMotion]);

  return (
    <section id="contact" className="relative px-6 md:px-10 pt-32 pb-10">
      <div ref={wrapRef}>
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold mb-8">
          // Get in touch
        </p>

        <h2 className="font-display uppercase outline-text leading-[0.9] text-[clamp(2.5rem,11vw,10rem)] tracking-[-0.03em] break-words -ml-1">
          LET'S
        </h2>
        <h2 className="font-display uppercase outline-text leading-[0.9] text-[clamp(2.5rem,11vw,10rem)] tracking-[-0.03em] break-words -ml-1">
          BUILD
        </h2>
        <h2 className="font-display uppercase chrome-text leading-[0.9] text-[clamp(2.5rem,11vw,10rem)] tracking-[-0.03em] break-words -ml-1">
          SOMETHING
        </h2>
        <h2 className="font-display uppercase text-[var(--acid)] leading-[0.9] text-[clamp(2.5rem,11vw,10rem)] tracking-[-0.03em] break-words -ml-1 mb-16">
          INTELLIGENT.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {LINKS.map(({ label, href, icon: Icon, sub }) => {
            const opensNewTab = href.startsWith('http') || label === 'Resume';

            return (
              <a
                key={label}
                href={href}
                target={opensNewTab ? '_blank' : undefined}
                rel={opensNewTab ? 'noopener noreferrer' : undefined}
                className="group flex flex-col gap-3 border border-white/15 p-5 hover:border-[var(--acid)] transition-colors"
              >
              <Icon size={18} className="text-[var(--acid)]" />
              <span className="font-display uppercase text-sm tracking-[0.05em]">{label}</span>
              <span className="text-xs text-[var(--chrome-2)] group-hover:text-[var(--chrome-3)] transition-colors truncate">
                {sub}
              </span>
              </a>
            );
          })}
        </div>
      </div>

      <footer className="mt-24 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-[10px] tracking-[0.2em] uppercase text-[var(--chrome-2)]">
        <span>© 2026 Sukhad Tomar</span>
        <span>Ghaziabad, NCR, India</span>
      </footer>
    </section>
  );
}
