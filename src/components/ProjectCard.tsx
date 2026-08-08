import { ArrowUpRight, Code2 } from 'lucide-react';
import type { Project } from '../data/projects';
import type { CSSProperties } from 'react';

interface ProjectCardProps {
  project: Project;
  style: CSSProperties;
  isTop: boolean;
  onPointerDown?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp?: (e: React.PointerEvent<HTMLDivElement>) => void;
  cardRef?: React.Ref<HTMLDivElement>;
}

export default function ProjectCard({
  project,
  style,
  isTop,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  cardRef,
}: ProjectCardProps) {
  return (
    <div
      ref={cardRef}
      style={{ ...style, touchAction: 'pan-y' }}
      onPointerDown={isTop ? onPointerDown : undefined}
      onPointerMove={isTop ? onPointerMove : undefined}
      onPointerUp={isTop ? onPointerUp : undefined}
      onPointerCancel={isTop ? onPointerUp : undefined}
      className={`absolute inset-0 select-none ${isTop ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
    >
      <div className="relative h-full w-full bg-[var(--onyx)] border border-white/15 p-7 md:p-9 flex flex-col overflow-hidden">
        {/* thin technical corner marks */}
        <span className="absolute top-4 left-4 w-3 h-3 border-l border-t border-[var(--acid)]/60" aria-hidden="true" />
        <span className="absolute bottom-4 right-4 w-3 h-3 border-r border-b border-[var(--acid)]/60" aria-hidden="true" />

        {/* ── META ROW: index + category ── */}
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-2xl md:text-[1.75rem] leading-none outline-text">
            {project.index}
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[var(--cyan)] border border-[var(--cyan)]/50 px-2.5 py-1 text-right">
            {project.category}
          </span>
        </div>

        {/* ── TITLE: the dominant element ── */}
        <h3 className="mt-5 font-display uppercase text-[clamp(2.6rem,8.5vw,4rem)] leading-[0.9] tracking-[-0.03em] text-[var(--ink)]">
          {project.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        {/* ── STACK ── */}
        <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] tracking-[0.1em] text-[var(--acid)] font-medium border border-[var(--acid)]/25 px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ── DESCRIPTION ── */}
        <ul className="mt-6 space-y-2.5">
          {project.description.slice(0, 2).map((d, i) => (
            <li
              key={i}
              className="text-[13px] leading-relaxed text-[var(--chrome-3)] pl-3 border-l border-white/10"
            >
              {d}
            </li>
          ))}
        </ul>

        {/* ── ACTIONS (pinned to bottom) ── */}
        <div className="mt-auto flex gap-6 hairline pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isTop ? 0 : -1}
            className="flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-[var(--ink)] hover:text-[var(--acid)] transition-colors"
            aria-label={`View ${project.title.join(' ')} on GitHub`}
          >
            <Code2 size={14} /> GitHub
          </a>
          <span className="flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-[var(--chrome-2)]">
            <ArrowUpRight size={14} /> View Project
          </span>
        </div>
      </div>
    </div>
  );
}
