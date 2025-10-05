import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Cloud, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "C++"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: ["React.js", "Node.js", "Spring Boot", "Flask"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes"],
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Firebase"],
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative z-10 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Technical Skills</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-slate-300 font-light hover:text-white transition-colors duration-200 cursor-default"
                  >
                    • {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}