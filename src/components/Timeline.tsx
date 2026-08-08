import { useEffect, useRef } from 'react';
import { timeline } from '../data/skills';
import { revealOnScroll } from '../animations/reveals';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Timeline() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return revealOnScroll(wrapRef.current, reducedMotion, { y: 30 });
  }, [reducedMotion]);

  return (
    <section className="px-6 md:px-10 py-32">
      <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold mb-10">
        // Timeline
      </p>

      <div ref={wrapRef} className="max-w-2xl border-l border-white/15">
        {timeline.map((t, i) => (
          <div key={i} className="relative pl-8 pb-10 last:pb-0">
            <span
              className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-[var(--acid)]"
              aria-hidden="true"
            />
            <span className="block text-xs tracking-[0.2em] text-[var(--chrome-2)] mb-1">
              {t.year}
            </span>
            <span className="font-display uppercase text-xl md:text-2xl tracking-[-0.01em]">
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
