import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, EnvelopeIcon, DownloadIcon } from '../Icons';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="highlight">Tejaswa Rastogi</span>
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Blockchain Security Engineer
            </motion.h2>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Dedicated and passionate Blockchain Security Researcher with a strong commitment to 
              safeguarding digital assets and systems. Currently working at Matter Labs/zkSync, 
              specializing in smart contract audits and zero-knowledge proof systems.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/resume.pdf" className="btn btn-outline" download>
                <DownloadIcon />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <a 
                href="https://github.com/razzor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <GithubIcon />
              </a>
              <a 
                href="https://linkedin.com/in/razzor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <LinkedinIcon />
              </a>
              <a 
                href="mailto:razzor@ciphershastra.com"
                className="social-link"
              >
                <EnvelopeIcon />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="profile-image-container">
              <motion.img
                src={`${process.env.PUBLIC_URL}/profile-image.jpg`}
                alt="Tejaswa Rastogi - Blockchain Security Engineer"
                className="profile-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onError={(e) => {
                  // Fallback to placeholder if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'block';
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <motion.div
                  className="floating-elements"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🔐
                </motion.div>
                <motion.div
                  className="floating-elements blockchain"
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                ⛓️
              </motion.div>
              <motion.div
                className="floating-elements security"
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                🛡️
              </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
        <p>Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;
