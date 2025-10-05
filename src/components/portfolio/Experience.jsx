import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Coding Assistant",
      company: "University at Buffalo",
      location: "Buffalo, NY",
      period: "June 2025 – Present",
      description: "Developing data pipelines and ML integration solutions to enhance educational technology platforms",
      highlights: [
        "Engineered data pipelines to process and clean large-scale food, nutrition, and health datasets for machine learning applications",
        "Developed Python-based ETL scripts for data extraction, transformation, and validation, improving model training efficiency",
        "Contributed to a carbon footprint calculator for campus dining recipes, supporting university-wide sustainability goals"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Compsoft Technologies",
      location: "Bengaluru, India",
      period: "June 2023 – December 2023",
      description: "Built full-stack applications using modern technologies for enterprise clients",
      highlights: [
        "Developed and deployed full-stack web applications using React.js and Java Spring Boot, ensuring responsive design and high performance",
        "Designed and integrated RESTful APIs with MongoDB, enabling real-time data rendering and seamless data management",
        "Automated workflows with Python scripts, reducing manual effort and improving operational efficiency",
        "Contributed to cloud deployments on AWS, containerizing services with Docker and orchestrating with Kubernetes for scalable microservices"
      ]
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
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Experience</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex">
                <div className="flex flex-col items-center mr-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-blue-400/50 to-transparent mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1 pb-12">
                  <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 group-hover:bg-white/10">
                    <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-blue-400 font-medium mb-2">{exp.company}</p>
                      </div>
                      
                      <div className="text-right text-slate-400 text-sm space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-slate-300 leading-relaxed font-light">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}