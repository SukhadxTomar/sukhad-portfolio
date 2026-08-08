import { useEffect, useRef } from 'react';
import { capabilities, stackList } from '../data/skills';
import { revealOnScroll } from '../animations/reveals';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Capabilities() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return revealOnScroll(wrapRef.current, reducedMotion, { y: 30 });
  }, [reducedMotion]);

  return (
    <section id="skills" className="px-6 md:px-10 py-32">
      <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold mb-4">
        // Capabilities
      </p>
      <h2 className="font-display uppercase text-[clamp(2rem,6vw,4.5rem)] tracking-[-0.03em] leading-none mb-16">
        Technical index
      </h2>

      <div ref={wrapRef} className="max-w-3xl">
        <div className="hairline" />
        {capabilities.map((c) => (
          <div key={c.index} className="group relative hairline-row">
            <div className="flex items-center justify-between py-5 relative overflow-hidden">
              <span
                className="absolute left-0 top-0 bottom-0 w-0 bg-[var(--acid)]/10 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"
                aria-hidden="true"
              />
              <div className="relative flex items-baseline gap-6">
                <span className="font-display text-sm text-[var(--chrome-2)] group-hover:text-[var(--acid)] transition-colors">
                  {c.index}
                </span>
                <span className="font-display uppercase text-lg md:text-2xl tracking-[-0.01em] group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] inline-block">
                  {c.name}
                </span>
              </div>
              <span className="relative font-display text-sm text-[var(--chrome-2)]">
                {String(c.weight).padStart(2, '0')}
              </span>
            </div>
            <div className="hairline" />
          </div>
        ))}

        <p className="mt-10 text-sm leading-relaxed text-[var(--chrome-3)] max-w-xl">
          {stackList.join(' · ')}
        </p>
      </div>
    </section>
  );
}
