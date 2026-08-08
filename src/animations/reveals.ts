import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function revealOnScroll(
  el: Element | null,
  reducedMotion: boolean,
  opts: { y?: number; delay?: number } = {}
) {
  if (!el) return () => {};

  if (reducedMotion) {
    gsap.set(el, { opacity: 1, y: 0 });
    return () => {};
  }

  gsap.set(el, { opacity: 0, y: opts.y ?? 40 });

  const anim = gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1.1,
    delay: opts.delay ?? 0,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      once: true,
    },
  });

  return () => {
    anim.scrollTrigger?.kill();
    anim.kill();
  };
}

export function parallax(el: Element | null, reducedMotion: boolean, amount = 60) {
  if (!el || reducedMotion) return () => {};

  const anim = gsap.to(el, {
    y: amount,
    ease: 'none',
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  return () => {
    anim.scrollTrigger?.kill();
    anim.kill();
  };
}
