import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Shield, 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Cloud, 
  Cpu, 
  Network, 
  Crosshair, 
  KeyRound, 
  HeartPulse,
  Lock,
  Layers
} from 'lucide-react';
import Button from '../common/Button';
import { companyInfo } from '../../data/companyInfo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const location = useLocation();

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdown(false);
        setProductsDropdown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setProductsDropdown(false);
  }, [location.pathname, location.hash]);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-top-bar">
        <div className="container flex-between">
          <div className="top-bar-item">
            <span className="live-dot" />
            <span className="top-bar-text">24/7 Global Security Operations Center Active</span>
          </div>
          <div className="top-bar-actions">
            <a href={`tel:${companyInfo.contact.tollFree.replace(/\s+/g, '')}`} className="top-bar-link" aria-label={`Call Toll Free ${companyInfo.contact.tollFree}`}>
              <PhoneCall size={12} className="top-icon" />
              <span>Toll-Free: {companyInfo.contact.tollFree}</span>
            </a>
            <span className="top-bar-divider" aria-hidden="true">|</span>
            <a href={`mailto:${companyInfo.contact.email}`} className="top-bar-link" aria-label={`Email ${companyInfo.contact.email}`}>
              <span>{companyInfo.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar-main" aria-label="Main Navigation">
        <div className="container flex-between">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" aria-label="Netcradus Home">
            <div className="brand-logo-badge">
              <Shield className="brand-shield-icon" size={24} />
              <div className="shield-glow" />
            </div>
            <div className="brand-text-block">
              <span className="brand-name">NETCRADUS</span>
              <span className="brand-subtext">CYBER IMMUNE SYSTEMS</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="navbar-links-desktop">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link has-dropdown ${isActive ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={servicesDropdown}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`dropdown-arrow ${servicesDropdown ? 'rotated' : ''}`} />
              </NavLink>

              {servicesDropdown && (
                <div className="mega-dropdown-menu glass-panel" role="menu">
                  <div className="mega-dropdown-header">
                    <span className="mega-title">Enterprise Cybersecurity Services</span>
                    <Link to="/services" className="mega-view-all">View All Services <ArrowRight size={12} /></Link>
                  </div>
                  <div className="mega-dropdown-grid">
                    <Link to="/services#cybersecurity-engineering" className="mega-item" role="menuitem">
                      <ShieldCheck size={18} className="mega-icon cyan" />
                      <div>
                        <div className="mega-item-title">Cybersecurity Engineering</div>
                        <div className="mega-item-desc">Zero Trust architecture & hybrid hardening</div>
                      </div>
                    </Link>
                    <Link to="/services#managed-soc" className="mega-item" role="menuitem">
                      <Activity size={18} className="mega-icon blue" />
                      <div>
                        <div className="mega-item-title">24/7 Managed SOC</div>
                        <div className="mega-item-desc">Continuous monitoring & sub-15 min SLA</div>
                      </div>
                    </Link>
                    <Link to="/services#cloud-security" className="mega-item" role="menuitem">
                      <Cloud size={18} className="mega-icon purple" />
                      <div>
                        <div className="mega-item-title">Cloud Security</div>
                        <div className="mega-item-desc">AWS, Azure & GCP workload protection</div>
                      </div>
                    </Link>
                    <Link to="/services#ai-security" className="mega-item" role="menuitem">
                      <Cpu size={18} className="mega-icon cyan" />
                      <div>
                        <div className="mega-item-title">AI & LLM Security</div>
                        <div className="mega-item-desc">Prompt injection defense & model shield</div>
                      </div>
                    </Link>
                    <Link to="/services#network-security" className="mega-item" role="menuitem">
                      <Network size={18} className="mega-icon blue" />
                      <div>
                        <div className="mega-item-title">Network Perimeter</div>
                        <div className="mega-item-desc">NGFW, IDS/IPS & micro-segmentation</div>
                      </div>
                    </Link>
                    <Link to="/services#vapt" className="mega-item" role="menuitem">
                      <Crosshair size={18} className="mega-icon purple" />
                      <div>
                        <div className="mega-item-title">VAPT Assessment</div>
                        <div className="mega-item-desc">Comprehensive ethical hacking & audits</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <NavLink 
                to="/products" 
                className={({ isActive }) => `nav-link has-dropdown ${isActive ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={productsDropdown}
              >
                <span>Products</span>
                <ChevronDown size={14} className={`dropdown-arrow ${productsDropdown ? 'rotated' : ''}`} />
              </NavLink>

              {productsDropdown && (
                <div className="dropdown-menu-simple glass-panel" role="menu">
                  <Link to="/products#acis" className="dropdown-simple-item" role="menuitem">
                    <div className="dropdown-badge">FLAGSHIP</div>
                    <div className="dropdown-title">ACIS Platform</div>
                    <div className="dropdown-subtitle">Autonomous Cyber Immune System</div>
                  </Link>
                  <Link to="/products#netxdr" className="dropdown-simple-item" role="menuitem">
                    <div className="dropdown-title">Cyrix XDR / NetXDR</div>
                    <div className="dropdown-subtitle">Unified Endpoint & Network Hunting</div>
                  </Link>
                  <Link to="/products#netcrad" className="dropdown-simple-item" role="menuitem">
                    <div className="dropdown-title">NetCRAD Scanner</div>
                    <div className="dropdown-subtitle">AI Website Security Auditing</div>
                  </Link>
                  <Link to="/products#crm" className="dropdown-simple-item" role="menuitem">
                    <div className="dropdown-title">Netcradus CRM</div>
                    <div className="dropdown-subtitle">Secure Enterprise Operations Platform</div>
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/careers" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Careers
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </div>

          {/* Right Action Button */}
          <div className="navbar-actions-desktop">
            <Button to="/contact" variant="primary" size="sm" icon={ArrowRight}>
              Request Security Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button 
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div 
            id="mobile-nav-drawer" 
            className="mobile-drawer glass-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="mobile-drawer-header">
              <div className="brand-logo-badge">
                <Shield className="brand-shield-icon" size={20} />
              </div>
              <span className="brand-name">NETCRADUS</span>
              <button 
                type="button" 
                className="mobile-drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-links-list">
              <NavLink to="/" className="mobile-nav-link" end>
                Home
              </NavLink>
              <NavLink to="/about" className="mobile-nav-link">
                About Us
              </NavLink>
              <NavLink to="/services" className="mobile-nav-link">
                Cybersecurity Services
              </NavLink>
              <NavLink to="/products" className="mobile-nav-link">
                Products & Platform (ACIS)
              </NavLink>
              <NavLink to="/careers" className="mobile-nav-link">
                Careers & Openings
              </NavLink>
              <NavLink to="/contact" className="mobile-nav-link">
                Contact & 24/7 Desk
              </NavLink>
            </div>

            <div className="mobile-drawer-footer">
              <Button to="/contact" variant="primary" size="md" className="w-full" icon={ArrowRight}>
                Get Security Consultation
              </Button>
              <div className="mobile-contact-info">
                <p>24/7 Toll-Free (IN): <strong>{companyInfo.contact.tollFree}</strong></p>
                <p>US Desk: <strong>{companyInfo.offices.usa.phone}</strong></p>
                <p>Email: <strong>{companyInfo.contact.email}</strong></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
