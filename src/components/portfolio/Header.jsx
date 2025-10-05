import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-extralight text-white mb-6 tracking-tight"
        >
          Aishwarya Eshwar
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-300 font-light tracking-wide"
        >
          <span className="text-blue-400">Software Engineer</span>
          <span className="mx-4 text-slate-500">|</span>
          <span className="text-purple-400">Full-Stack Developer</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12"
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}