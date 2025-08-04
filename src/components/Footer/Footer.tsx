import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, EnvelopeIcon, HeartIcon, ArrowUpIcon } from '../Icons';
import './Footer.css';

interface SocialLink {
  icon: React.ComponentType;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      icon: GithubIcon,
      href: 'https://github.com/razzor',
      label: 'GitHub'
    },
    {
      icon: LinkedinIcon,
      href: 'https://linkedin.com/in/razzor',
      label: 'LinkedIn'
    },
    {
      icon: EnvelopeIcon,
      href: 'mailto:razzor@ciphershastra.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Tejaswa Rastogi</h3>
              <p>
                Blockchain Security Engineer passionate about safeguarding digital assets 
                and advancing the security of decentralized systems.
              </p>
              <div className="footer-social">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="social-link"
                    aria-label={link.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li><span>Smart Contract Audits</span></li>
                  <li><span>Security Consulting</span></li>
                  <li><span>Protocol Reviews</span></li>
                  <li><span>Formal Verification</span></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Expertise</h4>
                <ul>
                  <li><span>Zero Knowledge Proofs</span></li>
                  <li><span>DeFi Security</span></li>
                  <li><span>Layer 2 Solutions</span></li>
                  <li><span>Cryptography</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} Tejaswa Rastogi. Made with{' '}
                <motion.span
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <HeartIcon />
                </motion.span>{' '}
                for blockchain security.
              </p>
            </div>
            
            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUpIcon />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
