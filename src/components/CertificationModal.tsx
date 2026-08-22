'use client';

import React from 'react';
import { SiSalesforce } from 'react-icons/si';
import { FaAward, FaCogs, FaCheckCircle, FaBriefcase, FaLayerGroup } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { CertificationDetail } from '@/data/resumeData';
import FullScreenModal from './ui/FullScreenModal';

interface CertificationModalProps {
  cert: CertificationDetail | null;
  onClose: () => void;
}

export default function CertificationModal({ cert, onClose }: CertificationModalProps) {
  return (
    <FullScreenModal
      open={Boolean(cert)}
      onClose={onClose}
      closeLabel="Close"
      icon={<SiSalesforce className="w-7 h-7 text-sky-400" />}
      eyebrow={
        <>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-sky-950/80 text-sky-300 border-sky-500/30 flex items-center gap-1.5">
            <FaAward className="w-3 h-3 text-amber-400" />
            {cert?.category}
          </span>
          <span className="text-xs text-gray-400 font-medium hidden sm:inline">
            Official Salesforce Credential
          </span>
        </>
      }
      title={cert?.name}
      subtitle={cert?.badgeTitle}
      footerNote={`${cert?.keyDomains.length ?? 0} core domains • ${cert?.skillsValidated.length ?? 0} validated skills`}
    >
      {cert && (
        <>
          {/* Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider border border-blue-100">
              <HiSparkles className="text-blue-600" />
              What This Certification Signifies
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{cert.badgeTitle}</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{cert.overview}</p>
          </div>

          {/* Key domains */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2.5 text-gray-900 font-bold text-base sm:text-lg uppercase tracking-wider">
                <FaCogs className="text-purple-600" />
                <span>Curriculum &amp; Key Technical Competencies</span>
              </div>
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 self-start whitespace-nowrap">
                {cert.keyDomains.length} Core Domains
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cert.keyDomains.map((domain) => (
                <div
                  key={domain.title}
                  className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 hover:bg-white hover:border-purple-300 transition-all shadow-2xs space-y-2"
                >
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                    {domain.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{domain.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical impact */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-gray-900 font-bold text-base uppercase tracking-wider border-b border-gray-100 pb-4">
              <FaBriefcase className="text-emerald-600" />
              <span>Enterprise Practical Application &amp; Architecture</span>
            </div>
            <div className="p-4 bg-gradient-to-r from-emerald-50/70 to-teal-50/70 border border-emerald-100 rounded-2xl text-emerald-950 text-sm sm:text-base font-medium leading-relaxed">
              {cert.practicalImpact}
            </div>
          </div>

          {/* Validated skills */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-sm uppercase tracking-wider">
              <FaLayerGroup className="text-blue-600" />
              <span>Validated Skills &amp; Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {cert.skillsValidated.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 bg-gray-100 text-gray-800 text-xs sm:text-sm font-semibold rounded-xl border border-gray-200/80 shadow-2xs flex items-center gap-1.5"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </FullScreenModal>
  );
}
