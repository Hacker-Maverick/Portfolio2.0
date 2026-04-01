import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Code } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-info"
          >
            <div className="glass-card about-content">
              <p className="about-text">
                {portfolioData.about}
              </p>
              
              <div className="about-bullets">
                <div className="bullet">
                  <MapPin className="accent-text" size={20} />
                  <span>Based in {portfolioData.location}</span>
                </div>
                <div className="bullet">
                  <Briefcase className="accent-text" size={20} />
                  <span>Focus: Full Stack & Security</span>
                </div>
                <div className="bullet">
                  <Code className="accent-text" size={20} />
                  <span>Building for Production</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="education-info"
          >
            <h3 className="sub-title">Education</h3>
            <div className="glass-card education-card">
              <div className="edu-header">
                <GraduationCap className="accent-text" size={24} />
                <div className="edu-meta">
                  <h4>{portfolioData.education.institution}</h4>
                  <span className="edu-duration">{portfolioData.education.duration}</span>
                </div>
              </div>
              
              <p className="edu-degree">{portfolioData.education.degree}</p>
              <div className="edu-stats">
                <div className="stat">
                  <span className="stat-label">CGPA:</span>
                  <span className="stat-value">{portfolioData.education.cgpa}</span>
                </div>
              </div>
              
              <div className="coursework">
                <span className="course-label">Relevant Coursework:</span>
                <div className="course-tags">
                  {portfolioData.education.coursework.map(course => (
                    <span key={course} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
