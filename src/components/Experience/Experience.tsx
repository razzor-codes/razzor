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
      title: "Blockchain Security Engineer",
      company: "ADI Foundation",
      period: "June 2026 - Present",
      current: true,
      description: [
        "Lead security audits and code reviews across the organisation's codebases",
        "Building the AppSec programme: policies, procedures and engineering guidelines",
        "Own incident response and security triage",
        "Added automated security checks to CI/CD pipelines to catch vulnerabilities before release",
        "Threat-model new systems before launch, reviewing backend services, APIs and infrastructure alongside smart contracts",
        "Use AI tooling to speed up code review and security triage"
      ]
    },
    {
      title: "Lead Security Engineer (Blockchain)",
      company: "Reckong Tech",
      period: "Sep 2025 - May 2026",
      description: [
        "Ran end-to-end security reviews of smart contracts and ZK circuits and set company-wide security policies",
        "Built custom tools and internal security libraries to harden the development lifecycle",
        "Managed external audits with top-tier firms as the primary security liaison, overseeing remediation",
        "Threat-modelled new protocols and features before launch so security requirements were set early"
      ]
    },
    {
      title: "Security Engineer",
      company: "Matter Labs/zkSync",
      period: "March 2024 - August 2025",
      description: [
        "Security-reviewed zkSync's smart contracts and ZK circuits, new and existing",
        "Built testing and formal-verification tooling to catch bugs earlier",
        "Led external audits as the point of contact between zkSync and audit firms",
        "Reviewed L1 ↔ L2 bridge and messaging contracts",
        "Handled incident response and security triage, including external bug bounty reports",
        "Presented ZK verifier bug research at ETHTaipei 2025"
      ]
    },
    {
      title: "Security Auditor",
      company: "ConsenSys Diligence",
      period: "June 2022 - Feb 2024",
      description: [
        "Audited complex DeFi and ZK protocols, including Linea's PLONK verifier and canonical token bridge, Gearbox V2 and Forta delegated staking",
        "Helped audited teams move to safer system designs, not just patch individual bugs",
        "Contributed to Diligence's in-house security tooling, building analysis tools and vulnerability detectors used in audits",
        "Wrote threat models and design reviews for audited teams",
        "Researched new attack vectors and shared them with the team and on stage at ETHDubai, Nullc0n Berlin and c0c0n"
      ]
    },
    {
      title: "Blockchain Smart Contract Auditor",
      company: "QuillAudits",
      period: "May 2021 - June 2022",
      description: [
        "Audited DeFi protocols including YoloRekt and the Nord Finance suite, using manual review plus functional, automated and fuzz testing",
        "Worked with clients on fixes for the issues each audit found",
        "Interviewed candidates to grow the audit team"
      ]
    },
    {
      title: "Infosec Instructor",
      company: "TSPL's Explorium",
      period: "Jul 2018 - May 2019",
      description: [
        "Taught programming, networking, cyber-security and software design",
        "Planned and revised the curriculum and course materials"
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
            <span className="section-eyebrow">03 // Experience</span>
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
