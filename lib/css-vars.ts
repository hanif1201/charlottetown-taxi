import type { CSSProperties } from 'react';

/** Sets the `--d` custom property read by the `.fade`/`.reveal` stagger animations. */
export function delayVar(d: string): CSSProperties {
  return { '--d': d } as CSSProperties;
}

/** Sets the `--pd` custom property read by the island map pin stagger animation. */
export function pinDelayVar(d: string): CSSProperties {
  return { '--pd': d } as CSSProperties;
}
