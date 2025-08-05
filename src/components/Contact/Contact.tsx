import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon,
  MapMarkerIcon,
  PaperPlaneIcon
} from '../Icons';
import './Contact.css';

interface ContactInfo {
  icon: React.ComponentType;
  label: string;
  value: string;
  link: string | null;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'razzor@ciphershastra.com',
      link: 'mailto:razzor@ciphershastra.com'
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/razzor',
      link: 'https://linkedin.com/in/razzor'
    },
    {
      icon: TwitterIcon,
      label: 'Twitter',
      value: 'x.com/razzor_tweet',
      link: 'https://x.com/razzor_tweet'
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'github.com/razzorsec',
      link: 'https://github.com/razzorsec'
    },
    {
      icon: MapMarkerIcon,
      label: 'Location',
      value: 'India',
      link: null
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

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contact-content"
        >
          <motion.div variants={itemVariants} className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to discuss blockchain security, potential collaborations, or have questions about my work? 
              I'd love to hear from you!
            </p>
          </motion.div>

          <div className="contact-body">
            <motion.div variants={itemVariants} className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                Whether you're looking for security auditing services, want to discuss research 
                opportunities, or just want to connect with a fellow blockchain security enthusiast, 
                feel free to reach out through any of these channels.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-method"
                    variants={itemVariants}
                    whileHover={{ y: -2, scale: 1.05 }}
                    data-tooltip={info.value}
                  >
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="method-icon"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <info.icon />
                      </a>
                    ) : (
                      <div className="method-icon">
                        <info.icon />
                      </div>
                    )}
                    <div className="method-content">
                      <div className="method-label">{info.label}</div>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="method-value"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="method-value">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="availability">
                <h4>Availability</h4>
                <p>
                  Currently open for consulting opportunities, security audits, and speaking 
                  engagements. Response time is typically within 24-48 hours.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me more about your project or question..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperPlaneIcon />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
