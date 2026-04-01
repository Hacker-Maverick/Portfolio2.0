import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Shield, Database, Layout, Terminal, Gamepad2, Box } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'SaaS', 'Full-stack', 'Frontend', 'Backend', 'Security'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Selected Projects
        </motion.h2>

        <div className="filter-container">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="projects-grid"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 2,
                  rotateY: 2,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,210,255,0.2)"
                }}
                className="project-card glass-card"
              >
                <div className="project-header">
                  <div className="project-category">
                    {project.category === 'Security' ? <Shield size={16} /> : 
                     project.category === 'SaaS' ? <Layers size={16} /> : 
                     project.category === 'Backend' ? <Database size={16} /> : 
                     project.category === 'Frontend' ? <Layout size={16} /> : 
                     project.category === 'Full-stack' ? <Terminal size={16} /> : <Layout size={16} />}
                    <span>{project.category}</span>
                  </div>
                  <div className="project-links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.links.live && project.links.live !== '#' && (
                      <a href={project.links.live} target="_blank" rel="noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle accent-text">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                
                <ul className="project-details">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
