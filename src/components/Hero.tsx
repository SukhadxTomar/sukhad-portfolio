import { useEffect, useRef } from 'react';
import LiquidChrome from './LiquidChrome';
import { buildHeroScroll } from '../animations/hero';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement | null>(null);
  const sukhadRef = useRef<HTMLDivElement | null>(null);
  const tomarRef = useRef<HTMLDivElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);
  const liquidRef = useRef<HTMLDivElement | null>(null);
  const dotARef = useRef<HTMLDivElement | null>(null);
  const dotBRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !sukhadRef.current ||
      !tomarRef.current ||
      !metaRef.current ||
      !liquidRef.current ||
      !dotARef.current ||
      !dotBRef.current
    )
      return;

    const cleanup = buildHeroScroll(
      {
        section: sectionRef.current,
        sukhad: sukhadRef.current,
        tomar: tomarRef.current,
        meta: metaRef.current,
        liquid: liquidRef.current,
        dotA: dotARef.current,
        dotB: dotBRef.current,
      },
      reducedMotion
    );

    return cleanup;
  }, [reducedMotion]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-10 pt-24"
    >
      <div
        ref={liquidRef}
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-70 pointer-events-none"
      >
        <LiquidChrome id="hero" variant="chrome" className="w-full h-full" />
      </div>

      <div
        ref={dotARef}
        className="absolute left-[12%] top-[22%] w-2.5 h-2.5 rounded-full bg-[var(--acid)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={dotBRef}
        className="absolute right-[18%] bottom-[20%] w-1.5 h-1.5 rounded-full bg-[var(--cyan)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div ref={sukhadRef} className="leading-[0.82]">
          <h1 className="chrome-text inline-block max-w-full pr-[0.08em] font-display uppercase tracking-[-0.04em] text-[clamp(3.2rem,15vw,10rem)]">
            SUKHAD
          </h1>
        </div>
        <div ref={tomarRef} className="leading-[0.82]">
          <h1 className="outline-text font-display uppercase tracking-[-0.04em] text-[clamp(3.2rem,15vw,10rem)]">
            TOMAR
          </h1>
        </div>

        <p className="mt-6 text-sm md:text-base tracking-[0.3em] uppercase text-[var(--acid)] font-medium">
          AI / ML Engineer
        </p>

        <p className="mt-8 max-w-xl font-display uppercase text-2xl md:text-4xl leading-tight text-[var(--ink)]">
          I build systems<br />
          that think.<br />
          plan.<br />
          execute.
        </p>

        <div ref={metaRef} className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-[0.2em] uppercase text-[var(--chrome-2)]">
          <span>AI / ML Engineer</span>
          <span>Agentic Systems</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
}
