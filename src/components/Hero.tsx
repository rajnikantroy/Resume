'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { resumeData } from '@/data/resumeData';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-pattern px-4">
      {/* Background subtle gradient ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              {resumeData.personal.name}
            </span>
          </h1>

          {/* Title */}
          <p className="text-2xl sm:text-3xl font-semibold text-gray-700 tracking-tight">
            {resumeData.personal.role}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <a
              href="#experience"
              className="px-7 py-3 rounded-full text-white font-medium text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-medium text-base text-gray-700 bg-white border border-gray-300 hover:border-blue-600 hover:text-blue-600 shadow-xs transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 0.8, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center gap-1">
          <span className="text-[11px] font-medium tracking-wider uppercase text-gray-400">Scroll</span>
          <HiChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}