import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCapIcon, AwardIcon, BookIcon } from '../Icons';
import './Education.css';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description: string;
  achievements?: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
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
      gpa: "6.7/7.0",
      description: "Comprehensive computer science education with focus on algorithms, data structures, software engineering, and computer security fundamentals.",
      achievements: [
        "Strong foundation in programming and software development",
        "Early exposure to cybersecurity concepts",
        "Participated in coding competitions and hackathons",
        "Developed interest in blockchain and cryptography"
      ]
    }
  ];

  const certifications: CertificationItem[] = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2020",
      description: "Comprehensive ethical hacking and penetration testing certification"
    },
    {
      name: "CISSP",
      issuer: "ISC²",
      date: "2021",
      description: "Advanced cybersecurity management and architecture certification"
    },
    {
      name: "Security+ CompTIA",
      issuer: "CompTIA",
      date: "2019",
      description: "Foundation-level cybersecurity certification covering core security concepts"
    },
    {
      name: "OSCP",
      issuer: "Offensive Security",
      date: "2022",
      description: "Hands-on penetration testing certification with practical lab experience"
    },
    {
      name: "Blockchain Security Certification",
      issuer: "ConsenSys Academy",
      date: "2021",
      description: "Specialized certification in blockchain and smart contract security"
    },
    {
      name: "Smart Contract Auditor",
      issuer: "OpenZeppelin",
      date: "2022",
      description: "Advanced certification in smart contract security auditing methodologies"
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
                    
                    <p className="education-description">{item.description}</p>
                    
                    {item.achievements && (
                      <div className="achievements">
                        <h6>Key Highlights:</h6>
                        <ul>
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
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
                    <p className="cert-description">{cert.description}</p>
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

          {/* Continuous Learning */}
          <motion.div variants={itemVariants} className="learning-section">
            <div className="section-header">
              <BookIcon />
              <h3>Continuous Learning</h3>
            </div>
            
            <div className="learning-content">
              <p>
                Committed to staying current with the rapidly evolving cybersecurity and blockchain landscape through:
              </p>
              
              <div className="learning-areas">
                <div className="learning-item">
                  <h5>Research & Publications</h5>
                  <p>Active research in zero-knowledge proofs, formal verification, and novel attack vectors</p>
                </div>
                
                <div className="learning-item">
                  <h5>Conference Participation</h5>
                  <p>Regular attendance at security conferences, workshops, and blockchain summits</p>
                </div>
                
                <div className="learning-item">
                  <h5>Open Source Contributions</h5>
                  <p>Contributing to security tools, educational resources, and blockchain protocols</p>
                </div>
                
                <div className="learning-item">
                  <h5>Community Engagement</h5>
                  <p>Creating CTF challenges, mentoring, and sharing knowledge through professional talks</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
