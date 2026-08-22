'use client';

import React, { useEffect, useState } from 'react';
import { HiChevronUp } from 'react-icons/hi';

/**
 * Appears once the reader is well past the hero, giving a one-click way back
 * to the top of a long single-page site.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-gray-900/90 text-white shadow-lg backdrop-blur-sm hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <HiChevronUp className="w-5 h-5" />
    </a>
  );
}
