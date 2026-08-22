'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCopy, FaCheck } from 'react-icons/fa';
import { resumeData } from '@/data/resumeData';

// Injected by next.config.js at build time (see NEXT_PUBLIC_BUILD_YEAR).
const BUILD_YEAR = process.env.NEXT_PUBLIC_BUILD_YEAR;

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  // Drop any pending "copied" reset so repeated clicks don't stack timers and
  // an unmount doesn't leave one running.
  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = window.setTimeout(() => setCopiedKey(null), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Open for enterprise architecture consulting, technical leadership roles, and high-impact Salesforce engineering engagements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 via-white to-blue-50/40 rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Email Card */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors break-all"
                  >
                    {resumeData.personal.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(resumeData.personal.email, 'email')}
                className="p-2.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition-all flex-shrink-0 ml-1"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedKey === 'email' ? (
                  <FaCheck className="w-4 h-4 text-green-600" />
                ) : (
                  <FaCopy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="flex items-center p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {resumeData.personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Profiles Card */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Social Links</p>
                <p className="text-sm font-semibold text-gray-900">Profiles</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-black rounded-lg transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-gray-200/80">
            <p className="text-xs text-gray-500">
              © {BUILD_YEAR} {resumeData.personal.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}