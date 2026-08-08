import { useEffect, useRef } from 'react';
import LiquidChrome from './LiquidChrome';
import { revealOnScroll, parallax } from '../animations/reveals';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Statement() {
  const reducedMotion = useReducedMotion();
  const textRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const c1 = revealOnScroll(textRef.current, reducedMotion, { y: 50 });
    const c2 = parallax(visualRef.current, reducedMotion, 80);
    return () => {
      c1();
      c2();
    };
  }, [reducedMotion]);

  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-10 py-32 overflow-hidden">
      <div
        ref={visualRef}
        className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2 w-[440px] h-[440px] opacity-50 pointer-events-none"
      >
        <LiquidChrome id="statement" variant="acid" className="w-full h-full" />
      </div>

      <div ref={textRef} className="relative z-10 max-w-4xl">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold mb-6">
          // What I build
        </p>

        <div className="flex items-start gap-4 md:gap-10">
          <span className="font-display text-[clamp(3rem,10vw,7rem)] leading-none outline-text select-none">
            01
          </span>
          <h2 className="font-display uppercase text-[clamp(2rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.03em]">
            I build systems that{' '}
            <span className="chrome-text">think</span>,{' '}
            <span className="text-[var(--acid)]">plan</span> &amp;{' '}
            <span className="outline-text">execute</span>.
          </h2>
        </div>

        <p className="mt-10 max-w-lg text-base md:text-lg text-[var(--chrome-3)] leading-relaxed">
          Multi-agent orchestration, retrieval-augmented reasoning, and production-shaped
          machine learning — designed end-to-end, from data ingestion to a deployed interface.
        </p>
      </div>
    </section>
  );
}
