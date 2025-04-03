import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
      id="about"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-gray-700 dark:text-gray-300"
        >
          <p>
            With over 9 years of experience in the Salesforce ecosystem, I am a passionate Technical Architect who thrives on solving complex business challenges through innovative technology solutions. My journey spans across prestigious organizations including SAS Airlines, Wipro, Capgemini, ITC Infotech, and Accenture.
          </p>
          
          <p>
            I specialize in architecting and delivering enterprise-scale Salesforce solutions, particularly in the telecom and airlines domains. My expertise encompasses the full spectrum of Salesforce technologies, from core platforms like Sales Cloud and Service Cloud to advanced solutions like Omnistudio and CPQ.
          </p>

          <p>
            As a technical leader, I have successfully led multiple digital transformation initiatives, focusing on creating scalable, maintainable, and efficient solutions that drive business value. My approach combines deep technical knowledge with strategic thinking to deliver solutions that not only meet current needs but are also future-ready.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
} 