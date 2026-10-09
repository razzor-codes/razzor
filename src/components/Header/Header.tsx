import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../hooks/useTheme';
import './Header.css';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Talks', href: '#talks' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 24);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // The section whose top edge last passed the header line is the active one.
      let current = NAV_ITEMS[0].href.slice(1);
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.href.slice(1));
        if (element && element.getBoundingClientRect().top <= 120) {
          current = item.href.slice(1);
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and allow Escape to dismiss while the mobile menu is open.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        role="presentation"
      />

      <div className="container">
        <div className="header-content">
          <a
            className="logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <span className="logo-mark">TR</span>
            <span className="logo-text">
              Tejaswa Rastogi
              <span className="logo-role">Blockchain Security</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {isActive && (
                    <motion.span
                      className="nav-pill"
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="nav-label">{item.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="header-actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <button
              type="button"
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="mobile-nav"
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!isMobileMenuOpen}
      >
        {NAV_ITEMS.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={`mobile-nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            style={{ transitionDelay: isMobileMenuOpen ? `${index * 35}ms` : '0ms' }}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
          >
            <span className="mobile-nav-index">{String(index + 1).padStart(2, '0')}</span>
            {item.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
