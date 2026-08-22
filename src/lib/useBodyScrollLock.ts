'use client';

import { useEffect } from 'react';

/**
 * Locks background scrolling while an overlay is open.
 *
 * The lock is reference counted at module scope and restores whatever value
 * `body.overflow` had before the first lock. Without this, two overlays that
 * overlap would leave the page unscrollable (or unlock it too early), and the
 * previous inline value would be clobbered with a hardcoded default.
 */
let lockCount = 0;
let restoreOverflow = '';

export function useBodyScrollLock(active: boolean): void {
  useEffect(() => {
    if (!active) return;

    if (lockCount === 0) {
      restoreOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        document.body.style.overflow = restoreOverflow;
      }
    };
  }, [active]);
}
