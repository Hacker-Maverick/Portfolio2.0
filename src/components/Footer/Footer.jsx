import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="logo">SAURAV<span>SAGAR</span></h2>
            <p>Building production-grade systems with security at the core.</p>
          </div>
          
          <div className="footer-socials">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${portfolioData.email}`}>
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Saurav Sagar. All rights reserved.</p>
          <p className="made-with">
            Built with React & <Heart className="heart-icon" size={16} fill="currentColor" /> by Saurav
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
