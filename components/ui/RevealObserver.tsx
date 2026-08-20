'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealObserver() {
  // Lives in the root layout, which doesn't remount on client-side navigation —
  // re-run on every route change so newly-mounted pages get their .reveal
  // elements observed too, instead of only the page that was first loaded.
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal:not(.in)');

    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
