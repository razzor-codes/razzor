import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EnvelopeIcon, 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon,
  MapMarkerIcon,
  PaperPlaneIcon
} from '../Icons';
import './Contact.css';

// Set REACT_APP_FORMSPREE_ID in .env to enable real submissions.
// Until then the form falls back to opening the visitor's mail client, so a
// message is never silently dropped.
const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;
const CONTACT_EMAIL = 'razzor@ciphershastra.com';

type SubmitStatus = 'idle' | 'success' | 'mailto' | 'error';

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
  const [status, setStatus] = useState<SubmitStatus>('idle');

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
    setStatus('idle');

    // No backend configured — hand off to the visitor's mail client rather
    // than pretending the message was delivered.
    if (!FORMSPREE_ID) {
      const body = `${formData.message}\n\n--\n${formData.name} <${formData.email}>`;
      window.location.href =
        `mailto:${CONTACT_EMAIL}` +
        `?subject=${encodeURIComponent(formData.subject)}` +
        `&body=${encodeURIComponent(body)}`;
      setIsSubmitting(false);
      setStatus('mailto');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);

      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('success');
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      value: 'United Arab Emirates',
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
            <span className="section-eyebrow">07 // Contact</span>
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
                    whileHover={{ y: -2 }}
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

                {status !== 'idle' && (
                  <motion.p
                    className={`form-status ${status === 'error' ? 'is-error' : ''}`}
                    role="status"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {status === 'success' &&
                      "Thanks for reaching out — I'll get back to you within 24–48 hours."}
                    {status === 'mailto' &&
                      `Your mail app should have opened with the message ready to send. If it didn't, email me directly at ${CONTACT_EMAIL}.`}
                    {status === 'error' &&
                      `Something went wrong sending that. Please email me directly at ${CONTACT_EMAIL}.`}
                  </motion.p>
                )}

              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
