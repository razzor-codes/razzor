import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLinkIcon, 
  GithubIcon, 
  ShieldIcon, 
  CodeIcon, 
  LockIcon 
} from '../Icons';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  additionalLink?: string;
  type: 'audit' | 'research' | 'tool';
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: "CipherShastra",
      description: "Founded a blockchain security company providing comprehensive smart contract auditing services and security consulting.",
      technologies: ["Security Consulting", "Smart Contracts", "Team Building"],
      link: "https://ciphershastra.com",
      type: "research"
    },
    {
      title: "Linea Plonk Verifier",
      description: "Security audit of Linea's PLONK verifier implementation, focusing on zero-knowledge proof verification security and circuit integrity.",
      technologies: ["Solidity", "ZK-PLONK", "Formal Verification", "Circuit Analysis"],
      link: "https://diligence.consensys.io/audits/2023/06/linea-plonk-verifier/",
      type: "audit"
    },
    {
      title: "Linea Message Service & Token Bridge",
      description: "Comprehensive security assessment of Linea's message service and canonical token bridge, ensuring cross-chain security and bridge integrity.",
      technologies: ["Solidity", "Layer 2", "Bridge Security", "ZK Rollups", "Cross-chain"],
      link: "https://diligence.consensys.io/audits/2023/06/linea-message-service/",
      github: "https://diligence.consensys.io/audits/2023/06/linea-canonical-token-bridge/",
      type: "audit"
    },
    {
      title: "Gearbox Finance V2",
      description: "End-to-end security audit of Gearbox Finance V2 protocol, covering lending, leverage, and liquidation mechanisms.",
      technologies: ["Solidity", "DeFi", "Lending", "Liquidations"],
      link: "https://github.com/Gearbox-protocol/security/blob/main/audits/2022%20Sep%20-%20Consensys%20Diligence.pdf",
      type: "audit"
    },
    {
      title: "Forta Delegated Staking",
      description: "Security audit of Forta's delegated staking mechanism, focusing on economic security and delegation logic.",
      technologies: ["Solidity", "DeFi", "Staking Protocols", "Economic Security"],
      link: "https://diligence.consensys.io/audits/2022/11/forta-delegated-staking/",
      type: "audit"
    },
    {
      title: "YoloRekt",
      description: "Security audit of YoloRekt protocol, focusing on DeFi security best practices and smart contract vulnerabilities.",
      technologies: ["Solidity", "DeFi", "Smart Contract Security", "Risk Assessment"],
      link: "https://www.quillaudits.com/leaderboard/yolorekt",
      type: "audit"
    },
    {
      title: "Nord Finance Ecosystem",
      description: "Comprehensive security audit suite covering Nord Advisory, Nord Finance, and Nord Loan protocols, ensuring end-to-end financial security.",
      technologies: ["Solidity", "DeFi", "Lending", "Financial Protocols", "Advisory"],
      link: "https://github.com/Quillhash/QuillAudit_Reports/blob/master/Nord%20Finance%20Smart%20Contract%20Audit%20Report%20-%20QuillAudits.pdf",
      github: "https://github.com/Quillhash/QuillAudit_Reports/blob/master/Nord%20Advisory%20Smart%20Contract%20Audit%20Report%20-%20QuillAudits.pdf",
      additionalLink: "https://github.com/Quillhash/QuillAudit_Reports/blob/master/NordLoan%20Smart%20Contract%20Audit%20Report%20-%20QuillAudits.pdf",
      type: "audit"
    },
    {
      title: "PLONKish Verifiers Research",
      description: "Research on PLONKish verifiers and the security implications of zero values in polynomial commitments.",
      technologies: ["Zero Knowledge", "Cryptography", "Research", "PLONK"],
      type: "research"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getProjectIcon = (type: string): React.ReactElement => {
    switch (type) {
      case 'audit':
        return <ShieldIcon />;
      case 'research':
        return <LockIcon />;
      case 'tool':
        return <CodeIcon />;
      default:
        return <CodeIcon />;
    }
  };

  const getProjectTypeLabel = (type: string) => {
    switch (type) {
      case 'audit':
        return 'Security Audit';
      case 'research':
        return 'Research';
      case 'tool':
        return 'Development';
      default:
        return 'Project';
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-content"
        >
          <motion.div variants={itemVariants} className="projects-header">
            <h2 className="section-title">Featured Work & Projects</h2>
            <p className="section-subtitle">
              Selected security audits, research projects, and contributions to the blockchain security ecosystem
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card"
              >
                <div className="project-header">
                  <div className="project-icon">
                    {getProjectIcon(project.type)}
                  </div>
                  <div className="project-meta">
                    <div className="project-type">
                      {getProjectTypeLabel(project.type)}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon />
                      {project.title === "Linea Message Service & Token Bridge" ? "Message Service" : 
                       project.title === "Nord Finance Ecosystem" ? "Nord Finance" : 
                       project.title === "CipherShastra" ? "Visit Site" : "View Report"}
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon />
                      {project.title === "Linea Message Service & Token Bridge" ? "Token Bridge" : 
                       project.title === "Nord Finance Ecosystem" ? "Nord Advisory" : "Source Code"}
                    </a>
                  )}
                  {project.additionalLink && (
                    <a 
                      href={project.additionalLink} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon />
                      Nord Loan
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
