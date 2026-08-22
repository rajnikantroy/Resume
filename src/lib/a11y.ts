import type { KeyboardEvent } from 'react';

/**
 * Props that turn a non-semantic clickable card into something a keyboard and
 * a screen reader can actually use. Cards using `onClick` alone are invisible
 * to Tab navigation.
 */
export function cardActivationProps(onActivate: () => void, label: string) {
  return {
    role: 'button' as const,
    tabIndex: 0,
    'aria-label': label,
    onClick: onActivate,
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onActivate();
      }
    },
  };
}
