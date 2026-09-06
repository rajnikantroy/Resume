'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaAward,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaChrome,
  FaShieldAlt,
  FaCogs,
  FaLayerGroup,
} from 'react-icons/fa';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';
import { resumeData, Innovation } from '@/data/resumeData';
import { cardActivationProps } from '@/lib/a11y';
import FullScreenModal from './ui/FullScreenModal';

type FilterType = 'All' | 'Chrome Extension' | 'Android App' | 'US Patent';

const FILTERS: FilterType[] = ['All', 'Chrome Extension', 'Android App', 'US Patent'];

const FILTER_LABELS: Record<FilterType, string> = {
  All: 'All',
  'Chrome Extension': 'Chrome Extensions',
  'Android App': 'Android Apps',
  'US Patent': 'US Patent',
};

function typeIcon(type: Innovation['type'], className: string) {
  if (type === 'US Patent') return <FaAward className={className} />;
  if (type === 'Chrome Extension') return <FaChrome className={className} />;
  return <FaGooglePlay className={className} />;
}

function linkLabel(type: Innovation['type']) {
  if (type === 'Chrome Extension') return 'Read Live Chrome Web Store';
  if (type === 'US Patent') return 'View on Google Patents';
  return 'View on Google Play';
}

export default function Achievements() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [selectedApp, setSelectedApp] = useState<Innovation | null>(null);

  const filteredInnovations =
    filter === 'All'
      ? resumeData.innovations
      : resumeData.innovations.filter((item) => item.type === filter);

  const details = selectedApp?.details;

  return (
    <section id="innovations" className="scroll-mt-24 py-20 bg-gray-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HiSparkles className="text-blue-600" />
            Patents, Extensions &amp; Apps
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Innovations &amp; Independent Engineering
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Developer tools, Chrome extensions with active users, Android applications, and patented
            code quality systems. Select any card to explore its architecture and specifications.
          </p>
        </motion.div>

        {/* Filters */}
        <div
          role="tablist"
          aria-label="Filter innovations by type"
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {FILTERS.map((tab) => {
            const count =
              tab === 'All'
                ? resumeData.innovations.length
                : resumeData.innovations.filter((i) => i.type === tab).length;
            const isActive = filter === tab;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {FILTER_LABELS[tab]}{' '}
                <span
                  className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredInnovations.map((item) => {
              const isExpandable = Boolean(item.details);

              return (
                <motion.div
                  layout
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  {...(isExpandable
                    ? cardActivationProps(() => setSelectedApp(item), `View details for ${item.title}`)
                    : {})}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm transition-all flex flex-col justify-between group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                    isExpandable
                      ? 'cursor-pointer hover:shadow-md hover:border-blue-400 hover:ring-2 hover:ring-blue-500/20'
                      : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`p-2 rounded-lg ${
                            item.type === 'US Patent'
                              ? 'bg-amber-50 text-amber-600'
                              : item.type === 'Chrome Extension'
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-emerald-50 text-emerald-600'
                          }`}
                        >
                          {typeIcon(item.type, 'w-5 h-5')}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          {item.type}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          item.type === 'Android App'
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {item.dateOrNumber}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 text-xs text-gray-400 font-medium">
                      <span className="text-blue-600 font-semibold">
                        {isExpandable ? 'View architecture & features' : 'Enterprise innovation'}
                      </span>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-lg border border-gray-200 transition-all"
                          aria-label={`Open ${item.title} on ${linkLabel(item.type)}`}
                        >
                          <span>
                            {item.type === 'US Patent'
                              ? 'Patent'
                              : item.type === 'Android App'
                              ? 'App'
                              : 'Store'}
                          </span>
                          <FaExternalLinkAlt className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail modal */}
      <FullScreenModal
        open={Boolean(selectedApp && details)}
        onClose={() => setSelectedApp(null)}
        closeLabel="Close Specification"
        icon={
          selectedApp
            ? typeIcon(
                selectedApp.type,
                `w-6 h-6 ${
                  selectedApp.type === 'US Patent'
                    ? 'text-amber-400'
                    : selectedApp.type === 'Chrome Extension'
                    ? 'text-blue-400'
                    : 'text-emerald-400'
                }`
              )
            : null
        }
        eyebrow={
          selectedApp && (
            <>
              <span
                className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                  selectedApp.type === 'US Patent'
                    ? 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                    : selectedApp.type === 'Chrome Extension'
                    ? 'bg-blue-950/80 text-blue-300 border-blue-500/30'
                    : 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30'
                }`}
              >
                {selectedApp.type}
              </span>
              <span className="text-xs text-gray-400 font-medium">{selectedApp.dateOrNumber}</span>
            </>
          )
        }
        title={selectedApp?.title}
        subtitle={details?.tagline}
        headerActions={
          selectedApp?.link ? (
            <a
              href={selectedApp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold tracking-wider transition-all shadow-xs"
            >
              <span>{linkLabel(selectedApp.type)}</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          ) : null
        }
        footerNote={`Engineered & built by ${resumeData.personal.name}`}
        footerActions={
          selectedApp?.link ? (
            <a
              href={selectedApp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold"
            >
              <span>{linkLabel(selectedApp.type)}</span>
              <FaExternalLinkAlt className="w-2.5 h-2.5" />
            </a>
          ) : null
        }
      >
        {details && (
          <>
            {/* Live Chrome Web Store / Patent Link Banner Card */}
            {selectedApp?.link && (
              <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-white p-6 sm:p-7 rounded-3xl border border-blue-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-xs shrink-0 mt-0.5">
                    {selectedApp.type === 'Chrome Extension' ? (
                      <FaChrome className="w-6 h-6" />
                    ) : selectedApp.type === 'US Patent' ? (
                      <FaAward className="w-6 h-6 text-amber-300" />
                    ) : (
                      <FaGooglePlay className="w-6 h-6 text-emerald-300" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        {selectedApp.type === 'Chrome Extension'
                          ? 'Official Chrome Extension'
                          : selectedApp.type === 'US Patent'
                          ? 'Granted US Patent'
                          : 'Android Mobile App'}
                      </span>
                      <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {selectedApp.type === 'Chrome Extension'
                          ? 'Live on Chrome Web Store'
                          : selectedApp.type === 'US Patent'
                          ? 'Live on Google Patents'
                          : 'Live on Google Play'}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">
                      {selectedApp.title} — {selectedApp.type === 'Chrome Extension' ? 'Google Chrome Web Store' : selectedApp.type === 'US Patent' ? 'USPTO Patent Publication' : 'Google Play Store'}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                      {selectedApp.type === 'Chrome Extension'
                        ? 'Published and actively maintained on the Google Chrome Web Store. Read live user reviews, inspect permissions, and install directly to your browser.'
                        : selectedApp.type === 'US Patent'
                        ? 'Official patent documentation granted by the United States Patent and Trademark Office. View full patent claims, diagrams, and legal specifications.'
                        : 'Published on Google Play. Inspect live Android device capabilities, permissions, and release notes.'}
                    </p>
                  </div>
                </div>

                <a
                  href={selectedApp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all shrink-0 self-start md:self-center"
                >
                  {selectedApp.type === 'Chrome Extension' ? (
                    <FaChrome className="w-4 h-4" />
                  ) : (
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  )}
                  <span>{selectedApp.type === 'Chrome Extension' ? 'Read Live Web Store Page' : linkLabel(selectedApp.type)}</span>
                  <FaExternalLinkAlt className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            )}

            {/* Ongoing Development Banner for Android Apps */}
            {selectedApp?.type === 'Android App' && (
              <div className="bg-gradient-to-r from-amber-50/90 via-emerald-50/40 to-white p-6 sm:p-7 rounded-3xl border border-amber-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-xs shrink-0 mt-0.5">
                    <FaGooglePlay className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        Native Android Application
                      </span>
                      <span className="text-xs text-amber-800 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        Ongoing Development • Not Published Yet
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">
                      {selectedApp.title} — Active Pre-Release Engineering
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                      This project is currently in ongoing active development and private build testing. It is not yet published on public app stores. Complete system architecture, native modules, and capabilities are specified below.
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-2xl bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold shrink-0 self-start md:self-center">
                  Pre-Release Build
                </div>
              </div>
            )}

            {/* Architecture */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-gray-900 font-bold text-sm uppercase tracking-wider">
                <FaLayerGroup className="text-blue-600" />
                <span>System Architecture &amp; Technologies</span>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl text-blue-950 text-base font-semibold">
                {details.architecture}
              </div>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {details.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-gray-100 text-gray-800 text-xs sm:text-sm font-semibold rounded-xl border border-gray-200/80 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-base sm:text-lg uppercase tracking-wider">
                  <FaCogs className="text-purple-600" />
                  <span>Key Features &amp; Engineering Modules</span>
                </div>
                {details.featureCategories && (
                  <span className="text-xs sm:text-sm font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 self-start whitespace-nowrap">
                    {details.featureCategories.reduce((acc, cat) => acc + cat.items.length, 0)} Core
                    Capabilities
                  </span>
                )}
              </div>

              {details.featureCategories ? (
                <div className="space-y-8">
                  {details.featureCategories.map((catGroup) => (
                    <div key={catGroup.category} className="space-y-4">
                      <h4 className="text-sm font-extrabold uppercase tracking-wider text-gray-800 bg-gray-100/90 px-4 py-2 rounded-xl border border-gray-200/80 inline-flex items-center gap-2 shadow-2xs">
                        {catGroup.category}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {catGroup.items.map((feat) => (
                          <div
                            key={feat.title}
                            className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 hover:bg-white hover:border-purple-300 transition-all shadow-2xs flex flex-col justify-start"
                          >
                            <h5 className="text-sm font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                              {feat.title}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed">{feat.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {details.coreFeatures.map((feat) => (
                    <div
                      key={feat.title}
                      className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 hover:bg-white hover:border-purple-300 transition-all shadow-2xs"
                    >
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Security */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-gray-900 font-bold text-base uppercase tracking-wider border-b border-gray-100 pb-4">
                <FaShieldAlt className="text-emerald-600" />
                <span>Security, Cryptography &amp; Privacy Model</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {details.securityAndPrivacy.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-emerald-950 text-xs sm:text-sm leading-relaxed shadow-2xs"
                  >
                    <HiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {details.systemHighlights && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
                <div className="text-gray-900 font-bold text-sm uppercase tracking-wider">
                  Engineering &amp; Protocol Highlights
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 list-disc list-inside bg-gray-50 p-5 rounded-2xl border border-gray-200/80">
                  {details.systemHighlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </FullScreenModal>
    </section>
  );
}
