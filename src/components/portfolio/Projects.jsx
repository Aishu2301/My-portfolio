import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, MessageCircle, DollarSign } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "CartRush",
      description: "Full-stack e-commerce platform with AWS deployment and Stripe integration for secure payments",
      icon: ShoppingCart,
      tech: ["React.js", "Node.js", "AWS", "Stripe", "MongoDB"],
      color: "from-blue-400 to-purple-600"
    },
    {
      title: "LinkUp",
      description: "Real-time chat application using Socket.io, Redis for caching, and Docker for containerization",
      icon: MessageCircle,
      tech: ["Socket.io", "Redis", "Docker", "React", "Node.js"],
      color: "from-green-400 to-blue-500"
    },
    {
      title: "FinTrack",
      description: "Cross-platform finance tracker built with React Native and Firebase for real-time data sync",
      icon: DollarSign,
      tech: ["React Native", "Firebase", "JavaScript", "Mobile"],
      color: "from-purple-400 to-pink-500"
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
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Featured Projects</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-slate-300 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                </div>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}