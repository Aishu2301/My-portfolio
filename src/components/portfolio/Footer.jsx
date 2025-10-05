
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative z-10 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Let's Connect</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 font-light">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d206e7d30fc3e44dfe8eb3/80ee85813_AishwaryaEshwarResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="AishwaryaEshwar_Resume.pdf"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:aishwaryae02@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium rounded-2xl transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="mailto:aishwaryae02@gmail.com"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-blue-500/20 hover:border-blue-400/50 flex items-center justify-center transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://linkedin.com/in/aishwaryae"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-blue-600/20 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://github.com/Aishu2301"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-purple-500/20 hover:border-purple-400/50 flex items-center justify-center transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-slate-400 group-hover:text-purple-400" />
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <p className="text-slate-500 font-light">
            © 2024 Aishwarya Eshwar. Crafted with passion and precision.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
