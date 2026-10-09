import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCapIcon, AwardIcon } from '../Icons';
import './Education.css';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education: EducationItem[] = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Mithibai College",
      location: "Mumbai University, India",
      period: "2014 - 2017",
      gpa: "6.7/7.0"
    }
  ];

  const certifications: CertificationItem[] = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "October 2020"
    },
    {
      name: "Blockchain Security",
      issuer: "Infosec",
      date: "August 2020"
    },
    {
      name: "Autopsy Digital Forensics",
      issuer: "Basis Technology",
      date: "June 2020"
    },
    {
      name: "CCNA CyberOps",
      issuer: "CISCO",
      date: "March 2018"
    },
    {
      name: "Python3 Programming",
      issuer: "Sololearn",
      date: "August 2017"
    },
    {
      name: "Network Devices",
      issuer: "Cybrary",
      date: "August 2017"
    },
    {
      name: "Cross-Site Scripting (XSS)",
      issuer: "Cybrary",
      date: "August 2017"
    },
    {
      name: "MTA: Security Fundamentals",
      issuer: "Microsoft",
      date: "November 2016"
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="education-content"
        >
          <motion.div variants={itemVariants} className="education-header">
            <span className="section-eyebrow">06 // Education</span>
            <h2 className="section-title">Education & Certifications</h2>
            <p className="section-subtitle">
              Academic background and professional certifications in cybersecurity and blockchain technology
            </p>
          </motion.div>

          {/* Formal Education */}
          <motion.div variants={itemVariants} className="education-section">
            <div className="section-header">
              <GraduationCapIcon />
              <h3>Formal Education</h3>
            </div>
            
            <div className="education-timeline">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="education-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="education-badge">
                    <GraduationCapIcon />
                  </div>
                  
                  <div className="education-details">
                    <div className="education-header-info">
                      <h4 className="degree">{item.degree}</h4>
                      <span className="period">{item.period}</span>
                    </div>
                    
                    <div className="institution-info">
                      <h5 className="institution">{item.institution}</h5>
                      <span className="location">{item.location}</span>
                    </div>
                    
                    {item.gpa && (
                      <div className="gpa">
                        <span className="gpa-label">CGPA:</span>
                        <span className="gpa-value">{item.gpa}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Certifications */}
          <motion.div variants={itemVariants} className="certifications-section">
            <div className="section-header">
              <AwardIcon />
              <h3>Professional Certifications</h3>
            </div>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="certification-card"
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  <div className="cert-icon">
                    <AwardIcon />
                  </div>
                  
                  <div className="cert-info">
                    <h4 className="cert-name">{cert.name}</h4>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="credential-id">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
