import { useEffect, useRef, type ReactNode } from 'react';
import LiquidChrome from './LiquidChrome';
import { revealOnScroll, parallax } from '../animations/reveals';
import { useReducedMotion } from '../hooks/useReducedMotion';

const PILLARS: { index: string; title: string; body: ReactNode }[] = [
  {
    index: '01',
    title: 'AGENTIC SYSTEMS',
    body: <>Most &apos;AI agents&apos; are just a single LLM call wearing a fancy label. Mine actually plan. A <span className="font-semibold text-[var(--acid)]">Planner node checks a Capability Registry</span> before deciding what steps to take, instead of guessing blindly. When a step fails, a two-tier diagnosis layer figures out what kind of failure it is, then applies a targeted fix — all within a <span className="font-semibold text-[var(--acid)]">hard retry budget</span> so the system never spirals forever trying to fix itself.</>,
  },
  {
    index: '02',
    title: 'RAG & RETRIEVAL',
    body: <>Most RAG chatbots force every question through the document pipeline, even the simple ones. My router checks <span className="font-semibold text-[var(--acid)]">similarity scores against the vector store</span> first — strong match, it grounds the answer in retrieved context; weak match, it falls back to the model&apos;s own reasoning instead of hallucinating from thin retrieval. The whole thing streams token-by-token, so switching between &apos;documented answer&apos; and &apos;general answer&apos; never feels like a delay.</>,
  },
  {
    index: '03',
    title: 'ML & ANALYTICS',
    body: <>Numbers don&apos;t lie — I make them talk. I&apos;ve built advanced data science projects end-to-end — uncovering patterns buried in raw data, predicting outcomes before they happen, and turning messy datasets into models that actually make decisions. Not tutorial-tier work — <span className="font-semibold text-[var(--acid)]">deployed, working systems</span> that ship real results, not notebooks that sit unopened.</>,
  },
  {
    index: '04',
    title: 'AUTONOMOUS ENGINEERING',
    body: <>Agents that only run once you babysit them aren&apos;t really autonomous. I engineered feedback loops where the system catches its own failures and fixes itself — no manual restart needed. But full autonomy isn&apos;t always the goal. When a decision crosses a <span className="font-semibold text-[var(--acid)]">risk threshold</span> or confidence drops too low, the loop pauses and hands control back to a human — because knowing when not to act alone is part of good engineering too.</>,
  },
];

export default function Statement() {
  const reducedMotion = useReducedMotion();
  const textRef = useRef<HTMLDivElement | null>(null);
  const pillarsRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const c1 = revealOnScroll(textRef.current, reducedMotion, { y: 50 });
    const c2 = parallax(visualRef.current, reducedMotion, 80);
    const c3 = revealOnScroll(pillarsRef.current, reducedMotion, { y: 40, delay: 0.1 });
    return () => {
      c1();
      c2();
      c3();
    };
  }, [reducedMotion]);

  return (
    <section className="relative flex items-center px-6 md:px-10 py-32 overflow-hidden">
      <div
        ref={visualRef}
        className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2 w-[440px] h-[440px] opacity-50 pointer-events-none"
      >
        <LiquidChrome id="statement" variant="acid" className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full">
        <div ref={textRef} className="max-w-4xl">
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

        <div
          ref={pillarsRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-4 md:gap-6"
        >
          {PILLARS.map((p) => (
            <div
              key={p.index}
              className="group h-full bg-[var(--onyx)] border border-white/10 px-10 py-10 md:px-12 md:py-12 flex flex-col gap-6 hover:border-[var(--acid)]/50 hover:bg-white/[0.02] transition-colors"
            >
              <span className="font-display text-sm text-[var(--acid)]">
                {p.index}
              </span>
              <h3 className="font-display uppercase text-lg md:text-xl tracking-[-0.01em] text-[var(--ink)]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--chrome-3)]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
