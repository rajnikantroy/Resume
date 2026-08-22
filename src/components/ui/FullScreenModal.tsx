'use client';

import React, { useCallback, useEffect, useId, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useBodyScrollLock } from '@/lib/useBodyScrollLock';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

interface FullScreenModalProps {
  open: boolean;
  onClose: () => void;
  /** Small badge row rendered above the title. */
  eyebrow?: React.ReactNode;
  /** Icon shown at the left of the header on >= sm screens. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Extra buttons/links placed left of the close controls. */
  headerActions?: React.ReactNode;
  footerNote?: React.ReactNode;
  footerActions?: React.ReactNode;
  closeLabel?: string;
  children: React.ReactNode;
}

/**
 * The full-screen dialog chrome shared by the company, certification and
 * innovation modals.
 *
 * Centralising it means Escape handling, body scroll locking, focus trapping
 * and focus restoration exist once instead of being re-implemented (and
 * drifting) in each modal.
 */
export default function FullScreenModal({
  open,
  onClose,
  eyebrow,
  icon,
  title,
  subtitle,
  headerActions,
  footerNote,
  footerActions,
  closeLabel = 'Close',
  children,
}: FullScreenModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useBodyScrollLock(open);

  // Remember what had focus before opening, and hand focus to the dialog.
  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    return () => {
      restoreFocusRef.current?.focus?.();
    };
  }, [open]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      // Keep Tab inside the dialog rather than letting it walk the page behind.
      const focusable = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? []
      ).filter((el) => el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          // AnimatePresence tracks children by key; without one it can leave the
          // exited node mounted at opacity 0, covering the page with an
          // invisible click-blocking overlay.
          key="fullscreen-modal"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-white flex flex-col w-screen h-[100dvh] overflow-hidden outline-none"
        >
          {/* Sticky header */}
          <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-indigo-950 text-white px-6 sm:px-10 py-5 border-b border-gray-800 flex items-center justify-between gap-4 shadow-lg shrink-0">
            <div className="flex items-center gap-4 min-w-0">
              {icon && (
                <div className="p-3 rounded-2xl bg-white/10 text-white backdrop-blur-md hidden sm:flex shrink-0">
                  {icon}
                </div>
              )}
              <div className="min-w-0">
                {eyebrow && <div className="flex items-center gap-2 mb-1 flex-wrap">{eyebrow}</div>}
                <h2 id={titleId} className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {title}
                </h2>
                {subtitle && (
                  <div className="text-gray-300 text-xs sm:text-sm font-medium mt-0.5">{subtitle}</div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {headerActions}
              <button
                type="button"
                onClick={onClose}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold tracking-wider text-gray-200 hover:text-white transition-all border border-white/10"
              >
                <span>ESC to Exit</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-3 text-gray-300 hover:text-white bg-white/10 hover:bg-red-500/80 rounded-xl transition-all shadow-xs"
                aria-label="Close dialog"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 space-y-10">{children}</div>
          </div>

          {/* Sticky footer */}
          <div className="bg-white border-t border-gray-200 px-6 sm:px-10 py-4 flex items-center justify-between gap-4 shrink-0 shadow-xs">
            <span className="text-xs sm:text-sm text-gray-500 font-medium">{footerNote}</span>
            <div className="flex items-center gap-3">
              {footerActions}
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-sm"
              >
                {closeLabel}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
