'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiSalesforce, SiAmazon } from 'react-icons/si';
import { HiLightningBolt, HiCode } from 'react-icons/hi';
import { FaTools } from 'react-icons/fa';
import { resumeData } from '@/data/resumeData';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 bg-gray-50/60">
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
              Skills & Technical Expertise
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning Salesforce core, Industries/OmniStudio, enterprise integrations, and modern AI developer workflows.
          </p>
        </motion.div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {resumeData.skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  {idx === 0 && <SiSalesforce className="w-6 h-6" />}
                  {idx === 1 && <HiLightningBolt className="w-6 h-6" />}
                  {idx === 2 && <SiAmazon className="w-6 h-6" />}
                  {idx === 3 && <HiCode className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-gray-100/80 hover:bg-blue-50 hover:text-blue-700 text-gray-800 text-sm font-medium rounded-lg border border-gray-200/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools, DevOps & AI Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">
                <FaTools className="w-4 h-4" />
                DevOps, Tooling & Modern IDEs
              </div>
              <h3 className="text-2xl font-bold">Tools & AI-Assisted Development Stack</h3>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">
              CI/CD • SFDX • AI Co-pilots
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {resumeData.toolsAndDevOps.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium backdrop-blur-sm border border-white/15 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}