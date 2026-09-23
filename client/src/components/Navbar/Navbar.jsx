import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Shield,
  ChevronDown, 
  ChevronUp,
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight, 
  Cpu, 
  Crosshair, 
  Search,
  Check,
  Globe, 
  Lock,
  Zap,
  Users,
  Sparkles,
  Database,
  FileCheck,
  ShieldAlert
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import netcradusLogo from '../../assets/images/netcradus-logo.png';
import './Navbar.css';

// Crisp vector SVG Country Flags that display consistently across all operating systems
export function CountryFlag({ code, size = 15 }) {
  const width = Math.round(size * 1.35);
  const height = size;

  switch (code?.toLowerCase()) {
    case 'uk':
    case 'gb':
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L582 0h58zM0 0l239 176h-60L0 42V0z"/>
          <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/>
          <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/>
        </svg>
      );
    case 'us':
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <path fill="#bd3d44" d="M0 0h640v480H0z"/>
          <path stroke="#fff" strokeWidth="37" d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
          <path fill="#192f5d" d="M0 0h256v259H0z"/>
          <g fill="#fff">
            <circle cx="32" cy="26" r="8" /><circle cx="75" cy="26" r="8" /><circle cx="118" cy="26" r="8" /><circle cx="161" cy="26" r="8" /><circle cx="204" cy="26" r="8" />
            <circle cx="53" cy="54" r="8" /><circle cx="96" cy="54" r="8" /><circle cx="139" cy="54" r="8" /><circle cx="182" cy="54" r="8" /><circle cx="225" cy="54" r="8" />
            <circle cx="32" cy="82" r="8" /><circle cx="75" cy="82" r="8" /><circle cx="118" cy="82" r="8" /><circle cx="161" cy="82" r="8" /><circle cx="204" cy="82" r="8" />
            <circle cx="53" cy="110" r="8" /><circle cx="96" cy="110" r="8" /><circle cx="139" cy="110" r="8" /><circle cx="182" cy="110" r="8" /><circle cx="225" cy="110" r="8" />
            <circle cx="32" cy="138" r="8" /><circle cx="75" cy="138" r="8" /><circle cx="118" cy="138" r="8" /><circle cx="161" cy="138" r="8" /><circle cx="204" cy="138" r="8" />
            <circle cx="53" cy="166" r="8" /><circle cx="96" cy="166" r="8" /><circle cx="139" cy="166" r="8" /><circle cx="182" cy="166" r="8" /><circle cx="225" cy="166" r="8" />
            <circle cx="32" cy="194" r="8" /><circle cx="75" cy="194" r="8" /><circle cx="118" cy="194" r="8" /><circle cx="161" cy="194" r="8" /><circle cx="204" cy="194" r="8" />
            <circle cx="53" cy="222" r="8" /><circle cx="96" cy="222" r="8" /><circle cx="139" cy="222" r="8" /><circle cx="182" cy="222" r="8" /><circle cx="225" cy="222" r="8" />
          </g>
        </svg>
      );
    case 'in':
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <path fill="#FF9933" d="M0 0h640v160H0z"/>
          <path fill="#FFFFFF" d="M0 160h640v160H0z"/>
          <path fill="#138808" d="M0 320h640v160H0z"/>
          <circle cx="320" cy="240" r="48" fill="none" stroke="#000080" strokeWidth="6"/>
          <circle cx="320" cy="240" r="14" fill="#000080"/>
          <g stroke="#000080" strokeWidth="3">
            <line x1="320" y1="192" x2="320" y2="288"/>
            <line x1="272" y1="240" x2="368" y2="240"/>
            <line x1="286" y1="206" x2="354" y2="274"/>
            <line x1="286" y1="274" x2="354" y2="206"/>
            <line x1="300" y1="196" x2="340" y2="284"/>
            <line x1="300" y1="284" x2="340" y2="196"/>
            <line x1="276" y1="220" x2="364" y2="260"/>
            <line x1="276" y1="260" x2="364" y2="220"/>
          </g>
        </svg>
      );
    case 'au':
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <path fill="#00008B" d="M0 0h640v480H0z"/>
          <g transform="scale(0.5)">
            <path fill="#012169" d="M0 0h640v480H0z"/>
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
            <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L582 0h58zM0 0l239 176h-60L0 42V0z"/>
            <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/>
            <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/>
          </g>
          <circle cx="160" cy="360" r="26" fill="#fff" />
          <circle cx="480" cy="90" r="14" fill="#fff" />
          <circle cx="530" cy="180" r="14" fill="#fff" />
          <circle cx="480" cy="380" r="14" fill="#fff" />
          <circle cx="420" cy="220" r="14" fill="#fff" />
          <circle cx="500" cy="260" r="8" fill="#fff" />
        </svg>
      );
    case 'ae':
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <path fill="#00732f" d="M0 0h640v160H0z"/>
          <path fill="#ffffff" d="M0 160h640v160H0z"/>
          <path fill="#000000" d="M0 320h640v160H0z"/>
          <path fill="#ff0000" d="M0 0h180v480H0z"/>
        </svg>
      );
    case 'ca':
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <path fill="#d52b1e" d="M0 0h160v480H0zm480 0h160v480H480z"/>
          <path fill="#ffffff" d="M160 0h320v480H160z"/>
          <path fill="#d52b1e" d="M320 110l18 42 36-12-14 36 34 16-36 28 8 26-30-10-8 64h-16l-8-64-30 10 8-26-36-28 34-16-14-36 36 12z"/>
        </svg>
      );
    case 'sg':
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <path fill="#ed2939" d="M0 0h640v240H0z"/>
          <path fill="#ffffff" d="M0 240h640v240H0z"/>
          <circle cx="120" cy="120" r="60" fill="#fff"/>
          <circle cx="140" cy="120" r="54" fill="#ed2939"/>
          <circle cx="138" cy="88" r="9" fill="#fff"/>
          <circle cx="162" cy="105" r="9" fill="#fff"/>
          <circle cx="152" cy="138" r="9" fill="#fff"/>
          <circle cx="124" cy="138" r="9" fill="#fff"/>
          <circle cx="114" cy="105" r="9" fill="#fff"/>
        </svg>
      );
    case 'de':
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <path fill="#000000" d="M0 0h640v160H0z"/>
          <path fill="#dd0000" d="M0 160h640v160H0z"/>
          <path fill="#ffce00" d="M0 320h640v160H0z"/>
        </svg>
      );
    default:
      return (
        <svg className="svg-country-flag" width={width} height={height} viewBox="0 0 640 480" aria-hidden="true">
          <rect width="640" height="480" fill="#1e293b" />
          <circle cx="320" cy="240" r="100" fill="#3b82f6" opacity="0.6" />
        </svg>
      );
  }
}

