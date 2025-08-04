import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShieldIcon,
  CodeIcon,
  CogsIcon,
  ToolsIcon,
  LockIcon
} from '../Icons';
import './Skills.css';

interface SkillCategory {
  title: string;
  icon: React.ComponentType;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: "Security & Auditing",
      icon: ShieldIcon,
      color: "#ef4444",
      skills: [
        "Smart Contract Auditing",
        "Formal Verification",
        "Static Analysis",
        "Threat Modeling",
        "Vulnerability Assessment",
        "Security Architecture Review",
        "Penetration Testing",
        "Code Review"
      ]
    },
    {
      title: "Blockchain & Cryptography",
      icon: LockIcon,
      color: "#8b5cf6",
      skills: [
        "Zero Knowledge Proofs",
        "Elliptic Curve Cryptography",
        "Hash Functions",
        "Digital Signatures",
        "Merkle Trees",
        "Consensus Mechanisms",
        "Layer 2 Solutions",
        "Cross-chain Protocols"
      ]
    },
    {
      title: "Programming Languages",
      icon: CodeIcon,
      color: "#06b6d4",
      skills: [
        "Solidity",
        "Rust",
        "Python",
        "JavaScript/TypeScript",
        "Go",
        "C++",
        "Assembly",
        "SQL"
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: ToolsIcon,
      color: "#f59e0b",
      skills: [
        "Foundry",
        "Hardhat",
        "Slither",
        "Mythril",
        "Echidna",
        "Manticore",
        "Surya",
        "Remix IDE"
      ]
    },
    {
      title: "Research & Development",
      icon: CogsIcon,
      color: "#10b981",
      skills: [
        "Protocol Design",
        "Economic Models",
        "Game Theory",
        "Formal Methods",
        "Research Publications",
        "Technical Writing",
        "Open Source Contributions",
        "Community Engagement"
      ]
    }
  ];  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-content"
        >
          <motion.div variants={itemVariants} className="skills-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technical skills, certifications, and areas of expertise in blockchain security and beyond
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-category"
                whileHover={{ y: -5 }}
              >
                <div 
                  className="category-header"
                  style={{ '--category-color': category.color } as React.CSSProperties}
                >
                  <div className="category-icon">
                    <category.icon />
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="skill-bullet"></span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants} 
            className="skills-summary"
          >
            <div className="summary-content">
              <h3>Continuous Learning</h3>
              <p>
                Currently expanding expertise in advanced cryptography, ZK-STARKs, and cutting-edge 
                blockchain security research. Always exploring new vulnerabilities, attack vectors, 
                and defensive strategies to stay ahead in the rapidly evolving blockchain security landscape.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
