import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Cloud } from 'lucide-react';

export default function About() {
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
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">About Me</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              Currently pursuing my Master's in Computer Science at the University at Buffalo, 
              I'm passionate about building scalable web applications, data-driven solutions, 
              and cloud deployments that solve real-world problems.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              With a strong foundation in full-stack development and cloud technologies, 
              I enjoy creating innovative solutions that bridge the gap between complex 
              technical requirements and intuitive user experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Academic Excellence</h3>
                <p className="text-slate-400 text-sm">Master's in Computer Science</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Full-Stack Development</h3>
                <p className="text-slate-400 text-sm">End-to-end web applications</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Cloud Architecture</h3>
                <p className="text-slate-400 text-sm">Scalable deployments & DevOps</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}