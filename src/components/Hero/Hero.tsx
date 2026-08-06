import React from 'react';
import { motion } from 'framer-motion';
// DownloadIcon is re-added alongside the resume button below when it returns.
import { GithubIcon, LinkedinIcon, EnvelopeIcon, TwitterIcon } from '../Icons';
import './Hero.css';

const STATS = [
  { value: '50+', label: 'Security Audits' },
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Conference Talks' },
];

const SOCIALS = [
  { href: 'https://github.com/razzorsec', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://linkedin.com/in/razzor', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://x.com/razzor_tweet', label: 'Twitter', Icon: TwitterIcon },
  { href: 'mailto:razzor@ciphershastra.com', label: 'Email', Icon: EnvelopeIcon },
];

const FLOATING_CHIPS = [
  { text: 'Zero-Knowledge', className: 'chip-zk' },
  { text: 'Solidity', className: 'chip-solidity' },
  { text: 'Smart Contract Audits', className: 'chip-audit' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Ambient colour washes behind the content */}
      <div className="hero-background" aria-hidden="true">
        <span className="bg-orb bg-orb-1" />
        <span className="bg-orb bg-orb-2" />
        <span className="bg-orb bg-orb-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
          >
            <motion.div className="hero-badge" variants={fadeUp}>
              <span>
                <span className="status-dot" />
                Available for security audits
              </span>
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp}>
              Hi, I'm <span className="highlight">Tejaswa Rastogi</span>
            </motion.h1>

            <motion.h2 className="hero-subtitle" variants={fadeUp}>
              Blockchain Security Engineer
            </motion.h2>

            <motion.p className="hero-description" variants={fadeUp}>
              I break and harden smart contracts and zero-knowledge systems. Currently
              Blockchain Security Engineer at <strong>ADI Foundation</strong> — previously
              Matter Labs/zkSync, ConsenSys Diligence, and QuillAudits.
            </motion.p>

            <motion.div className="hero-buttons" variants={fadeUp}>
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View Work
              </a>
              {/* Hidden until the CV is refreshed — drop in the new PDF under
                  public/, update the filename here, and uncomment. */}
              {/*
              <a
                href={`${process.env.PUBLIC_URL}/Tej_CV_2025.pdf`}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadIcon />
                Resume
              </a>
              */}
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp}>
              {STATS.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="hero-social" variants={fadeUp}>
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="social-link"
                  aria-label={label}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="profile-frame">
              <div className="profile-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/profile-image.jpg`}
                  alt="Tejaswa Rastogi, Blockchain Security Engineer"
                  className="profile-image"
                  width={400}
                  height={500}
                />
              </div>

              {FLOATING_CHIPS.map((chip, index) => (
                <motion.span
                  key={chip.text}
                  className={`floating-chip ${chip.className}`}
                  animate={{ y: [0, -9, 0] }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.7,
                  }}
                >
                  {chip.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Scroll to about section"
      >
        <span className="scroll-mouse">
          <motion.span
            className="scroll-wheel"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <span className="scroll-text">Scroll</span>
      </motion.a>
    </section>
  );
};

export default Hero;
