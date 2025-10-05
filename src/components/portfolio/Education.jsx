import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master's in Computer Science",
      school: "University at Buffalo",
      location: "Buffalo, NY",
      period: "Aug 2024 – Present",
      color: "from-blue-400 to-purple-600"
    },
    {
      degree: "Bachelor's in Computer Science",
      school: "Dayananda Sagar Academy of Technology",
      location: "India",
      period: "Dec 2020 – May 2024",
      color: "from-purple-400 to-pink-600"
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
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Education</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-400 font-medium">{edu.school}</p>
                    </div>
                    
                    <div className="text-right text-slate-400 text-sm space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}