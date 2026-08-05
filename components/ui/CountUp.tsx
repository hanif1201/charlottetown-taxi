'use client';

import { useEffect, useRef } from 'react';

export function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function run() {
      if (!el) return;
      if (reduce) {
        el.textContent = target + suffix;
        return;
      }
      const dur = 1500;
      let start: number | null = null;
      function tick(ts: number) {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        if (el) el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              run();
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      io.observe(el);
      return () => io.disconnect();
    }
    run();
  }, [target, suffix]);

  return (
    <span className="inum" ref={ref}>
      0
    </span>
  );
}
