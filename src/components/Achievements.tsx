import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'US Patent',
    description: 'Intelligent Code Quality Monitoring System',
    details: 'Patent No: 15/819,958',
    icon: '🏆',
    link: '#',
  },
  {
    title: 'Chrome Extension',
    description: 'Salesforce Simplified',
    details: 'A productivity tool for Salesforce developers',
    icon: '🚀',
    link: 'https://github.com/yourusername/salesforce-simplified',
  },
  {
    title: '12 Salesforce Certifications',
    description: 'Certified Technical Architect Path',
    details: 'Including System Architect and Application Architect',
    icon: '📜',
    link: '#',
  },
];

export default function Achievements() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="achievements"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.a
              href={achievement.link}
              key={achievement.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text group-hover:from-purple-500 group-hover:to-pink-500">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {achievement.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {achievement.details}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/yourusername"
            className="inline-flex items-center text-blue-500 hover:text-purple-500 transition-colors duration-300"
          >
            View More on GitHub
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
} 