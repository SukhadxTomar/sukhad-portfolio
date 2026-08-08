import { useEffect } from 'react';
import Lenis from 'lenis';
import NoiseOverlay from './components/NoiseOverlay';
import Marquee from './components/Marquee';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Statement from './components/Statement';
import ProjectDeck from './components/ProjectDeck';
import Capabilities from './components/Capabilities';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { useReducedMotion } from './hooks/useReducedMotion';
import { marqueeWords } from './data/skills';

function App() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return (
    <div className="relative">
      <NoiseOverlay />
      <Navigation />
      <main>
        <Hero />
        <Marquee words={marqueeWords} />
        <Statement />
        <ProjectDeck />
        <Capabilities />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;
