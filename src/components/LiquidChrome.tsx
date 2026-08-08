interface LiquidChromeProps {
  className?: string;
  variant?: 'acid' | 'chrome' | 'cyan';
  id: string;
}

/**
 * A physical-feeling liquid/chrome organic form built from an SVG turbulence
 * displacement filter applied to a warped blob path, rather than a blurred
 * neon circle. Colors are driven by CSS variables so the component stays
 * theme-consistent.
 */
export default function LiquidChrome({ className = '', variant = 'chrome', id }: LiquidChromeProps) {
  const fillId = `liquid-fill-${id}`;
  const filterId = `liquid-filter-${id}`;

  const stops: Record<string, string[]> = {
    acid: ['#CCFF00', '#8a9e00', '#111111'],
    chrome: ['#ffffff', '#888888', '#111111'],
    cyan: ['#00f0ff', '#006b73', '#0a0a0a'],
  };

  const [c1, c2, c3] = stops[variant];

  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={fillId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="45%" stopColor={c2} />
          <stop offset="100%" stopColor={c3} />
        </radialGradient>
        <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="7"
            result="turb"
          />
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="60" />
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <path
        d="M250,60 C340,50 420,110 440,200 C460,290 410,380 320,420 C230,460 120,430 80,350 C40,270 60,170 130,110 C170,75 205,65 250,60 Z"
        fill={`url(#${fillId})`}
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}
