import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.div variants={itemVariants} className="about-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Get to know more about who I am, what I do, and my journey in blockchain security
            </p>
          </motion.div>

          <div className="about-body">
            <motion.div variants={itemVariants} className="about-text">
              <h3>My Story</h3>
              <p>
                I'm a dedicated Blockchain Security Engineer currently working at Matter Labs/zkSync, 
                where I focus on securing zero-knowledge proof systems and smart contracts. My journey 
                in cybersecurity began with a Bachelor's degree in Computer Science from Mithibai College, 
                Mumbai University (2014-2017), where I graduated with a CGPA of 6.7/7.0.
              </p>
              
              <p>
                With experience at leading security firms like ConsenSys Diligence and CipherShastra, 
                I've conducted numerous security audits on complex protocols, helped teams adopt more 
                secure system designs, and contributed to the blockchain security community through 
                research and education.
              </p>

              <p>
                I'm passionate about creating CTF challenges, advancing cryptographic research, and 
                fostering cybersecurity awareness. When I'm not auditing smart contracts or researching 
                zero-knowledge proofs, you'll find me sharing knowledge through professional talks and 
                building tools to improve the security landscape.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <h4>🔍 Security Focus</h4>
                  <p>Specialized in smart contract audits, circuit security, and formal verification</p>
                </div>
                <div className="highlight-item">
                  <h4>🎓 Education & Learning</h4>
                  <p>Continuously learning advanced cryptography, ZK-STARK, and cutting-edge security research</p>
                </div>
                <div className="highlight-item">
                  <h4>🏢 Entrepreneurship</h4>
                  <p>Founded CipherShastra and RazzorSec, building security communities and solutions</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-stats">
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Security Audits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Companies Founded</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
