import { useEffect, useRef } from 'react';
import { capabilities, stackList, type Skill, type SkillCategory } from '../data/skills';
import { revealOnScroll } from '../animations/reveals';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Capabilities() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return revealOnScroll(wrapRef.current, reducedMotion, { y: 30 });
  }, [reducedMotion]);

  const categoryOrder: SkillCategory[] = [
    'Agentic & LLM Orchestration',
    'Backend & Infra',
    'Data & ML',
    'Retrieval & Databases',
  ];

  const renderSkillGroup = (skills: Skill[]) => categoryOrder.map((category) => {
    const categorySkills = skills.filter((skill) => skill.category === category);
    if (!categorySkills.length) return null;

    return (
      <div key={category}>
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold mb-4">
          {category}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {categorySkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex min-w-0 items-center gap-2.5 bg-[var(--onyx)] border border-white/10 px-3 py-3 hover:border-[var(--acid)] hover:bg-[var(--acid)]/[0.03] transition-colors duration-300"
              >
                <Icon size={16} aria-hidden="true" className="shrink-0 text-[var(--chrome-2)] group-hover:text-[var(--acid)] transition-colors duration-300" />
                <span className="min-w-0 text-xs leading-tight text-[var(--chrome-2)] group-hover:text-[var(--ink)] transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

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

        <div className="mt-12 space-y-10">
          <div>
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="font-display uppercase tracking-[0.08em] text-base text-[var(--ink)]">
                Verified project stack
              </h3>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[var(--acid)] border border-[var(--acid)]/30 px-2 py-0.5">
                verified
              </span>
            </div>
            <div className="space-y-8">
              {renderSkillGroup(stackList.filter((skill) => skill.verified))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 opacity-80">
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="font-display uppercase tracking-[0.08em] text-base text-[var(--chrome-2)]">
                Ecosystem I work with
              </h3>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[var(--chrome-3)] border border-white/15 px-2 py-0.5">
                ecosystem
              </span>
            </div>
            <div className="space-y-8">
              {renderSkillGroup(stackList.filter((skill) => !skill.verified))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
