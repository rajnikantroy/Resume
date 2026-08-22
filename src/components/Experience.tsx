'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { resumeData } from '@/data/resumeData';
import CompanyWikiModal from './CompanyWikiModal';

/**
 * Clients that stand in for an unnamed account have no organization to look
 * up, so they are rendered as plain text instead of a dead Wikipedia link.
 */
const UNNAMED_CLIENTS = new Set(['Confidential', 'Undisclosed', 'N/A']);

function isNamedClient(client: string): boolean {
  return !UNNAMED_CLIENTS.has(client.trim());
}

interface SelectedCompany {
  name: string;
  role: string;
  period: string;
}

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState<SelectedCompany | null>(null);

  return (
    <section id="experience" className="scroll-mt-24 py-20 bg-white">
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
              Work Experience & Projects
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            11-year track record of architecting, leading, and implementing enterprise-grade Salesforce solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {resumeData.experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Top Bar: Role & Period */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {exp.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 text-sm text-gray-600 flex-wrap">
                    <button
                      onClick={() =>
                        setSelectedCompany({
                          name: exp.company,
                          role: exp.role,
                          period: exp.period,
                        })
                      }
                      type="button"
                      className="inline-flex items-center gap-1.5 font-semibold text-gray-800 hover:text-blue-600 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      title={`View ${exp.company} details`}
                    >
                      <FaBuilding className="text-blue-500" />
                      <span>{exp.company}</span>
                    </button>

                    {exp.client && (
                      <span className="text-gray-500 flex items-center gap-1">
                        Client:
                        {isNamedClient(exp.client) ? (
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedCompany({
                                name: exp.client!,
                                role: exp.role,
                                period: exp.period,
                              })
                            }
                            className="font-semibold text-gray-700 hover:text-indigo-600 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            title={`View ${exp.client} details`}
                          >
                            {exp.client}
                          </button>
                        ) : (
                          <span className="font-semibold text-gray-700">{exp.client}</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md font-medium text-gray-700">
                    <FaCalendarAlt className="text-blue-500" />
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-gray-500">
                      <FaMapMarkerAlt className="text-red-400" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <FaUsers className="text-purple-400" />
                      Team: {exp.teamSize}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100 text-gray-800 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Key Responsibilities & Deliverables
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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