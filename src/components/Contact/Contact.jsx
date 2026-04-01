import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error("Web3Forms Access Key is missing in .env");
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after a few seconds
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3 className="contact-subtitle">Let's build something <span className="accent-text">extraordinary</span>.</h3>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${portfolioData.email}`} className="contact-method glass-card">
                <div className="method-icon"><Mail size={24} /></div>
                <div className="method-text">
                  <span>Email</span>
                  <strong>{portfolioData.email}</strong>
                </div>
              </a>
              <a href={`tel:${portfolioData.phone}`} className="contact-method glass-card">
                <div className="method-icon"><Phone size={24} /></div>
                <div className="method-text">
                  <span>Phone</span>
                  <strong>{portfolioData.phone}</strong>
                </div>
              </a>
              <div className="contact-method glass-card">
                <div className="method-icon"><MapPin size={24} /></div>
                <div className="method-text">
                  <span>Location</span>
                  <strong>{portfolioData.location}</strong>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-container glass-card"
          >
            <div className="form-header">
              <MessageSquare className="accent-text" size={24} />
              <h4>Send a Message</h4>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required disabled={isSubmitting}></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="form-message success"
                  >
                    <CheckCircle size={18} /> Message sent successfully!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="form-message error"
                  >
                    <AlertCircle size={18} /> Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
