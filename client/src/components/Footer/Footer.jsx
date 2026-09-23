import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Globe,
  Headphones,
  BarChart3,
  MapPin,
  ChevronRight,
  Phone,
  Mail,
  Send,
  ArrowRight,
  Check
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import netcradusLogo from '../../assets/images/netcradus-logo.png';
import './Footer.css';

// SVG Icons for Social Links with high precision
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterXIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="footer-container" id="site-footer">
      {/* Cybersecurity subtle cyber-glow and wave lines background */}
      <div className="footer-bg-glow" aria-hidden="true" />
      <div className="footer-wave-overlay" aria-hidden="true">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,208C840,213,960,171,1080,154.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="url(#cyber-wave-grad)" />
          <defs>
            <linearGradient id="cyber-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 153, 255, 0.04)" />
              <stop offset="50%" stopColor="rgba(255, 122, 0, 0.05)" />
              <stop offset="100%" stopColor="rgba(0, 102, 204, 0.03)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container footer-content-wrap">
        {/* Main 5-Column Grid */}
        <div className="footer-grid-layout">
          
          {/* 1. BRAND / INTRO & GLOBAL PRESENCE SECTION */}
          <div className="footer-brand-section">
            <Link to="/" className="footer-brand-logo-link" aria-label="Netcradus Home">
              <img
                src={netcradusLogo}
                alt="NETCRADUS"
                className="footer-brand-img"
              />
            </Link>

            <h3 className="footer-brand-motto">
              Stay Ahead of Threats — Real-Time, Every Time.
            </h3>
            <p className="footer-brand-sub">
              Securing Businesses. Enabling a Safer Tomorrow.
            </p>

            {/* 4 Compact Feature Items */}
            <div className="footer-feature-chips">
              <div className="feature-chip">
                <div className="chip-icon-box">
                  <Shield size={16} />
                </div>
                <span className="chip-label">Trusted Security Partner</span>
              </div>

              <div className="feature-chip">
                <div className="chip-icon-box">
                  <Globe size={16} />
                </div>
                <span className="chip-label">Global Presence</span>
              </div>

              <div className="feature-chip">
                <div className="chip-icon-box">
                  <Headphones size={16} />
                </div>
                <span className="chip-label">24/7 Expert Support</span>
              </div>

              <div className="feature-chip">
                <div className="chip-icon-box">
                  <BarChart3 size={16} />
                </div>
                <span className="chip-label">Enterprise Ready</span>
              </div>
            </div>

            {/* Global Presence Glass Card */}
            <div className="footer-global-presence-card">
              <div className="presence-map-bg" aria-hidden="true">
                <svg viewBox="0 0 160 100" fill="currentColor">
                  {/* Subtle vector world map dots */}
                  <circle cx="28" cy="35" r="2" opacity="0.35" />
                  <circle cx="34" cy="32" r="2" opacity="0.4" />
                  <circle cx="40" cy="38" r="2.5" opacity="0.45" />
                  <circle cx="46" cy="42" r="2" opacity="0.4" />
                  <circle cx="30" cy="44" r="1.5" opacity="0.3" />
                  <circle cx="38" cy="50" r="2" opacity="0.3" />
                  <circle cx="44" cy="58" r="2" opacity="0.3" />
                  <circle cx="50" cy="68" r="2" opacity="0.25" />
                  {/* Europe / UK */}
                  <circle cx="82" cy="28" r="3" fill="#ff7a00" opacity="0.9" />
                  <circle cx="90" cy="26" r="2.5" opacity="0.4" />
                  <circle cx="98" cy="30" r="2" opacity="0.4" />
                  <circle cx="106" cy="26" r="2" opacity="0.35" />
                  <circle cx="114" cy="32" r="2" opacity="0.4" />
                  <circle cx="122" cy="36" r="2.5" opacity="0.45" />
                  <circle cx="130" cy="42" r="2" opacity="0.4" />
                  {/* India / SE Asia */}
                  <circle cx="108" cy="46" r="2" opacity="0.35" />
                  <circle cx="114" cy="52" r="2" opacity="0.35" />
                  <circle cx="120" cy="58" r="2" opacity="0.35" />
                  {/* USA */}
                  <circle cx="36" cy="36" r="3" fill="#ff7a00" opacity="0.9" />
                </svg>
              </div>

              <div className="presence-card-content">
                <h4 className="presence-card-heading">GLOBAL PRESENCE</h4>

                <div className="presence-location-row">
                  <MapPin size={14} className="presence-pin-icon" />
                  <div className="presence-loc-text">
                    <span className="presence-country-tag">UK HEADQUARTERS</span>
                    <span className="presence-address">104 A London Road, Leicester, LE2 0QS, United Kingdom</span>
                  </div>
                </div>

                <div className="presence-location-row">
                  <MapPin size={14} className="presence-pin-icon" />
                  <div className="presence-loc-text">
                    <span className="presence-country-tag">United States</span>
                    <span className="presence-address">8 The Green, Suite B, Dover, DE 19901, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. PRODUCTS & PLATFORMS */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">
              Products & Platforms
              <span className="title-orange-line" />
            </h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/acis" className="footer-nav-link">
                  <span>ACIS Autonomous Immune</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/netxdr" className="footer-nav-link">
                  <span>Cyrix XDR / NetXDR</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/netcrad" className="footer-nav-link">
                  <span>NetCRAD Security Scanner</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/crm" className="footer-nav-link">
                  <span>Netcradus Enterprise CRM</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/products/siem" className="footer-nav-link">
                  <span>AI-SIEM Log Management</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/products/soar" className="footer-nav-link">
                  <span>SOAR Playbook Automation</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/products/pam" className="footer-nav-link">
                  <span>Privileged Access Vaults</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. COMPANY */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">
              Company
              <span className="title-orange-line" />
            </h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/about" className="footer-nav-link">
                  <span>About Netcradus</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/about#mission-vision" className="footer-nav-link">
                  <span>Mission & Vision</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/about#why-us" className="footer-nav-link">
                  <span>Why Choose Netcradus</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-nav-link">
                  <span>Careers & Openings</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-nav-link">
                  <span>Contact Us</span>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. GET IN TOUCH */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">
              Get in Touch
              <span className="title-orange-line" />
            </h4>

            <div className="footer-contact-items">
              {/* Toll-Free IN */}
              <a
                href={`tel:${companyInfo.contact.tollFree.replace(/\s+/g, '')}`}
                className="contact-touch-item"
                aria-label={`Call Toll Free ${companyInfo.contact.tollFree}`}
              >
                <div className="touch-icon-circle">
                  <Phone size={14} />
                </div>
                <div className="touch-text-wrap">
                  <span className="touch-sub-label">Toll-Free (IN)</span>
                  <span className="touch-main-text">{companyInfo.contact.tollFree}</span>
                </div>
              </a>

              {/* US Desk */}
              <a
                href={`tel:${companyInfo.offices.usa.phoneRaw}`}
                className="contact-touch-item"
                aria-label={`Call US Desk ${companyInfo.offices.usa.phone}`}
              >
                <div className="touch-icon-circle">
                  <Phone size={14} />
                </div>
                <div className="touch-text-wrap">
                  <span className="touch-sub-label">US Desk</span>
                  <span className="touch-main-text">{companyInfo.offices.usa.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="contact-touch-item"
                aria-label={`Email ${companyInfo.contact.email}`}
              >
                <div className="touch-icon-circle">
                  <Mail size={14} />
                </div>
                <div className="touch-text-wrap">
                  <span className="touch-main-text">{companyInfo.contact.email}</span>
                </div>
              </a>

              {/* Address / Location */}
              <Link
                to="/contact"
                className="contact-touch-item"
                aria-label="Visit Netcradus UK Headquarters"
              >
                <div className="touch-icon-circle">
                  <MapPin size={14} />
                </div>
                <div className="touch-text-wrap">
                  <span className="touch-sub-label">UK Headquarters</span>
                  <span className="touch-main-text">Leicester, United Kingdom</span>
                </div>
              </Link>
            </div>
          </div>

          {/* 5. NEWSLETTER CARD */}
          <div className="footer-newsletter-card-wrap">
            <div className="premium-newsletter-card">
              <div className="newsletter-plane-badge" aria-hidden="true">
                <Send size={15} />
              </div>

              <h4 className="newsletter-card-title">Stay Updated</h4>
              <p className="newsletter-card-desc">
                Get the latest insights, research and updates from Netcradus.
              </p>

              {subscribed ? (
                <div className="newsletter-thankyou">
                  <Check size={16} className="thankyou-check" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form-box">
                  <div className="newsletter-input-group">
                    <Mail size={15} className="newsletter-mail-icon" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="newsletter-clean-input"
                      aria-label="Enter your email for updates"
                    />
                  </div>
                  <button type="submit" className="newsletter-submit-btn" aria-label="Submit email">
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT & LEGAL BAR */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          {/* Brand Logo + Accent + Copyright */}
          <div className="footer-bottom-left">
            <Link to="/" className="bottom-logo-link" aria-label="Netcradus Home">
              <img
                src={netcradusLogo}
                alt="NETCRADUS"
                className="bottom-logo-img"
              />
            </Link>
            <span className="bottom-copyright-text">
              © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.
            </span>
          </div>

          {/* Legal Navigation Links */}
          <div className="footer-bottom-center">
            <Link to="/about#privacy" className="bottom-legal-link">Privacy Policy</Link>
            <span className="bottom-divider" aria-hidden="true">|</span>
            <Link to="/about#terms" className="bottom-legal-link">Terms of Service</Link>
            <span className="bottom-divider" aria-hidden="true">|</span>
            <Link to="/platform" className="bottom-legal-link">Security</Link>
            <span className="bottom-divider" aria-hidden="true">|</span>
            <Link to="/careers" className="bottom-legal-link">Careers</Link>
            <span className="bottom-divider" aria-hidden="true">|</span>
            <Link to="/contact" className="bottom-legal-link">Contact</Link>
          </div>

          {/* Circular Social Buttons */}
          <div className="footer-bottom-right">
            <div className="bottom-social-cluster">
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-social-btn"
                aria-label="Follow Netcradus on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={companyInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-social-btn"
                aria-label="Follow Netcradus on X (Twitter)"
              >
                <TwitterXIcon />
              </a>
              <a
                href={companyInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-social-btn"
                aria-label="Subscribe to Netcradus on YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-social-btn"
                aria-label="Follow Netcradus on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-social-btn"
                aria-label="Follow Netcradus on Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
