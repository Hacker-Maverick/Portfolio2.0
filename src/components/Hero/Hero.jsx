import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="greeting"
          >
            Hello, I'm <span className="accent-text">{portfolioData.name}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-title"
          >
            I build <span className="gradient-text">production-grade</span> systems.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-subtitle"
          >
            <span className="typing-text">
              {portfolioData.role.join(' | ')}
            </span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-cta"
          >
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hero-socials"
          >
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${portfolioData.email}`}>
              <Mail size={24} />
            </a>
            <button className="social-icon">
              <Download size={24} />
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-visual"
        >
          <div className="glow-sphere" />
          <div className="code-display glass-card">
            <div className="code-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <pre>
              <code>
                {`const developer = {
  name: "Saurav Sagar",
  focus: ["Backend", "Security"],
  motto: "Secure & Scalable",
  status: "Building..."
};

while (true) {
  developer.innovate();
  developer.secure();
}`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="scroll-indicator"
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
