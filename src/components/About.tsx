import React from 'react';
import { Code, Layout, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="h-6 w-6" />,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: <Server className="h-6 w-6" />,
      technologies: ['Node.js', 'Express', 'Python', 'Django'],
    },
    {
      category: 'Database',
      icon: <Database className="h-6 w-6" />,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
    },
    {
      category: 'Other',
      icon: <Code className="h-6 w-6" />,
      technologies: ['Git', 'Docker', 'AWS', 'CI/CD'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-300 mb-6"
            >
              I'm a full-stack developer with experience in building web applications.
              I specialize in user-friendly interfaces and robust backend systems.
              My passion lies in solving complex problems and turning ideas into reality through code.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center space-x-2 mb-3 text-blue-400">
                    {skill.icon}
                    <h3 className="font-semibold">{skill.category}</h3>
                  </div>
                  <ul className="space-y-1">
                    {skill.technologies.map((tech) => (
                      <li key={tech} className="text-gray-400">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}