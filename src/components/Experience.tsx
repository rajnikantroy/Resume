import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'SAS Airlines',
    role: 'Lead Salesforce Technical Architect',
    period: '2022 - Present',
    description: 'Leading digital transformation initiatives and architecting enterprise-scale Salesforce solutions.',
    achievements: [
      'Architected and implemented complex Salesforce solutions for airline operations',
      'Led a team of developers and established best practices and coding standards',
      'Designed and implemented integration patterns with multiple enterprise systems',
    ],
  },
  {
    company: 'Telefónica Germany',
    role: 'Senior Salesforce Architect',
    period: '2020 - 2022',
    description: 'Spearheaded telecom industry solutions and complex system integrations.',
    achievements: [
      'Designed and implemented Salesforce CPQ solutions for telecom products',
      'Led the implementation of Omnistudio-based digital processes',
      'Established integration patterns with legacy systems using MuleSoft',
    ],
  },
  {
    company: 'Telia Company',
    role: 'Technical Lead',
    period: '2018 - 2020',
    description: 'Led technical implementation of Salesforce solutions in the telecom sector.',
    achievements: [
      'Implemented complex billing and provisioning integrations',
      'Developed reusable components and frameworks using LWC',
      'Mentored team members and conducted architecture reviews',
    ],
  },
  {
    company: 'Previous Experience',
    role: 'Salesforce Developer',
    period: '2014 - 2018',
    description: 'Worked with various organizations including Wipro, Capgemini, ITC Infotech, and Accenture.',
    achievements: [
      'Developed custom Salesforce solutions across multiple clouds',
      'Implemented integration solutions with external systems',
      'Earned multiple Salesforce certifications',
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
      id="experience"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500 md:before:mx-auto md:before:ml-0">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start md:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-900 absolute left-0 md:left-1/2 md:-ml-5 group-hover:border-purple-500 transition-colors duration-300">
                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:bg-purple-500 transition-colors duration-300" />
              </div>
              
              <div className="ml-12 md:ml-0 md:mr-12 md:w-1/2">
                <div className="card p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {experience.role}
                    </h3>
                    <span className="text-blue-500 font-medium">
                      {experience.company}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 