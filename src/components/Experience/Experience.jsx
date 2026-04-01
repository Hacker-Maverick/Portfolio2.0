import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-achievements-grid">
          <div className="experience-column">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title sub-section-title"
            >
              Experience
            </motion.h2>

            <div className="timeline">
              {portfolioData.experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="timeline-item glass-card"
                >
                  <div className="timeline-header">
                    <span className="timeline-duration">
                      <Calendar size={14} /> {exp.duration}
                    </span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">
                      <Building2 size={16} /> {exp.company}
                    </div>
                  </div>
                  <p className="timeline-desc">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="achievements-column">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title sub-section-title"
            >
              Achievements
            </motion.h2>

            <div className="achievements-list">
              {portfolioData.achievements.map((ach, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="achievement-item glass-card"
                >
                  <div className="achievement-header">
                    <h4 className="achievement-title">{ach.title}</h4>
                    <span className="achievement-org">{ach.org}</span>
                  </div>
                  <p className="achievement-desc">{ach.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
