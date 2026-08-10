import { useCallback, useRef, useState } from 'react';

export interface DragState {
  x: number;
  y: number;
  rotation: number;
  dragging: boolean;
}

const EASE = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)';

export function useProjectDeck(total: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<1 | -1 | null>(null);
  const [drag, setDrag] = useState<DragState>({ x: 0, y: 0, rotation: 0, dragging: false });

  const startX = useRef(0);
  const startY = useRef(0);
  const deckWidth = useRef(600);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const activePointerId = useRef<number | null>(null);
  const gesture = useRef<'pending' | 'horizontal' | 'vertical' | null>(null);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.isPrimary || e.button !== 0) return;

    e.currentTarget.setPointerCapture(e.pointerId);
    activePointerId.current = e.pointerId;
    gesture.current = 'pending';
    startX.current = e.clientX;
    startY.current = e.clientY;
    deckWidth.current = cardRef.current?.offsetWidth ?? 600;
    setDrag({ x: 0, y: 0, rotation: 0, dragging: false });
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId || gesture.current === 'vertical') return;

    setDrag((d) => {
      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;

      if (gesture.current === 'pending') {
        if (Math.max(Math.abs(dx), Math.abs(dy)) < 6) return d;
        gesture.current = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
        if (gesture.current === 'vertical') return { x: 0, y: 0, rotation: 0, dragging: false };
      }

      const rotation = (dx / deckWidth.current) * 22;
      return { x: dx, y: dy * 0.3, rotation, dragging: true };
    });
  }, []);

  const resetPointer = useCallback(() => {
    activePointerId.current = null;
    gesture.current = null;
    setDrag({ x: 0, y: 0, rotation: 0, dragging: false });
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;
    const wasHorizontal = gesture.current === 'horizontal';
    activePointerId.current = null;
    gesture.current = null;

    if (!wasHorizontal) {
      setDrag({ x: 0, y: 0, rotation: 0, dragging: false });
      return;
    }

    setDrag((d) => {
      if (!d.dragging) return { x: 0, y: 0, rotation: 0, dragging: false };
      const threshold = deckWidth.current * 0.1;
      if (Math.abs(d.x) > threshold) {
        const dir: 1 | -1 = d.x > 0 ? 1 : -1;
        setExitDirection(dir);
        setTimeout(() => {
          setExitDirection(null);
          setActiveIndex((i) => (i + 1) % total);
          setDrag({ x: 0, y: 0, rotation: 0, dragging: false });
        }, 420);
        return { x: dir * deckWidth.current * 1.6, y: -80, rotation: dir * 35, dragging: false };
      }
      return { x: 0, y: 0, rotation: 0, dragging: false };
    });
  }, [total]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    },
    [next, prev]
  );

  return {
    activeIndex,
    setActiveIndex,
    exitDirection,
    drag,
    cardRef,
    next,
    prev,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel: resetPointer,
    onKeyDown,
    EASE,
  };
}
