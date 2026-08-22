'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaPlane, FaGraduationCap, FaProjectDiagram, FaBriefcase } from 'react-icons/fa';
import { cardActivationProps } from '@/lib/a11y';
import { resumeData } from '@/data/resumeData';
import CompanyWikiModal from './CompanyWikiModal';

interface SelectedCompany {
  name: string;
  role: string;
  period: string;
}

export default function Companies() {
  const [selectedCompany, setSelectedCompany] = useState<SelectedCompany | null>(null);

  return (
    <section id="companies" className="scroll-mt-24 py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Career Trajectory & Organizations
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by top global enterprises and consulting firms across Europe and Asia.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {resumeData.companies.map((comp, idx) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              {...cardActivationProps(
                () => setSelectedCompany(comp),
                `View company profile for ${comp.name}`
              )}
              className={`rounded-xl p-5 border text-center flex flex-col items-center justify-between ${comp.badgeColor} shadow-sm hover:shadow-md hover:scale-[1.03] transition-all cursor-pointer group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
            >
              <div className="p-3 bg-white rounded-full shadow-xs mb-3 text-gray-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {comp.name === 'SAS Airlines' ? (
                  <FaPlane className="w-6 h-6 text-blue-600 group-hover:text-white" />
                ) : (
                  <FaBuilding className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                )}
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                {comp.name}
              </h3>
              <p className="text-xs text-gray-600 font-medium line-clamp-2">{comp.role}</p>
              <span className="mt-2 text-[11px] px-2 py-0.5 rounded-full bg-white/80 text-gray-700 font-semibold group-hover:bg-indigo-50 group-hover:text-indigo-700">
                {comp.period}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mentorship & Impact Grid: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-600 text-white shadow-xs">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Training & Mentorship</h3>
                  <span className="text-2xl font-extrabold text-blue-700">
                    {resumeData.trainingAndFreelance.trainedCount}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {resumeData.trainingAndFreelance.trainedDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-100/80 text-xs font-semibold text-blue-800">
              Developer Enablement & Upskilling
            </div>
          </motion.div>

          {/* Freelancing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50/50 border border-purple-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-600 text-white shadow-xs">
                  <FaProjectDiagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Freelancing</h3>
                  <span className="text-2xl font-extrabold text-purple-700">
                    {resumeData.trainingAndFreelance.freelanceCount}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {resumeData.trainingAndFreelance.freelanceDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100/80 text-xs font-semibold text-purple-800">
              Global CRM & CPQ Solutions
            </div>
          </motion.div>

          {/* Industry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-xs">
                  <FaBriefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Industry Engagements</h3>
                  <span className="text-2xl font-extrabold text-emerald-700">
                    {resumeData.trainingAndFreelance.industryCount}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {resumeData.trainingAndFreelance.industryDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-100/80 text-xs font-semibold text-emerald-800">
              Telecom, Airlines & Media Scale
            </div>
          </motion.div>
        </div>
      </div>

      <CompanyWikiModal
        companyName={selectedCompany?.name ?? null}
        role={selectedCompany?.role}
        period={selectedCompany?.period}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
}
