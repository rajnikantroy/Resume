'use client';

import { useEffect, useState } from 'react';
import { NAV_OFFSET_PX } from './sections';

/**
 * Returns the id of the section currently under the navbar, so the nav can show
 * where the reader is on a long single-page site.
 *
 * The DOM is re-queried on each measurement rather than captured once on mount:
 * the navbar mounts alongside the sections it tracks, so anything cached at
 * mount time risks being empty.
 */
export function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;

      const present = ids.filter((id) => document.getElementById(id) !== null);

      // At the bottom of the document the final section can never reach the
      // navbar, so it would otherwise never become active.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && present.length > 0) {
        setActiveId(present[present.length - 1]);
        return;
      }

      // Otherwise the active section is the last one whose top edge has
      // scrolled past the navbar. A small tolerance absorbs sub-pixel rounding.
      let current: string | null = null;
      for (const id of present) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= NAV_OFFSET_PX + 8) current = id;
      }

      setActiveId(current);
    };

    // Coalesce bursts of scroll events into one measurement per frame.
    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids]);

  return activeId;
}
