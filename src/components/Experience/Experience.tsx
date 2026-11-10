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
      period: "June 2026 - Nov 2026",
      description: [
        "Audited the smart contracts and zkEVM circuits in-house, and led security reviews across the organisation's codebases and dApps",
        "Ran the public bug bounty programs on HackenProof (smart contracts, zkEVM, PredictStreet): validated and triaged reports",
        "Wrote the security guidelines and upgrade policy, and a P0/P1/P2 tracker of fixes due before each upgrade",
        "Pentested the wallets; closed contract and repository issues raised in Aikido"
      ]
    },
    {
      title: "Lead Security Engineer (Blockchain)",
      company: "Reckong Tech",
      period: "Sep 2025 - May 2026",
      description: [
        "Designed, built and audited client smart contract protocols end to end, from threat model to launch, including a points and rewards system for airline loyalty programs"
      ]
    },
    {
      title: "Security Engineer",
      company: "Matter Labs (zkSync)",
      period: "March 2024 - August 2025",
      description: [
        "Audited new and existing smart contracts and ZK circuits in-house",
        "Led an incident response that recovered ~$500k across ZK chains: found every funded address exposed to cross-chain replay by the EVM emulator upgrade, and recovered them atomically with it",
        "Wrote zkSync's FFLONK proof verifier from scratch; it runs in production",
        "Managed Matter Labs' external audits by OpenZeppelin (chain contract upgrades) and Nethermind (PLONK verifier), through to fixes",
        "Shipped TEE attestation contracts built on Automata",
        "Presented ZK verifier bug research at ETHTaipei 2025"
      ]
    },
    {
      title: "Security Auditor",
      company: "ConsenSys Diligence",
      period: "June 2022 - Feb 2024",
      description: [
        "Audited rollups, bridges, ZK verifiers and DeFi: Linea (PLONK verifier, message service, token bridge), Forta delegated staking, Gearbox V2",
        "Wrote threat models and design recommendations for client teams",
        "Researched new attack vectors and shared them with the team and on stage at ETHDubai, Nullc0n Berlin and c0c0n"
      ]
    },
    {
      title: "Smart Contract Auditor",
      company: "QuillAudits",
      period: "May 2021 - June 2022",
      description: [
        "Audited smart contracts, including YoloRekt and the Nord Finance suite, with manual review, automated and fuzz testing; guided clients through fixes",
        "Interviewed candidates for the audit team"
      ]
    },
    {
      title: "Infosec Instructor",
      company: "TSPL's Explorium",
      period: "Jul 2018 - May 2019",
      description: [
        "Taught programming, networking and cybersecurity"
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
