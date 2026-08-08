interface MarqueeProps {
  words: string[];
}

export default function Marquee({ words }: MarqueeProps) {
  const content = words.join('  //  ') + '  //  ';

  return (
    <div
      className="w-full overflow-hidden border-y border-white/10 bg-[var(--onyx)] py-2.5 no-scrollbar"
      aria-hidden="true"
    >
      <div className="marquee-track">
        <span className="font-display text-sm tracking-[0.2em] text-[var(--acid)] uppercase whitespace-nowrap pr-8">
          {content}
        </span>
        <span className="font-display text-sm tracking-[0.2em] text-[var(--acid)] uppercase whitespace-nowrap pr-8">
          {content}
        </span>
      </div>
    </div>
  );
}
