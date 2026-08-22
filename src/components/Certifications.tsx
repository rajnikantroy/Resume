'use client';

import React, { useState } from 'react';
import { SiSalesforce } from 'react-icons/si';
import { FaAward } from 'react-icons/fa';
import { resumeData, CertificationDetail } from '@/data/resumeData';
import { cardActivationProps } from '@/lib/a11y';
import CertificationModal from './CertificationModal';

type CertCategory =
  | 'All'
  | 'OmniStudio & Industries'
  | 'Developer & Architecture'
  | 'Consultant & Cloud Strategy'
  | 'Administrator & Builder'
  | 'Analytics & Marketing';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationDetail | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CertCategory>('All');

  const categories: CertCategory[] = [
    'All',
    'OmniStudio & Industries',
    'Developer & Architecture',
    'Consultant & Cloud Strategy',
    'Administrator & Builder',
    'Analytics & Marketing',
  ];

  const filteredCerts =
    selectedCategory === 'All'
      ? resumeData.certificationDetails
      : resumeData.certificationDetails.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="scroll-mt-24 py-20 bg-gray-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <FaAward className="text-amber-600" />
            13x Certified Professional
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Professional Certifications
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive credentials covering Salesforce Architecture, OmniStudio, Industries CPQ, Core Platform Developer, and Cloud Consultant tracks.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? resumeData.certificationDetails.length
                : resumeData.certificationDetails.filter((c) => c.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}{' '}
                <span
                  className={`ml-1 text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certifications Grid - Static clean layout without jumpy animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.name}
              {...cardActivationProps(
                () => setSelectedCert(cert),
                `View details for ${cert.name}`
              )}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <SiSalesforce className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-100">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium line-clamp-2 mb-4">
                  {cert.badgeTitle}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <span className="text-blue-600 font-semibold">Verified Salesforce Credential</span>
                <span>{cert.keyDomains.length} Core Domains</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
