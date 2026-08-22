'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';

/**
 * Honours the OS "reduce motion" setting across every framer-motion animation
 * on the page. CSS media queries cannot do this on their own because the
 * animations are driven by inline styles from JavaScript.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
