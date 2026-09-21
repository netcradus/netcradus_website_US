import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import './Footer.css';

// Clean SVG Icons for Socials
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterXIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    }
  };

  return (
    <footer className="footer-wrapper">
      {/* Newsletter Bar */}
      <div className="footer-newsletter-banner">
        <div className="container">
          <div className="newsletter-inner glass-panel">
            <div className="newsletter-text-col">
              <span className="cyber-badge">
                <span className="badge-dot" />
                CYBERSECURITY THREAT INTELLIGENCE
              </span>
              <h3 className="newsletter-heading">Stay Ahead of Emerging Threats</h3>
              <p className="newsletter-sub">
                Get monthly adversary research, Zero-Day alerts, and ACIS platform updates directly in your inbox.
              </p>
            </div>

            <div className="newsletter-form-col">
              {subscribed ? (
                <div className="newsletter-success">
                  <CheckCircle2 size={20} className="success-icon" />
                  <span>Thank you! You are subscribed to Netcradus threat intelligence alerts.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your enterprise email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn">
                    <span>Subscribe</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand & Contact Info */}
            <div className="footer-col brand-col">
              <Link to="/" className="footer-brand">
                <div className="brand-logo-badge">
                  <Shield className="brand-shield-icon" size={22} />
                </div>
                <div className="brand-text-block">
                  <span className="brand-name">NETCRADUS</span>
                  <span className="brand-subtext">CYBER IMMUNE SYSTEMS</span>
                </div>
              </Link>

              <p className="footer-brand-desc">
                {companyInfo.description}
              </p>

              {/* Compact Global Offices */}
              <div className="footer-offices-block">
                <span className="footer-offices-label">Global Presence</span>
                <div className="footer-office-item">
                  <span className="footer-country-tag cyan">India</span>
                  <span className="footer-location-text">Ghaziabad, Uttar Pradesh, India</span>
                </div>
                <div className="footer-office-item">
                  <span className="footer-country-tag purple">United States</span>
                  <span className="footer-location-text">Dover, Delaware, USA</span>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="footer-contact-block">
                <div className="contact-row">
                  <Phone size={15} className="contact-icon cyan" />
                  <span>Toll-Free (IN): <a href={`tel:${companyInfo.offices.india.tollFree.replace(/\s+/g, '')}`}>{companyInfo.offices.india.tollFree}</a></span>
                </div>
                <div className="contact-row">
                  <Phone size={15} className="contact-icon purple" />
                  <span>US Desk: <a href={`tel:${companyInfo.offices.usa.phoneRaw}`}>{companyInfo.offices.usa.phone}</a></span>
                </div>
                <div className="contact-row">
                  <Mail size={15} className="contact-icon cyan" />
                  <span><a href={`mailto:${companyInfo.contact.email}`}>{companyInfo.contact.email}</a></span>
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links-list">
                <li><Link to="/services#cybersecurity-engineering">Cybersecurity Engineering</Link></li>
                <li><Link to="/services#managed-soc">24/7 Managed SOC & SIEM</Link></li>
                <li><Link to="/services#cloud-security">Cloud Security & Compliance</Link></li>
                <li><Link to="/services#ai-security">AI & LLM Threat Defense</Link></li>
                <li><Link to="/services#network-security">Network Perimeter Defense</Link></li>
                <li><Link to="/services#vapt">VAPT & Ethical Hacking</Link></li>
                <li><Link to="/services#iam-pam">Identity & PAM Hardening</Link></li>
                <li><Link to="/services#abdm-healthcare">ABDM Healthcare Security</Link></li>
              </ul>
            </div>

            {/* Col 3: Products & Platforms */}
            <div className="footer-col">
              <h4 className="footer-heading">Products & Platforms</h4>
              <ul className="footer-links-list">
                <li><Link to="/products#acis">ACIS Autonomous Immune</Link></li>
                <li><Link to="/products#netxdr">Cyrix XDR / NetXDR</Link></li>
                <li><Link to="/products#netcrad">NetCRAD Security Scanner</Link></li>
                <li><Link to="/products#crm">Netcradus Enterprise CRM</Link></li>
                <li><Link to="/products#platform-siem">AI-SIEM Log Management</Link></li>
                <li><Link to="/products#platform-soar">SOAR Playbook Automation</Link></li>
                <li><Link to="/products#platform-pam">Privileged Access Vaults</Link></li>
              </ul>
            </div>

            {/* Col 4: Company & Compliance */}
            <div className="footer-col">
              <h4 className="footer-heading">Company & Trust</h4>
              <ul className="footer-links-list">
                <li><Link to="/about">About Netcradus</Link></li>
                <li><Link to="/about#mission-vision">Mission & Vision</Link></li>
                <li><Link to="/about#why-us">Why Choose Netcradus</Link></li>
                <li><Link to="/careers">Careers & Openings</Link></li>
                <li><Link to="/contact">Contact 24/7 Security Team</Link></li>
              </ul>

              <div className="footer-compliance-badges">
                <div className="compliance-tag">ISO 27001</div>
                <div className="compliance-tag">SOC 2 Type II</div>
                <div className="compliance-tag">GDPR Ready</div>
                <div className="compliance-tag">NIST Aligned</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container flex-between footer-bottom-inner">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved. Single Agent • Single Console • Autonomous Cyber Defense.
          </div>

          <div className="footer-social-links">
            <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={companyInfo.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <TwitterXIcon />
            </a>
            <a href={companyInfo.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YouTubeIcon />
            </a>
            <a href={companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
