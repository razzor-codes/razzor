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
  type: 'audit' | 'research' | 'tool';
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: "Linea Plonk Verifier",
      description: "Security audit of Linea's PLONK verifier implementation, focusing on zero-knowledge proof verification security and circuit integrity.",
      technologies: ["Solidity", "ZK-PLONK", "Formal Verification", "Circuit Analysis"],
      link: "#",
      type: "audit",
      featured: true
    },
    {
      title: "Linea Message Service & ZK Rollup",
      description: "Comprehensive security assessment of Linea's message service and canonical token bridge, ensuring cross-chain security.",
      technologies: ["Solidity", "Layer 2", "Bridge Security", "ZK Rollups"],
      link: "#",
      type: "audit",
      featured: true
    },
    {
      title: "Forta Delegated Staking",
      description: "Security audit of Forta's delegated staking mechanism, focusing on economic security and delegation logic.",
      technologies: ["Solidity", "DeFi", "Staking Protocols", "Economic Security"],
      link: "#",
      type: "audit"
    },
    {
      title: "Gearbox Finance V2",
      description: "End-to-end security audit of Gearbox Finance V2 protocol, covering lending, leverage, and liquidation mechanisms.",
      technologies: ["Solidity", "DeFi", "Lending", "Liquidations"],
      link: "#",
      type: "audit"
    },
    {
      title: "CipherShastra",
      description: "Founded a blockchain security company providing comprehensive smart contract auditing services and security consulting.",
      technologies: ["Security Consulting", "Smart Contracts", "Team Building"],
      link: "#",
      type: "research",
      featured: true
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
                className={`project-card ${project.featured ? 'featured' : ''}`}
              >
                <div className="project-header">
                  <div className="project-icon">
                    {getProjectIcon(project.type)}
                  </div>
                  <div className="project-type">
                    {getProjectTypeLabel(project.type)}
                  </div>
                  {project.featured && <div className="featured-badge">Featured</div>}
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
                      View Report
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <GithubIcon />
                      Source Code
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
