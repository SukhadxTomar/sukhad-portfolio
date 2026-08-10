import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import NoiseOverlay from './NoiseOverlay';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--void)]">
      <NoiseOverlay />
      <main className="relative z-10 px-6 md:px-10 py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[var(--chrome-2)] hover:text-[var(--acid)] transition-colors"
          >
            <ArrowLeft size={15} /> Back
          </Link>

          <header className="mt-16 md:mt-24 pb-14 md:pb-20 border-b border-white/10">
            <div className="flex items-center gap-4 text-xs tracking-[0.22em] uppercase text-[var(--acid)]">
              <span className="font-display text-base">{project.index}</span>
              <span>{project.category}</span>
            </div>
            <h1 className="mt-7 font-display uppercase text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.82] tracking-[-0.05em]">
              {project.title.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
            <p className="mt-10 max-w-3xl text-lg md:text-xl leading-relaxed text-[var(--chrome-3)]">
              {project.overview}
            </p>
          </header>

          <section className="py-16 md:py-24 grid gap-8 md:grid-cols-[0.7fr_1.3fr] border-b border-white/10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold">// The problem</p>
            <p className="max-w-3xl text-base md:text-lg leading-relaxed text-[var(--chrome-3)]">{project.problem}</p>
          </section>

          <section className="py-16 md:py-24 border-b border-white/10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold">// Architecture</p>
            <p className="mt-8 max-w-4xl text-base md:text-lg leading-relaxed text-[var(--chrome-3)]">
              {project.architecture.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {project.architecture.stack.map((technology) => (
                <span key={technology} className="bg-[var(--onyx)] border border-white/10 px-3 py-2 text-xs text-[var(--chrome-2)] hover:border-[var(--acid)] hover:text-[var(--acid)] transition-colors">
                  {technology}
                </span>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-24">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--pink)] font-semibold">// Key features</p>
            <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {project.keyFeatures.map((feature, index) => (
                <article key={feature.title} className="bg-[var(--onyx)] border border-white/10 px-8 py-9 md:px-10 md:py-11 hover:border-[var(--acid)]/50 hover:bg-white/[0.02] transition-colors">
                  <span className="font-display text-sm text-[var(--acid)]">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="mt-6 font-display uppercase text-xl tracking-[-0.02em]">{feature.title}</h2>
                  <p className="mt-6 text-sm leading-relaxed text-[var(--chrome-3)]">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16 md:mb-24 border border-[var(--acid)]/30 border-l-4 border-l-[var(--acid)] bg-[var(--acid)]/[0.035] px-7 py-9 md:px-10 md:py-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--acid)] font-semibold">// What makes this different</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {project.whatMakesItDifferent.map((point) => (
                <p key={point} className="border-t border-white/10 pt-4 text-sm leading-relaxed text-[var(--chrome-3)]">{point}</p>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-4 pb-12">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs tracking-[0.16em] uppercase hover:border-[var(--acid)] hover:text-[var(--acid)] transition-colors">
              <Code2 size={16} /> GitHub <ArrowUpRight size={14} />
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--acid)] bg-[var(--acid)] px-5 py-3 text-xs tracking-[0.16em] uppercase text-black hover:bg-transparent hover:text-[var(--acid)] transition-colors">
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
