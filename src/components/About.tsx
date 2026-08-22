'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiUserGroup, HiLocationMarker, HiBadgeCheck } from 'react-icons/hi';
import { SiSalesforce } from 'react-icons/si';
import { resumeData } from '@/data/resumeData';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Salesforce Industries Senior Architect • LTM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            11+ years of Salesforce enterprise leadership, architecture, and engineering excellence across Telecom, Media, and Airlines domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-200/80 shadow-sm space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap pb-2 border-b border-gray-200/60">
                <span className="px-3 py-1 bg-blue-100/80 text-blue-800 text-xs font-semibold rounded-full flex items-center gap-1.5">
                  <SiSalesforce className="w-3.5 h-3.5" />
                  13x Salesforce Certified
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full flex items-center gap-1.5">
                  <HiLocationMarker className="text-red-500 w-3.5 h-3.5" />
                  {resumeData.personal.location}
                </span>
                <span className="px-3 py-1 bg-purple-100/80 text-purple-800 text-xs font-semibold rounded-full">
                  11+ Years Experience
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Salesforce Technical Architect & Engineering Leader
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With <strong>11+ years of hands-on experience</strong> in Salesforce development, leadership, and architecture, I have spearheaded large-scale digital transformations across the <strong>telecom, media, and airlines</strong> domains.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently serving as a <strong>Salesforce Industries Senior Architect with LTM</strong> in India and previously as a <strong>Salesforce Industries Architect and Lead Developer with SAS Airlines</strong>, I specialize in architecting scalable solutions with <strong>Salesforce Industries (Vlocity), OmniStudio, CPQ API, Service & Media Clouds</strong>, and mission-critical cloud integrations (AWS, Amazon Connect, MuleSoft IDP, APIGEE).
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-xs mt-2">
              <p className="text-gray-800 italic text-sm sm:text-base leading-relaxed">
                &ldquo;As a Team Lead and Architect, I work closely with BAs and business stakeholders to analyze future requirements and provide technical solutions. I identify the impact of new functionalities on existing systems and collaborate with cross-functional teams to ensure high-velocity, timely delivery.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Highlights Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col justify-between"
          >
            {/* Certifications */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <HiBadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Credentials</h4>
                  <p className="text-base font-bold text-gray-900 mt-1">13x Salesforce Certified</p>
                  <p className="text-sm text-gray-600">OmniStudio, CPQ, Developer & Consultant</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <HiAcademicCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Education</h4>
                  <p className="text-base font-bold text-gray-900 mt-1">{resumeData.personal.education.degree}</p>
                  <p className="text-sm text-gray-600">{resumeData.personal.education.institution}</p>
                </div>
              </div>
            </div>

            {/* Location & Base */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                  <HiLocationMarker className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Location & Base</h4>
                  <p className="text-base font-bold text-gray-900 mt-1">Pune, India</p>
                  <p className="text-sm text-gray-600">Available for global & enterprise delivery</p>
                </div>
              </div>
            </div>

            {/* Mentorship & Impact */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                  <HiUserGroup className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Mentorship & Impact</h4>
                  <p className="text-base font-bold text-gray-900 mt-1">110+ Trained • 37+ Projects</p>
                  <p className="text-sm text-gray-600">Enterprise consulting & developer enablement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}