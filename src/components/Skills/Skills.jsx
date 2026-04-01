import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Globe, Database, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Skills.css';

const SkillGroup = ({ title, skills, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="skill-group glass-card"
  >
    <div className="group-header">
      <Icon className="accent-text" size={24} />
      <h3>{title}</h3>
    </div>
    <div className="skill-tags">
      {skills.map(skill => (
        <span key={skill} className="skill-tag">{skill}</span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          <SkillGroup title="Languages" skills={portfolioData.skills.languages} icon={Code2} />
          <SkillGroup title="Backend" skills={portfolioData.skills.backend} icon={Terminal} />
          <SkillGroup title="Frontend" skills={portfolioData.skills.frontend} icon={Globe} />
          <SkillGroup title="Databases" skills={portfolioData.skills.database} icon={Database} />
          <SkillGroup title="Cloud & Tools" skills={portfolioData.skills.cloud} icon={Cpu} />
          <SkillGroup title="Security" skills={portfolioData.skills.security} icon={ShieldCheck} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
