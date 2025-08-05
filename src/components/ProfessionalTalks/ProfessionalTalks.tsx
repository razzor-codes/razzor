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

  // Note: These are your actual professional talks and speaking engagements
  const talks: Talk[] = [
    {
      title: "PLONKIsh Verifiers and the Problem with 0s",
      event: "TBD",
      date: "TBD",
      location: "TBD",
      type: "conference",
      description: "Advanced technical presentation on PLONKish verifiers, exploring the mathematical challenges and security implications when dealing with zero values in zero-knowledge proof systems.",
      topics: ["PLONKish", "Zero-Knowledge Proofs", "Verifiers", "Cryptography"],
      featured: true
    },
    {
      title: "ZK Verifiers Exposed: Lessons from Real Bugs and Fixes",
      event: "ETHTaipei 2025",
      date: "2025",
      location: "Taipei, Taiwan",
      type: "conference",
      description: "Deep dive into real-world zero-knowledge verifier vulnerabilities, presenting actual bugs found in production systems and the lessons learned from fixing them. This talk provides practical insights into common pitfalls and security best practices for ZK implementations.",
      topics: ["Zero-Knowledge Proofs", "Verifier Security", "Bug Analysis", "Smart Contract Auditing"],
      videoUrl: "https://youtu.be/E84dN1XbT2g?si=Kgoc5glnYK-rsafu",
      audience: "Blockchain developers and security researchers",
      featured: true
    },
    {
      title: "Quantum Robust Ethereum: What's Next?",
      event: "Web3Conf Goa 2024",
      date: "2024",
      location: "Goa, India",
      type: "conference",
      description: "Exploring the future of Ethereum in a post-quantum world, discussing quantum-resistant cryptographic approaches and their implications for blockchain security.",
      topics: ["Post-Quantum Cryptography", "Ethereum", "Blockchain Security", "Quantum Computing"],
      featured: true
    },
    {
      title: "Phishing Smart Contracts for Fun & Profit",
      event: "c0c0n 16",
      date: "2023",
      location: "Kochi, India",
      type: "conference",
      description: "Demonstrated sophisticated phishing techniques targeting smart contract users, showing how attackers exploit user interface vulnerabilities and social engineering in DeFi applications.",
      topics: ["Smart Contract Security", "Phishing", "Social Engineering", "DeFi Security"],
      videoUrl: "https://www.youtube.com/watch?v=VIweBz_6IsU",
      audience: "Security researchers and ethical hackers",
      featured: true
    },
    {
      title: "Not So Famous Attack Vectors in the World of Smart Contract Security",
      event: "ETHDubai, Nullc0n Berlin",
      date: "2023",
      location: "Dubai, UAE & Berlin, Germany",
      type: "conference",
      description: "Unveiled lesser-known attack vectors in smart contract security, going beyond common vulnerabilities to explore sophisticated exploitation techniques that often go unnoticed.",
      topics: ["Smart Contract Security", "Attack Vectors", "Vulnerability Research", "Blockchain Security"],
      videoUrl: "https://www.youtube.com/watch?v=tR9X5VZ-Foo",
      audience: "Blockchain developers and security researchers"
    },
    {
      title: "Detecting Price Manipulation Attacks",
      event: "SANS Blockchain Security Summit 2022",
      date: "2022",
      location: "Virtual",
      type: "conference",
      description: "Comprehensive analysis of price manipulation attacks in DeFi protocols, including oracle manipulation, flash loan attacks, and detection mechanisms.",
      topics: ["Price Manipulation", "Oracle Security", "Flash Loans", "DeFi Security"],
      videoUrl: "https://www.youtube.com/watch?v=Nm8otLN5fvw",
      audience: "300+ security professionals and DeFi developers"
    },
    {
      title: "Preventing Sandwich Attacks with Recurrent and Recursive Zero Knowledge Proofs",
      event: "DEFCON 29",
      date: "2021",
      location: "Virtual",
      type: "conference",
      description: "Novel approach to preventing sandwich attacks in DeFi using advanced zero-knowledge proof techniques, demonstrating practical implementations and security benefits.",
      topics: ["Zero-Knowledge Proofs", "Sandwich Attacks", "MEV", "DeFi Security"],
      videoUrl: "https://www.youtube.com/watch?v=pRq1B9mMdkE",
      audience: "1000+ security researchers and hackers",
      featured: true
    },
    {
      title: "Post Quantum Cryptography & 5G Security",
      event: "Nullc0n 2021",
      date: "2021",
      location: "Virtual",
      type: "conference",
      description: "Explored the intersection of post-quantum cryptography and 5G network security, discussing future-proofing strategies for next-generation communication systems.",
      topics: ["Post-Quantum Cryptography", "5G Security", "Network Security", "Cryptography"],
      audience: "Security professionals and telecom engineers"
    },
    {
      title: "Verifiable Delay Functions for Preventing DoS/DDoS Attacks on Ethereum2.0",
      event: "DEFCON 28",
      date: "2020",
      location: "Virtual",
      type: "conference",
      description: "Innovative use of Verifiable Delay Functions (VDFs) to mitigate DoS and DDoS attacks on Ethereum 2.0, presenting both theoretical framework and practical implementation.",
      topics: ["Verifiable Delay Functions", "DoS Prevention", "Ethereum 2.0", "Consensus Security"],
      videoUrl: "https://www.youtube.com/watch?v=OoIaTQhUi8E",
      audience: "800+ blockchain developers and security researchers"
    },
    {
      title: "Modifying Jigsaw to Evade ML Malware Classifiers",
      event: "Red Team Security Summit 2020",
      date: "2020",
      location: "Virtual",
      type: "conference",
      description: "Demonstrated techniques for modifying the Jigsaw ransomware to evade machine learning-based malware detection systems, highlighting gaps in current ML security approaches.",
      topics: ["Malware Evasion", "Machine Learning Security", "Red Team", "Adversarial ML"],
      audience: "Red team professionals and ML security researchers"
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
              <div className="stat-number">10+</div>
              <div className="stat-label">Speaking Engagements</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Audience Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
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
