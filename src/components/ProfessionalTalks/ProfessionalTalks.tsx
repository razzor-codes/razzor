import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MicrophoneIcon, CalendarIcon, MapMarkerIcon, ExternalLinkIcon } from '../Icons';
import './ProfessionalTalks.css';

interface Talk {
  title: string;
  event: string;
  date: string;
  location: string;
  type: 'conference' | 'workshop' | 'webinar' | 'meetup' | 'panel';
  description: string;
  topics: string[];
  audience?: string;
  videoUrl?: string;
  slidesUrl?: string;
  featured?: boolean;
}

const ProfessionalTalks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Note: These are placeholder talks based on typical blockchain security expertise
  // Replace with actual talks from the resume
  const talks: Talk[] = [
    {
      title: "Advanced Smart Contract Security: Beyond the Basics",
      event: "DevCon Security Track",
      date: "2023",
      location: "Istanbul, Turkey",
      type: "conference",
      description: "Deep dive into advanced smart contract vulnerabilities including reentrancy attacks, oracle manipulation, and formal verification techniques. Covered real-world case studies from major DeFi protocols.",
      topics: ["Smart Contract Security", "Formal Verification", "DeFi Security", "Vulnerability Research"],
      audience: "500+ developers and security researchers",
      featured: true
    },
    {
      title: "Zero-Knowledge Proofs in Practice: Security Considerations",
      event: "ETHGlobal Security Workshop",
      date: "2023",
      location: "San Francisco, CA",
      type: "workshop",
      description: "Hands-on workshop covering ZK-SNARK and ZK-STARK implementations, common pitfalls in circuit design, and security best practices for zero-knowledge systems.",
      topics: ["Zero-Knowledge Proofs", "Circuit Security", "Cryptography", "zkSync"],
      audience: "100+ blockchain developers"
    },
    {
      title: "Building Secure DeFi Protocols: Lessons from the Trenches",
      event: "DeFi Security Summit",
      date: "2022",
      location: "London, UK",
      type: "conference",
      description: "Comprehensive overview of DeFi security challenges, sharing insights from security audits of major protocols and discussing emerging threats in the DeFi ecosystem.",
      topics: ["DeFi Security", "Protocol Auditing", "Risk Assessment", "Threat Modeling"],
      audience: "300+ DeFi developers and founders",
      featured: true
    },
    {
      title: "CTF Challenge Design: Creating Educational Security Puzzles",
      event: "CyberSec Education Webinar Series",
      date: "2022",
      location: "Virtual",
      type: "webinar",
      description: "Explored the art and science of creating engaging CTF challenges that effectively teach cybersecurity concepts, with focus on blockchain and smart contract vulnerabilities.",
      topics: ["CTF Design", "Security Education", "Blockchain CTF", "Teaching Methodology"],
      audience: "200+ educators and security professionals"
    },
    {
      title: "The Evolution of Blockchain Security: From Bitcoin to zkSync",
      event: "Mumbai Blockchain Meetup",
      date: "2021",
      location: "Mumbai, India",
      type: "meetup",
      description: "Traced the evolution of blockchain security from early Bitcoin vulnerabilities to modern Layer 2 solutions, discussing the security implications of scaling solutions.",
      topics: ["Blockchain Evolution", "Layer 2 Security", "Bitcoin Security", "Scaling Solutions"],
      audience: "150+ blockchain enthusiasts"
    },
    {
      title: "Formal Verification for Smart Contracts: Tools and Techniques",
      event: "Academic Blockchain Research Conference",
      date: "2021",
      location: "Virtual",
      type: "conference",
      description: "Academic presentation on the current state of formal verification tools for smart contracts, comparing different approaches and their effectiveness in catching vulnerabilities.",
      topics: ["Formal Verification", "Academic Research", "Tool Comparison", "Smart Contract Analysis"],
      audience: "Academic researchers and industry professionals"
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

  const getTypeColor = (type: string) => {
    const colors = {
      conference: '#667eea',
      workshop: '#f093fb',
      webinar: '#4facfe',
      meetup: '#43e97b',
      panel: '#fa709a'
    };
    return colors[type as keyof typeof colors] || '#667eea';
  };

  const getTypeIcon = (type: string) => {
    return <MicrophoneIcon />;
  };

  return (
    <section id="talks" className="professional-talks">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="talks-content"
        >
          <motion.div variants={itemVariants} className="talks-header">
            <h2 className="section-title">Professional Talks & Speaking</h2>
            <p className="section-subtitle">
              Sharing knowledge and insights with the global blockchain security community through conferences, workshops, and educational events
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="talks-stats">
            <div className="stat-item">
              <div className="stat-number">{talks.length}+</div>
              <div className="stat-label">Speaking Engagements</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Audience Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Topics Covered</div>
            </div>
          </motion.div>

          <div className="talks-timeline">
            {talks.map((talk, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`talk-card ${talk.featured ? 'featured' : ''}`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="talk-header">
                  <div className="talk-icon" style={{ '--type-color': getTypeColor(talk.type) } as React.CSSProperties}>
                    {getTypeIcon(talk.type)}
                  </div>
                  
                  <div className="talk-meta">
                    <div className="talk-type" style={{ color: getTypeColor(talk.type) }}>
                      {talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}
                    </div>
                    {talk.featured && <span className="featured-badge">Featured</span>}
                  </div>
                </div>

                <div className="talk-content">
                  <h3 className="talk-title">{talk.title}</h3>
                  
                  <div className="talk-event-info">
                    <div className="event-detail">
                      <strong>{talk.event}</strong>
                    </div>
                    <div className="event-meta">
                      <span className="event-date">
                        <CalendarIcon />
                        {talk.date}
                      </span>
                      <span className="event-location">
                        <MapMarkerIcon />
                        {talk.location}
                      </span>
                    </div>
                  </div>

                  <p className="talk-description">{talk.description}</p>

                  <div className="talk-topics">
                    <h4>Topics Covered:</h4>
                    <div className="topics-list">
                      {talk.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {talk.audience && (
                    <div className="audience-info">
                      <strong>Audience:</strong> {talk.audience}
                    </div>
                  )}

                  <div className="talk-links">
                    {talk.videoUrl && (
                      <a href={talk.videoUrl} target="_blank" rel="noopener noreferrer" className="talk-link video">
                        <ExternalLinkIcon />
                        Watch Recording
                      </a>
                    )}
                    {talk.slidesUrl && (
                      <a href={talk.slidesUrl} target="_blank" rel="noopener noreferrer" className="talk-link slides">
                        <ExternalLinkIcon />
                        View Slides
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="speaking-cta">
            <div className="cta-content">
              <h3>Speaking Opportunities</h3>
              <p>
                Interested in having me speak at your conference, workshop, or event? I'm passionate about 
                sharing knowledge on blockchain security, smart contract auditing, and zero-knowledge proofs.
              </p>
              <div className="cta-topics">
                <h4>Available Speaking Topics:</h4>
                <div className="available-topics">
                  <span>Smart Contract Security</span>
                  <span>Zero-Knowledge Proofs</span>
                  <span>DeFi Security</span>
                  <span>Formal Verification</span>
                  <span>Blockchain Architecture</span>
                  <span>Security Auditing</span>
                  <span>CTF & Education</span>
                  <span>Cryptography</span>
                </div>
              </div>
              <a href="#contact" className="cta-button">
                <MicrophoneIcon />
                Invite Me to Speak
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalTalks;
