import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, CalendarIcon } from '../Icons';
import './Experience.css';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      title: "Security Engineer",
      company: "Matter Labs/zkSync",
      period: "March 2024 - Present",
      current: true,
      description: [
        "Perform Security Reviews on existing and new smart contracts and circuits",
        "Research and Engineer competitive solutions/tools to improve the security landscape with testing and formal verification",
        "Lead external audits and communications",
        "Share new research at security conferences"
      ]
    },
    {
      title: "Security Auditor",
      company: "ConsenSys Diligence",
      period: "June 2022 - Feb 2024",
      description: [
        "Performed Security Audits on Complex Protocols",
        "Helped auditee teams adopt better and more secure system designs",
        "Conducted manual reviews, functional testing, automated testing, and fuzz testing",
        "Provided client interactions and suggestions to resolve reported issues"
      ]
    },
    {
      title: "Security Auditor",
      company: "CipherShastra",
      period: "May 2021 - June 2022",
      description: [
        "Conducted Smart Contract Audits including Manual Review and Automated Testing",
        "Provided client interactions and suggestions for issue resolution",
        "Conducted interviews for new joiners to bring fresh talent",
        "Developed comprehensive security assessment methodologies"
      ]
    },
    {
      title: "Infosec Instructor",
      company: "TSPL's Explorium",
      period: "Jul 2018 - May 2019",
      description: [
        "Prepared and delivered lectures on programming, networking, cyber-security, and software design",
        "Planned, evaluated, and revised curricula and course materials",
        "Collaborated with colleagues to address teaching and research issues",
        "Maintained computer equipment used in instruction"
      ]
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-content"
        >
          <motion.div variants={itemVariants} className="experience-header">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              My journey through various roles in blockchain security and cybersecurity education
            </p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`timeline-item ${exp.current ? 'current' : ''}`}
              >
                <div className="timeline-marker">
                  <BriefcaseIcon />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-company">{exp.company}</div>
                    <div className="timeline-period">
                      <CalendarIcon />
                      {exp.period}
                      {exp.current && <span className="current-badge">Current</span>}
                    </div>
                  </div>
                  <ul className="timeline-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
