
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // You could integrate with an email service here
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aishwaryae02@gmail.com', // Updated email address
      href: 'mailto:aishwaryae02@gmail.com', // Updated email href
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 716 750 6266',
      href: 'tel:+17167506266',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Buffalo, NY',
      href: '#',
      color: 'from-purple-400 to-pink-400'
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
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Get In Touch</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always open. 
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color} p-3.5 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">{contact.label}</p>
                    <p className="text-white text-lg font-light group-hover:text-cyan-300 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-400/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Let's Build Something Great</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                I'm always excited to work on innovative projects and collaborate with 
                talented individuals. Whether you need a full-stack application, 
                cloud deployment, or just want to discuss ideas, I'd love to hear from you.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <User className="w-5 h-5 text-slate-400" />
                    </div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-12 h-14 bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Mail className="w-5 h-5 text-slate-400" />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-12 h-14 bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-4">
                      <MessageSquare className="w-5 h-5 text-slate-400" />
                    </div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="pl-12 pt-4 bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </form>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
