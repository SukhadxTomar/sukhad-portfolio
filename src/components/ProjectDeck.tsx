import { useMemo, type CSSProperties } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useProjectDeck } from '../hooks/useProjectDeck';
import { useReducedMotion } from '../hooks/useReducedMotion';

const STACK_DEPTH = 3;

export default function ProjectDeck() {
  const reducedMotion = useReducedMotion();
  const {
    activeIndex,
    exitDirection,
    drag,
    cardRef,
    next,
    prev,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onKeyDown,
  } = useProjectDeck(projects.length);

  const stack = useMemo(() => {
    const ordered: { project: (typeof projects)[number]; depth: number }[] = [];
    for (let d = 0; d < STACK_DEPTH; d++) {
      const p = projects[(activeIndex + d) % projects.length];
      ordered.push({ project: p, depth: d });
    }
    return ordered;
  }, [activeIndex]);

  const active = projects[activeIndex];

  return (
    <section id="work" className="relative px-6 md:px-10 py-32">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold mb-4">
            // Selected work
          </p>
          <h2 className="font-display uppercase text-[clamp(2rem,6vw,4.5rem)] tracking-[-0.03em] leading-none">
            The deck
          </h2>
        </div>
        <p className="max-w-xs text-sm text-[var(--chrome-2)] hidden md:block">
          Drag a card, or use the arrow keys. Each artifact is a real, shipped system.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div
          className="relative w-full max-w-[440px] h-[520px] md:h-[560px]"
          tabIndex={0}
          role="group"
          aria-roledescription="card deck"
          aria-label={`Project ${activeIndex + 1} of ${projects.length}: ${active.title.join(' ')}`}
          onKeyDown={onKeyDown}
        >
          {stack
            .slice()
            .reverse()
            .map(({ project, depth }) => {
              const isTop = depth === 0;
              const baseRotate = depth === 1 ? -4 : depth === 2 ? 5 : 0;
              const baseScale = 1 - depth * 0.04;
              const baseY = depth * 14;

              let style: CSSProperties = {
                zIndex: STACK_DEPTH - depth,
                transform: `translate(${baseY * 0.2}px, ${baseY}px) rotate(${baseRotate}deg) scale(${baseScale})`,
                transition: reducedMotion
                  ? 'opacity 0.3s ease'
                  : 'transform 0.5s cubic-bezier(0.19,1,0.22,1)',
              };

              if (isTop) {
                const isExiting = exitDirection !== null;
                style = {
                  zIndex: STACK_DEPTH + 1,
                  transform: `translate(${drag.x}px, ${drag.y}px) rotate(${drag.rotation}deg) scale(${drag.dragging ? 1.03 : 1})`,
                  transition: drag.dragging
                    ? 'none'
                    : isExiting
                    ? 'transform 0.42s cubic-bezier(0.19,1,0.22,1)'
                    : reducedMotion
                    ? 'opacity 0.3s ease'
                    : 'transform 0.5s cubic-bezier(0.19,1,0.22,1)',
                  opacity: isExiting ? 0 : 1,
                };
              }

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  style={style}
                  isTop={isTop}
                  cardRef={isTop ? cardRef : undefined}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                />
              );
            })}
        </div>

        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="p-3 border border-white/20 hover:border-[var(--acid)] hover:text-[var(--acid)] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs tracking-[0.2em] text-[var(--chrome-2)] uppercase">
            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <button
            onClick={next}
            aria-label="Next project"
            className="p-3 border border-white/20 hover:border-[var(--acid)] hover:text-[var(--acid)] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
