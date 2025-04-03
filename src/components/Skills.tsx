import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Salesforce Expertise',
    skills: [
      { name: 'Salesforce Architecture', level: 95 },
      { name: 'Omnistudio', level: 90 },
      { name: 'CPQ & Billing', level: 85 },
      { name: 'Sales & Service Cloud', level: 95 },
      { name: 'Experience Cloud', level: 90 },
      { name: 'Apex & LWC', level: 95 },
    ],
  },
  {
    title: 'Integration & Development',
    skills: [
      { name: 'API Integration', level: 90 },
      { name: 'MuleSoft', level: 85 },
      { name: 'AWS Services', level: 80 },
      { name: 'Java', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'AngularJS', level: 75 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="text-blue-500 font-medium">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold mb-8 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.div
                key={index}
                className="card px-6 py-3"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Salesforce Certified
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 