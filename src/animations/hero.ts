import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface HeroRefs {
  section: HTMLElement;
  sukhad: HTMLElement;
  tomar: HTMLElement;
  meta: HTMLElement;
  liquid: HTMLElement;
  dotA: HTMLElement;
  dotB: HTMLElement;
}

export function buildHeroScroll(refs: HeroRefs, reducedMotion: boolean) {
  if (reducedMotion) {
    // Static, intentional composition — no scroll-bound distortion.
    gsap.set(refs.sukhad, { xPercent: 0 });
    gsap.set(refs.tomar, { xPercent: 0 });
    return () => {};
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.section,
      start: 'top top',
      end: '+=700',
      scrub: 0.6,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.to(refs.sukhad, { xPercent: -18, letterSpacing: '-0.06em', scale: 1.12, ease: 'none' }, 0)
    .to(refs.tomar, { xPercent: 18, letterSpacing: '-0.06em', scale: 1.12, ease: 'none' }, 0)
    .to(refs.meta, { xPercent: -40, opacity: 0.4, ease: 'none' }, 0)
    .to(refs.liquid, { scale: 1.4, rotate: 25, opacity: 0.85, ease: 'none' }, 0)
    .to(refs.dotA, { x: -160, y: -60, ease: 'none' }, 0)
    .to(refs.dotB, { x: 160, y: 60, ease: 'none' }, 0)
    .to(refs.section, { opacity: 0.94, ease: 'none' }, 0.7);

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
}
