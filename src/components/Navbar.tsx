'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { resumeData } from '@/data/resumeData';
import { SECTIONS } from '@/lib/sections';
import { useActiveSection } from '@/lib/useActiveSection';
import { useBodyScrollLock } from '@/lib/useBodyScrollLock';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);
  const activeId = useActiveSection(sectionIds);

  useBodyScrollLock(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape closes the mobile menu, matching the modals' behaviour.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {resumeData.personal.name}
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Sections" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="GitHub profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="p-2 text-gray-700 hover:text-gray-900 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-lg max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          {SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive ? 'true' : undefined}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-800 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {section.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex space-x-4">
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="GitHub profile"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