const regionsList = [
  { id: 'us', name: 'United States', label: 'US', url: '/' },
  { id: 'in', name: 'India', label: 'IN', url: 'https://www.netcradus.in/' },
  { id: 'uk', name: 'United Kingdom', label: 'UK', url: 'https://www.netcradus.co.uk/' },
  { id: 'au', name: 'Australia', label: 'AU', url: 'https://aus.netcradus.com/' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformDropdown, setPlatformDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [countrySelectorOpen, setCountrySelectorOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    () => regionsList.find(r => r.id === 'us') || regionsList[0]
  );
  const [countrySearch, setCountrySearch] = useState('');
  const countrySelectorRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const platformDropdownRef = useRef(null);

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

  // Handle Click Outside for Dropdowns & Country Selector
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countrySelectorRef.current && !countrySelectorRef.current.contains(event.target)) {
        setCountrySelectorOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setProductsDropdown(false);
      }
      if (platformDropdownRef.current && !platformDropdownRef.current.contains(event.target)) {
        setPlatformDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle Escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setPlatformDropdown(false);
        setProductsDropdown(false);
        setCountrySelectorOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menus on route change
  const [prevLocationKey, setPrevLocationKey] = useState(location.pathname + location.hash);
  if (prevLocationKey !== location.pathname + location.hash) {
    setPrevLocationKey(location.pathname + location.hash);
    setMobileMenuOpen(false);
    setPlatformDropdown(false);
    setProductsDropdown(false);
    setCountrySelectorOpen(false);
  }

  const filteredCountries = regionsList.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Top Contact Bar */}
      <div className="navbar-top-bar">
        <div className="container flex-end">
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
          {/* Brand Logo - Clicking navigates to Home */}
          <Link 
            to="/" 
            className="navbar-brand" 
            aria-label="Netcradus Home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={netcradusLogo} 
              alt="NETCRADUS" 
              className="navbar-brand-logo" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="navbar-links-desktop">
            {/* 1. Platform MegaMenu Dropdown */}
            <div 
              className="nav-item-dropdown"
              ref={platformDropdownRef}
              onMouseEnter={() => setPlatformDropdown(true)}
              onMouseLeave={() => setPlatformDropdown(false)}
            >
              <button 
                type="button"
                className={`nav-link has-dropdown ${platformDropdown ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={platformDropdown}
                onClick={() => setPlatformDropdown(!platformDropdown)}
              >
                <span>Platform</span>
                {platformDropdown ? (
                  <ChevronUp size={14} className="dropdown-arrow" />
                ) : (
                  <ChevronDown size={14} className="dropdown-arrow" />
                )}
              </button>

              {platformDropdown && (
                <div className="megamenu-platform-card" role="menu">
                  {/* MegaMenu Header */}
                  <div className="megamenu-platform-header">
                    <div className="megamenu-header-icon-box">
                      <Shield size={22} className="megamenu-header-icon" />
                    </div>
                    <div className="megamenu-header-text">
                      <Link 
                        to="/platform" 
                        className="megamenu-header-link"
                        onClick={() => setPlatformDropdown(false)}
                      >
                        <span>Platform</span>
                        <ArrowRight size={16} />
                      </Link>
                      <p className="megamenu-header-desc">
                        Seven converged platforms working together as one intelligent cyber defense system.
                      </p>
                    </div>
                  </div>

                  {/* 7 Converged Platform Grid */}
                  <div className="megamenu-platform-grid">
                    {/* 1. XDR */}
                    <Link 
                      to="/products/xdr" 
                      className="megamenu-platform-item" 
                      role="menuitem"
                      onClick={() => setPlatformDropdown(false)}
                    >
                      <div className="megamenu-item-icon-circle">
                        <Shield size={19} />
                      </div>
                      <div className="megamenu-item-content">
                        <h4 className="megamenu-item-title">NetCradus XDR</h4>
                        <span className="megamenu-item-sub">→ Endpoint + Threat Hunting + Detection</span>
                        <p className="megamenu-item-desc">
                          AI-powered unified endpoint, network and real-time threat hunting detection.
                        </p>
                      </div>
                    </Link>

                    {/* 2. SIEM */}
                    <Link 
                      to="/products/siem" 
                      className="megamenu-platform-item" 
                      role="menuitem"
                      onClick={() => setPlatformDropdown(false)}
                    >
                      <div className="megamenu-item-icon-circle">
                        <Database size={19} />
                      </div>
                      <div className="megamenu-item-content">
                        <h4 className="megamenu-item-title">NetCradus SIEM</h4>
                        <span className="megamenu-item-sub">→ Log Management + Detection + Correlation</span>
                        <p className="megamenu-item-desc">
                          Real-time log aggregation, intelligent event correlation and threat detection.
                        </p>
                      </div>
                    </Link>

                    {/* 3. SOAR */}
                    <Link 
                      to="/products/soar" 
                      className="megamenu-platform-item" 
                      role="menuitem"
                      onClick={() => setPlatformDropdown(false)}
                    >
                      <div className="megamenu-item-icon-circle">
                        <Zap size={19} />
                      </div>
                      <div className="megamenu-item-content">
                        <h4 className="megamenu-item-title">NetCradus SOAR</h4>
                        <span className="megamenu-item-sub">→ Automated Response + Playbooks</span>
                        <p className="megamenu-item-desc">
                          Autonomous incident containment and agentic playbook orchestration.
                        </p>
                      </div>
                    </Link>

                    {/* 4. CTI */}
                    <Link 
                      to="/products/cti" 
                      className="megamenu-platform-item" 
                      role="menuitem"
                      onClick={() => setPlatformDropdown(false)}
                    >
                      <div className="megamenu-item-icon-circle">
                        <Globe size={19} />
                      </div>
                      <div className="megamenu-item-content">
                        <h4 className="megamenu-item-title">NetCradus CTI</h4>
                        <span className="megamenu-item-sub">→ Threat Intelligence</span>
                        <p className="megamenu-item-desc">
                          Global cyber threat research, adversary tradecraft and IOC feeds.
                        </p>
                      </div>
                    </Link>

                    {/* 5. PAM */}
                    <Link 
                      to="/products/pam" 
                      className="megamenu-platform-item" 
                      role="menuitem"
                      onClick={() => setPlatformDropdown(false)}
                    >
                      <div className="megamenu-item-icon-circle">
                        <Lock size={19} />
                      </div>
                      <div className="megamenu-item-content">
                        <h4 className="megamenu-item-title">NetCradus PAM</h4>
                        <span className="megamenu-item-sub">→ Privileged Access Management</span>
                        <p className="megamenu-item-desc">
                          Verify identity, enforce zero trust, and secure privileged credentials.
                        </p>
                      </div>
                    </Link>

                    {/* 6. GRC */}
                    <Link 
                      to="/products/grc" 
                      className="megamenu-platform-item" 
                      role="menuitem"
                      onClick={() => setPlatformDropdown(false)}
                    >
                      <div className="megamenu-item-icon-circle">
                        <FileCheck size={19} />
                      </div>
                      <div className="megamenu-item-content">
                        <h4 className="megamenu-item-title">NetCradus GRC</h4>
                        <span className="megamenu-item-sub">→ Risk + Compliance</span>
                        <p className="megamenu-item-desc">
                          Continuous attack surface management, vulnerability scanning & compliance audits.
                        </p>
                      </div>
                    </Link>

                    {/* 7. AI Security */}
                    <Link 
                      to="/products/ai-security" 
                      className="megamenu-platform-item" 
                      role="menuitem"
                      onClick={() => setPlatformDropdown(false)}
                    >
                      <div className="megamenu-item-icon-circle">
                        <Cpu size={19} />
                      </div>
                      <div className="megamenu-item-content">
                        <h4 className="megamenu-item-title">NetCradus AI Security</h4>
                        <span className="megamenu-item-sub">→ AI/ML Security + AI Threat Detection</span>
                        <p className="megamenu-item-desc">
                          AI engine protection, model vulnerability defense & LLM threat triage.
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* MegaMenu Bottom Bar */}
                  <div className="megamenu-platform-footer">
                    <span className="megamenu-footer-dot" />
                    <span>Single Agent • Single Console • Autonomous Cyber Defense</span>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Products MegaMenu (Matching screenshot layout) */}
            <div 
              className="nav-item-dropdown"
              ref={productsDropdownRef}
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <button 
                type="button"
                className={`nav-link has-dropdown ${productsDropdown ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={productsDropdown}
                onClick={() => setProductsDropdown(!productsDropdown)}
              >
                <span>Products</span>
                {productsDropdown ? (
                  <ChevronUp size={14} className="dropdown-arrow" />
                ) : (
                  <ChevronDown size={14} className="dropdown-arrow" />
                )}
              </button>

              {productsDropdown && (
                <div className="mega-menu-dropdown products-mega-menu" role="menu">
                  <div className="products-mega-pointer" />
                  <div className="products-mega-menu-inner">
                    {/* Col 1: Cybersecurity Platform */}
                    <div className="products-mega-col cybersecurity-col">
                      <h3 className="products-mega-heading">CYBERSECURITY PLATFORM</h3>
                      <div className="products-mega-underline" />
                      <div className="products-mega-list">
                        <Link 
                          to="/acis" 
                          className="products-mega-item" 
                          role="menuitem"
                        >
                          <div className="products-mega-icon-container">
                            <Shield size={20} />
                          </div>
                          <div className="products-mega-text">
                            <h4 className="products-mega-item-title">ACIS Platform</h4>
                            <p className="products-mega-item-desc">
                              Autonomous Cyber Immune System for threat detection and response.
                            </p>
                          </div>
                        </Link>

                        <Link 
                          to="/netxdr" 
                          className="products-mega-item" 
                          role="menuitem"
                        >
                          <div className="products-mega-icon-container">
                            <Crosshair size={20} />
                          </div>
                          <div className="products-mega-text">
                            <h4 className="products-mega-item-title">Cyrix XDR</h4>
                            <p className="products-mega-item-desc">
                              AI-powered unified endpoint, cloud and network protection.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Col 2: Business Solutions */}
                    <div className="products-mega-col business-col">
                      <h3 className="products-mega-heading">BUSINESS SOLUTIONS</h3>
                      <div className="products-mega-underline" />
                      <div className="products-mega-list">
                        <Link 
                          to="/crm" 
                          className="products-mega-item" 
                          role="menuitem"
                        >
                          <div className="products-mega-icon-container">
                            <Users size={20} />
                          </div>
                          <div className="products-mega-text">
                            <h4 className="products-mega-item-title">NetCRM</h4>
                            <p className="products-mega-item-desc">
                              Enterprise relationship and operations platform.
                            </p>
                          </div>
                        </Link>

                        <Link 
                          to="/netcrad" 
                          className="products-mega-item" 
                          role="menuitem"
                        >
                          <div className="products-mega-icon-container">
                            <ShieldAlert size={20} />
                          </div>
                          <div className="products-mega-text">
                            <h4 className="products-mega-item-title">NetCrad</h4>
                            <p className="products-mega-item-desc">
                              AI-powered website security auditing and vulnerability assessment platform that scans websites for security weaknesses, compliance issues, misconfigurations, and performance risks with actionable remediation insights.
                            </p>
                          </div>
                        </Link>

                        <div className="products-mega-item products-mega-item-soon">
                          <div className="products-mega-icon-container">
                            <Sparkles size={20} />
                          </div>
                          <div className="products-mega-text">
                            <h4 className="products-mega-item-title">
                              Future Products <span className="badge-soon">SOON</span>
                            </h4>
                            <p className="products-mega-item-desc">
                              Sparking new security intelligence engines coming soon.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Col 3: Promo Card */}
                    <div className="products-mega-col promo-col">
                      <div className="products-promo-card">
                        <div className="promo-tech-bg">
                          <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="130" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="6 6" />
                            <path d="M150 40 L240 85 V165 C240 220 150 260 150 260 C150 260 60 220 60 165 V85 L150 40 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                            <circle cx="150" cy="150" r="48" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" />
                          </svg>
                        </div>
                        <span className="promo-badge">ENTERPRISE SECURITY PLATFORM</span>
                        <h3 className="promo-title">Netcradus Products</h3>
                        <p className="promo-desc">Discover AI-powered cybersecurity and business platforms designed to protect, automate, and accelerate your organization through a unified ecosystem.</p>
                        <div className="promo-tags">
                          <span className="promo-tag-pill">AI Powered</span>
                          <span className="promo-tag-pill">Enterprise Ready</span>
                          <span className="promo-tag-pill">Cloud Native</span>
                          <span className="promo-tag-pill">Scalable</span>
                          <span className="promo-tag-pill">Secure by Design</span>
                        </div>
                        <Link 
                          to="/products" 
                          className="promo-cta-btn"
                        >
                          Explore Products →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Contact */}
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </div>

          {/* Right Action: TALK TO AN EXPERT + Country Selector */}
          <div className="navbar-actions-desktop">
            <Link to="/contact" className="talk-to-expert-btn">
              <span>TALK TO AN EXPERT</span>
              <ArrowRight size={15} />
            </Link>

            {/* Country / Region Selector */}
            <div className="country-selector-wrapper" ref={countrySelectorRef}>
              <button 
                type="button" 
                className={`country-select-btn ${countrySelectorOpen ? 'open' : ''}`}
                onClick={() => setCountrySelectorOpen(!countrySelectorOpen)}
                aria-haspopup="listbox"
                aria-expanded={countrySelectorOpen}
              >
                <span className="country-flag-wrap">
                  <CountryFlag code={selectedCountry.id} size={14} />
                </span>
                <span className="country-name">{selectedCountry.name}</span>
                {countrySelectorOpen ? <ChevronUp size={14} className="country-chevron" /> : <ChevronDown size={14} className="country-chevron" />}
              </button>

              {countrySelectorOpen && (
                <div className="country-dropdown-menu glass-panel" role="listbox">
                  <div className="country-search-box">
                    <Search size={14} className="country-search-icon" />
                    <input 
                      type="text" 
                      placeholder="Find a country or region" 
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="country-search-input"
                      autoFocus
                    />
                  </div>

                  <div className="country-options-list">
                    {filteredCountries.map((country) => {
                      const isSelected = selectedCountry.id === country.id;
                      return (
                        <button
                          key={country.id}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          className={`country-option-item ${isSelected ? 'selected' : ''}`}
                          onClick={() => {
                            if (country.url && country.url.startsWith('http')) {
                              window.location.href = country.url;
                              return;
                            }
                            setSelectedCountry(country);
                            setCountrySelectorOpen(false);
                            setCountrySearch('');
                          }}
                        >
                          <div className="country-option-info">
                            <span className="country-flag-wrap">
                              <CountryFlag code={country.id} size={14} />
                            </span>
                            <span className="country-option-name">{country.name}</span>
                          </div>
                          {isSelected && <Check size={14} className="country-selected-check" />}
                        </button>
                      );
                    })}
                    {filteredCountries.length === 0 && (
                      <div className="country-no-results">No region found</div>
                    )}
                  </div>
                </div>
              )}
            </div>
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
              <Link 
                to="/" 
                className="mobile-drawer-brand" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                aria-label="Netcradus Home"
              >
                <img 
                  src={netcradusLogo} 
                  alt="NETCRADUS" 
                  className="navbar-brand-logo mobile-logo" 
                />
              </Link>
              <button 
                type="button" 
                className="mobile-drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Country Selector */}
            <div className="mobile-region-bar">
              <span className="mobile-region-label">Region:</span>
              <div className="mobile-region-display">
                <span className="country-flag-wrap">
                  <CountryFlag code={selectedCountry.id} size={15} />
                </span>
                <select 
                  value={selectedCountry.id}
                  onChange={(e) => {
                    const found = regionsList.find(r => r.id === e.target.value);
                    if (found) {
                      if (found.url && found.url.startsWith('http')) {
                        window.location.href = found.url;
                      } else {
                        setSelectedCountry(found);
                      }
                    }
                  }}
                  className="mobile-region-select"
                >
                  {regionsList.map(c => (
                    <option key={c.id} value={c.id}>{c.name} ({c.label})</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mobile-links-list">
              <NavLink to="/platform" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Platform (Converged Architecture)
              </NavLink>
              <NavLink to="/products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Products Ecosystem
              </NavLink>
              <NavLink to="/netcrad" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                NetCRAD Scanner
              </NavLink>
              <NavLink to="/acis" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                ACIS™ Cyber Immune Platform
              </NavLink>
              <NavLink to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                About NetCradus
              </NavLink>
              <NavLink to="/careers" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Careers & Openings
              </NavLink>
              <NavLink to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </NavLink>
            </div>

            <div className="mobile-drawer-footer">
              <Link to="/contact" className="talk-to-expert-btn mobile-talk-btn" onClick={() => setMobileMenuOpen(false)}>
                <span>TALK TO AN EXPERT</span>
                <ArrowRight size={15} />
              </Link>
              <div className="mobile-contact-info">
                <p>Toll-Free: <strong>{companyInfo.contact.tollFree}</strong></p>
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

