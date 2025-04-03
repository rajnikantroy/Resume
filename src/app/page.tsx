'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPlane, FaBuilding, FaGlobe, FaRobot, FaBrain, FaCloud, FaMicrosoft } from 'react-icons/fa';
import { HiAcademicCap, HiBriefcase, HiCode, HiLightningBolt, HiChip } from 'react-icons/hi';
import { SiSalesforce, SiVerizon, SiOpenai, SiReplit, SiVercel, SiAmazon, SiNetlify, SiHeroku, SiGooglecloud, SiDigitalocean, SiDocker, SiKubernetes, SiGithubactions, SiJenkins, SiTerraform, SiGitlab } from 'react-icons/si';
import React from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-pattern">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 gradient-text">
            Rajni Kant Roy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Salesforce Senior Developer | Team Lead | Architect
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="https://github.com/rajnikantroy" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors animate-fade-in"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link 
              href="https://linkedin.com/in/rkroyy" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors animate-fade-in"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* About Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">About Me</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
              <p className="text-gray-600 leading-relaxed">
                Seasoned Salesforce Technical Architect with 9+ years of experience in development, 
                leadership, and architecture. Currently working as a Salesforce Developer at SAS Airlines 
                in Sweden, bringing expertise in telecom and airlines domains.
              </p>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HiLightningBolt className="w-6 h-6 mr-2 text-blue-600" />
                  Salesforce Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Omnistudio', 'Lightning', 'CPQ', 'Service Cloud', 'Sales Cloud', 
                    'Experience Cloud', 'Industries Cloud', 'Apex', 'LWC', 'Flows', 'Security']
                    .map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm animate-fade-in">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HiCode className="w-6 h-6 mr-2 text-green-600" />
                  Full Stack Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', '.Net', 'Python', 'NodeJs', 'React', 'NextJs', 'Angular', 
                    'MERN', 'Vue', 'Spring', 'Hibernate', 'MySql', 'MS SQL', 'Spring Boot', 
                    'Microservices']
                    .map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm animate-fade-in">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HiLightningBolt className="w-6 h-6 mr-2 text-purple-600" />
                  Salesforce Deployment Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Salesforce DX', icon: <SiSalesforce className="w-5 h-5" /> },
                    { name: 'Change Sets', icon: <SiSalesforce className="w-5 h-5" /> },
                    { name: 'Flosum', icon: <SiSalesforce className="w-5 h-5" /> },
                    { name: 'Copado', icon: <SiSalesforce className="w-5 h-5" /> },
                    { name: 'Vlocode', icon: <SiSalesforce className="w-5 h-5" /> },
                    { name: 'Jenkins', icon: <SiJenkins className="w-5 h-5" /> },
                    { name: 'GitHub Actions', icon: <SiGithubactions className="w-5 h-5" /> },
                    { name: 'GitLab CI/CD', icon: <SiGitlab className="w-5 h-5" /> },
                    { name: 'Ant Migration Tool', icon: <SiSalesforce className="w-5 h-5" /> },
                    { name: 'Metadata API', icon: <SiSalesforce className="w-5 h-5" /> },
                    { name: 'SFDX CLI', icon: <SiSalesforce className="w-5 h-5" /> },
                    { name: 'VS Code', icon: <HiCode className="w-5 h-5" /> }
                  ].map((tool) => (
                    <span key={tool.name} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm animate-fade-in flex items-center gap-2">
                      {tool.icon}
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaCloud className="w-6 h-6 mr-2 text-blue-600" />
                  Cloud & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'AWS', icon: <SiAmazon className="w-5 h-5" /> },
                    { name: 'Azure', icon: <FaMicrosoft className="w-5 h-5" /> },
                    { name: 'Vercel', icon: <SiVercel className="w-5 h-5" /> },
                    { name: 'Netlify', icon: <SiNetlify className="w-5 h-5" /> },
                    { name: 'Heroku', icon: <SiHeroku className="w-5 h-5" /> },
                    { name: 'Google Cloud', icon: <SiGooglecloud className="w-5 h-5" /> },
                    { name: 'DigitalOcean', icon: <SiDigitalocean className="w-5 h-5" /> },
                    { name: 'Docker', icon: <SiDocker className="w-5 h-5" /> },
                    { name: 'Kubernetes', icon: <SiKubernetes className="w-5 h-5" /> },
                    { name: 'GitHub Actions', icon: <SiGithubactions className="w-5 h-5" /> },
                    { name: 'Jenkins', icon: <SiJenkins className="w-5 h-5" /> },
                    { name: 'Terraform', icon: <SiTerraform className="w-5 h-5" /> }
                  ].map((tool) => (
                    <span key={tool.name} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm animate-fade-in flex items-center gap-2">
                      {tool.icon}
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Editors and AI Tools Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Editors and AI Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HiCode className="w-6 h-6 mr-2 text-purple-600" />
                  Development Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Visual Studio Code', icon: <HiCode className="w-5 h-5" /> },
                    { name: 'Cursor', icon: <HiCode className="w-5 h-5" /> },
                    { name: 'Replit', icon: <SiReplit className="w-5 h-5" /> },
                    { name: 'V0', icon: <SiVercel className="w-5 h-5" /> },
                    { name: 'Lovable', icon: <FaRobot className="w-5 h-5" /> },
                    { name: 'ChatGPT', icon: <SiOpenai className="w-5 h-5" /> },
                    { name: 'GrokAI', icon: <FaBrain className="w-5 h-5" /> },
                    { name: 'Llama', icon: <HiChip className="w-5 h-5" /> },
                    { name: 'DeepSeek', icon: <FaBrain className="w-5 h-5" /> },
                    { name: 'Claude', icon: <FaRobot className="w-5 h-5" /> },
                    { name: 'Gemini', icon: <FaBrain className="w-5 h-5" /> },
                    { name: 'Copilot', icon: <FaRobot className="w-5 h-5" /> },
                    { name: 'Codeium', icon: <HiCode className="w-5 h-5" /> }
                  ].map((tool) => (
                    <span 
                      key={tool.name} 
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm animate-fade-in flex items-center gap-2"
                    >
                      {tool.icon}
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HiChip className="w-6 h-6 mr-2 text-indigo-600" />
                  Development Workflow
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Code Generation & Assistance</h4>
                    <p className="text-gray-600">
                      Leveraging AI tools for code generation, debugging, and optimization. Experienced in prompt engineering and AI-assisted development workflows.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">AI Integration</h4>
                    <p className="text-gray-600">
                      Implementing AI features in applications, including natural language processing, machine learning models, and intelligent automation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">AI-Powered Development</h4>
                    <p className="text-gray-600">
                      Utilizing AI tools for rapid prototyping, testing, and deployment. Experienced in AI-driven development methodologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Salesforce Certified OmniStudio Developer',
                'Salesforce Certified OmniStudio Communications Developer II',
                'Salesforce Certified Industries CPQ Developer',
                'Salesforce Certified Administrator',
                'Salesforce Certified Platform App Builder',
                'Salesforce Certified Platform Developer I',
                'Salesforce Certified Platform Developer II',
                'Salesforce Certified Service Cloud Consultant',
                'Salesforce Certified Sales Cloud Consultant',
                'Salesforce Certified Community Cloud Consultant',
                'Salesforce Certified Einstein Analytics and Discovery Consultant',
                'Salesforce Certified Marketing Cloud Email Specialist'
              ].map((cert) => (
                <motion.div 
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow section-transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{cert}</h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  company: 'SAS Airlines',
                  icon: <FaPlane className="w-6 h-6 text-blue-600" />,
                  role: 'Salesforce Developer',
                  period: 'Nov 2023 - Present',
                  location: 'Sweden',
                  tech: ['Salesforce Service Cloud', 'Apex', 'LWC', 'Amazon Connect', 'AWS', 'Mulesoft IDP'],
                  responsibilities: [
                    'Business communication and stakeholder management',
                    'Development of POCs and prototypes',
                    'Sprint planning and task execution',
                    'Integration with AWS and Mulesoft services'
                  ],
                  teamSize: '12-15 members'
                },
                {
                  company: 'Telefónica Germany',
                  client: 'Wipro',
                  icon: <FaBuilding className="w-6 h-6 text-red-600" />,
                  role: 'Team Lead, Architect',
                  period: 'June 2021 - Nov 2023',
                  location: 'Sweden',
                  tech: ['Omnistudio', 'CPQ API', 'Salesforce', 'Apex', 'LWC'],
                  responsibilities: [
                    'Team leadership and technical guidance',
                    'Architecture design and solution implementation',
                    'Code review and quality assurance',
                    'Client communication and requirement gathering'
                  ],
                  teamSize: '12-15 members'
                },
                {
                  company: 'Mass Customization Online',
                  client: 'Capgemini',
                  icon: <FaGlobe className="w-6 h-6 text-purple-600" />,
                  role: 'Salesforce Industries Consultant/Lead Developer',
                  period: 'Apr 2020 - May 2021',
                  location: 'Sweden',
                  tech: ['Salesforce Industries Digital Platform', 'Digital Commerce API', 'CPQ API', 'APIGEE', 'Swagger'],
                  responsibilities: [
                    'Requirement analysis and documentation',
                    'User story estimation and sprint planning',
                    'Development of POCs and prototypes',
                    'API integration and documentation'
                  ],
                  teamSize: '10-12 members'
                },
                {
                  company: 'MC Sales',
                  client: 'Capgemini',
                  icon: <FaGlobe className="w-6 h-6 text-purple-600" />,
                  role: 'Salesforce Industries Consultant/Lead Developer',
                  period: 'Jan 2020 - Mar 2020',
                  location: 'Sweden',
                  tech: ['Salesforce Industries Digital Platform', 'Digital Commerce API', 'CPQ API', 'APIGEE', 'Swagger'],
                  responsibilities: [
                    'Requirement analysis and documentation',
                    'User story estimation and sprint planning',
                    'Development of POCs and prototypes',
                    'API integration and documentation'
                  ],
                  teamSize: '10-12 members'
                },
                {
                  company: 'CRM Fiber B2B',
                  client: 'Capgemini',
                  icon: <FaGlobe className="w-6 h-6 text-purple-600" />,
                  role: 'Salesforce Industries Consultant/Lead Developer',
                  period: 'Apr 2019 - Dec 2019',
                  location: 'Sweden',
                  tech: ['Salesforce Industries', 'Salesforce', 'Apex', 'Lightning', 'CPQ', 'CLM', 'AngularJS'],
                  responsibilities: [
                    'Client communication and requirement gathering',
                    'User story development and execution',
                    'Project planning and delivery',
                    'Technical documentation and knowledge transfer'
                  ],
                  teamSize: '10-12 members'
                },
                {
                  company: 'British American Tobacco',
                  client: 'ITC Infotech',
                  icon: <FaBuilding className="w-6 h-6 text-green-600" />,
                  role: 'Salesforce Developer',
                  period: 'Oct 2018 - Mar 2019',
                  location: 'Bengaluru, India',
                  tech: ['Salesforce', 'Experience Cloud', 'Apex', 'Lightning'],
                  responsibilities: [
                    'Experience Cloud portal development',
                    'Custom component development',
                    'Integration with external systems',
                    'User management and security'
                  ],
                  teamSize: '10-15 members'
                },
                {
                  company: 'Verizon Business Market B2C',
                  client: 'Accenture',
                  icon: <SiVerizon className="w-6 h-6 text-red-600" />,
                  role: 'Salesforce & Salesforce Industries Developer',
                  period: 'Sep 2017 - Sep 2018',
                  location: 'Pune, India',
                  tech: ['Salesforce Industries', 'Salesforce', 'Apex', 'Lightning', 'Community Builder'],
                  responsibilities: [
                    'Development of OmniScripts and DataRaptors',
                    'Lightning Component development',
                    'Community portal customization',
                    'Integration with external systems'
                  ],
                  teamSize: '12-15 members'
                },
                {
                  company: 'Comcast B2B',
                  client: 'Accenture',
                  icon: <FaBuilding className="w-6 h-6 text-blue-600" />,
                  role: 'Salesforce Developer',
                  period: 'Oct 2015 - Aug 2017',
                  location: 'Pune, India',
                  tech: ['Salesforce', 'Visualforce', 'jQuery', 'JavaScript', 'SOAP', 'REST'],
                  responsibilities: [
                    'Sales process automation',
                    'CPQ integration and customization',
                    'Custom development using Visualforce and Apex',
                    'API integration and development'
                  ],
                  teamSize: '10-12 members'
                }
              ].map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 section-transition hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center space-x-3">
                      {exp.icon}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                        <p className="text-gray-600">
                          {exp.company}
                          {exp.client && ` • ${exp.client}`}
                        </p>
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-600">{exp.period}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Team Size</h4>
                    <p className="text-gray-600">{exp.teamSize}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm animate-fade-in"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Training & Freelancing Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Training & Freelancing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HiAcademicCap className="w-6 h-6 mr-2 text-blue-600" />
                  Training Excellence
                </h3>
                <p className="text-gray-600">
                  Successfully trained over 110 professionals from scratch to expert level in Salesforce development, 
                  covering topics from basic administration to advanced architecture and development.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HiBriefcase className="w-6 h-6 mr-2 text-purple-600" />
                  Freelance Projects
                </h3>
                <p className="text-gray-600">
                  Completed more than 27 freelance projects, delivering high-quality solutions across various industries 
                  and helping businesses optimize their Salesforce implementations.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Previous Companies Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Previous Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  name: 'SAS Airlines',
                  icon: <FaPlane className="w-8 h-8 text-blue-600" />,
                  color: 'bg-blue-50',
                  textColor: 'text-blue-800'
                },
                {
                  name: 'Wipro',
                  icon: <FaBuilding className="w-8 h-8 text-red-600" />,
                  color: 'bg-red-50',
                  textColor: 'text-red-800'
                },
                {
                  name: 'Capgemini',
                  icon: <FaBuilding className="w-8 h-8 text-purple-600" />,
                  color: 'bg-purple-50',
                  textColor: 'text-purple-800'
                },
                {
                  name: 'ITC Infotech',
                  icon: <FaBuilding className="w-8 h-8 text-green-600" />,
                  color: 'bg-green-50',
                  textColor: 'text-green-800'
                },
                {
                  name: 'Accenture',
                  icon: <FaBuilding className="w-8 h-8 text-pink-600" />,
                  color: 'bg-pink-50',
                  textColor: 'text-pink-800'
                }
              ].map((company) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`${company.color} rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow`}
                >
                  {company.icon}
                  <span className={`mt-4 text-lg font-semibold ${company.textColor}`}>
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">US Patent</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent Code Quality Monitoring (Patent No: 15/819,958)
                </p>
                <Link 
                  href="https://patents.google.com/patent/US10572367B2/en"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800"
                >
                  View on Google Patents
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Salesforce Simplified</h3>
                <p className="text-gray-600 mb-4">
                  Chrome Extension for Salesforce/Omnistudio Developers & Admins
                </p>
                <div className="space-y-2">
                  <Link 
                    href="https://chrome.google.com/webstore/detail/salesforcesimplified/hjeigbpcblpkaienmpihneipkempijob"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 block"
                  >
                    Chrome Web Store
                  </Link>
                  <Link 
                    href="https://github.com/rajnikantroy/SalesforceSimplified"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 block"
                  >
                    GitHub Repository
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            {...fadeInUp}
            className="mb-16 card-hover"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Contact</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 section-transition">
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="w-5 h-5 text-gray-600 mr-3" />
                  <button 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={(e) => {
                      const button = e.currentTarget;
                      const originalText = button.textContent;
                      button.textContent = 'rajnikantroy61@gmail.com';
                      setTimeout(() => {
                        button.textContent = originalText;
                      }, 5000);
                    }}
                  >
                    *****roy61@gmail.com
                  </button>
                </div>
                <div className="flex items-center">
                  <FaPhone className="w-5 h-5 text-gray-600 mr-3" />
                  <button 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={(e) => {
                      const button = e.currentTarget;
                      const originalText = button.textContent;
                      button.textContent = '+46-0730949905';
                      setTimeout(() => {
                        button.textContent = originalText;
                      }, 5000);
                    }}
                  >
                    +46-*****9905
                  </button>
                </div>
                <div className="flex items-center">
                  <FaPhone className="w-5 h-5 text-gray-600 mr-3" />
                  <button 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={(e) => {
                      const button = e.currentTarget;
                      const originalText = button.textContent;
                      button.textContent = '+91-7620896789';
                      setTimeout(() => {
                        button.textContent = originalText;
                      }, 5000);
                    }}
                  >
                    +91-*****6789
                  </button>
                  <span className="text-sm text-gray-500 ml-2">(WhatsApp)</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-600">Stockholm, Sweden | Bengaluru, India</span>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 