import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Shield, 
  Lock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Zap,
  ExternalLink
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import contactUsBg from '../assets/images/contact-us-bg.png';
import officeUsBg from '../assets/images/office-us-bg.jpg';
import officeUkBg from '../assets/images/office-uk-bg.jpg';
import officeInBg from '../assets/images/office-in-bg.jpg';
import './Contact.css';

// Crisp SVG Flag Icons for all platforms (Windows fallback friendly)
const USFlagIcon = () => (
  <svg width="22" height="15" viewBox="0 0 741 390" className="flag-svg-icon" aria-label="USA Flag">
    <rect width="741" height="390" fill="#B22234" rx="3" />
    <path d="M0,30h741M0,90h741M0,150h741M0,210h741M0,270h741M0,330h741" stroke="#FFFFFF" strokeWidth="30" />
    <rect width="296" height="210" fill="#3C3B6E" />
    <g fill="#FFFFFF">
      <circle cx="30" cy="21" r="8" /><circle cx="89" cy="21" r="8" /><circle cx="148" cy="21" r="8" /><circle cx="207" cy="21" r="8" /><circle cx="266" cy="21" r="8" />
      <circle cx="60" cy="42" r="8" /><circle cx="119" cy="42" r="8" /><circle cx="178" cy="42" r="8" /><circle cx="237" cy="42" r="8" />
      <circle cx="30" cy="63" r="8" /><circle cx="89" cy="63" r="8" /><circle cx="148" cy="63" r="8" /><circle cx="207" cy="63" r="8" /><circle cx="266" cy="63" r="8" />
      <circle cx="60" cy="84" r="8" /><circle cx="119" cy="84" r="8" /><circle cx="178" cy="84" r="8" /><circle cx="237" cy="84" r="8" />
      <circle cx="30" cy="105" r="8" /><circle cx="89" cy="105" r="8" /><circle cx="148" cy="105" r="8" /><circle cx="207" cy="105" r="8" /><circle cx="266" cy="105" r="8" />
      <circle cx="60" cy="126" r="8" /><circle cx="119" cy="126" r="8" /><circle cx="178" cy="126" r="8" /><circle cx="237" cy="126" r="8" />
      <circle cx="30" cy="147" r="8" /><circle cx="89" cy="147" r="8" /><circle cx="148" cy="147" r="8" /><circle cx="207" cy="147" r="8" /><circle cx="266" cy="147" r="8" />
      <circle cx="60" cy="168" r="8" /><circle cx="119" cy="168" r="8" /><circle cx="178" cy="168" r="8" /><circle cx="237" cy="168" r="8" />
      <circle cx="30" cy="189" r="8" /><circle cx="89" cy="189" r="8" /><circle cx="148" cy="189" r="8" /><circle cx="207" cy="189" r="8" /><circle cx="266" cy="189" r="8" />
    </g>
  </svg>
);

const UKFlagIcon = () => (
  <svg width="22" height="15" viewBox="0 0 60 30" className="flag-svg-icon" aria-label="UK Flag">
    <clipPath id="uk-flag-clip">
      <rect width="60" height="30" rx="3" />
    </clipPath>
    <g clipPath="url(#uk-flag-clip)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const INFlagIcon = () => (
  <svg width="22" height="15" viewBox="0 0 225 150" className="flag-svg-icon" aria-label="India Flag">
    <clipPath id="in-flag-clip">
      <rect width="225" height="150" rx="3" />
    </clipPath>
    <g clipPath="url(#in-flag-clip)">
      <rect width="225" height="50" fill="#FF9933" />
      <rect y="50" width="225" height="50" fill="#FFFFFF" />
      <rect y="100" width="225" height="50" fill="#138808" />
      <circle cx="112.5" cy="75" r="18" fill="none" stroke="#000080" strokeWidth="2.5" />
      <circle cx="112.5" cy="75" r="3.5" fill="#000080" />
      <g stroke="#000080" strokeWidth="1">
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="112.5"
            y1="75"
            x2={112.5 + 18 * Math.cos((i * 15 * Math.PI) / 180)}
            y2={75 + 18 * Math.sin((i * 15 * Math.PI) / 180)}
          />
        ))}
      </g>
    </g>
  </svg>
);

const officialFaqs = [
  {
    q: "How quickly will someone contact me?",
    a: "Our team responds to standard enquiries within one business hour. Incident response requests are triaged immediately, 24/7."
  },
  {
    q: "Do you provide 24/7 incident response?",
    a: "Yes. Our SOC operates around the clock with a dedicated incident response track for active breaches and critical alerts."
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We routinely sign mutual NDAs before any discovery call that involves sensitive infrastructure or security details."
  },
  {
    q: "Do you provide free security consultations?",
    a: "Yes. Every engagement starts with a complimentary strategic consultation to understand your environment and goals."
  },
  {
    q: "What should I include when reaching out?",
    a: "A short description of your environment, the service you're interested in, and your timeline helps us route your enquiry to the right specialist faster."
  }
];

const serviceOptions = [
  "Managed SOC",
  "VAPT Services",
  "Cloud Security",
  "AI Security",
  "Network Security",
  "Compliance & Governance",
  "Enterprise Software Solutions",
  "Other"
];

const countryOptions = [
  "United States",
  "United Kingdom",
  "India",
  "Australia",
  "United Arab Emirates",
  "Canada",
  "Singapore",
  "Germany",
  "Saudi Arabia",
  "France",
  "Netherlands",
  "Other"
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Managed SOC',
    country: 'United States',
    message: ''
  });

  useEffect(() => {
    document.title = "Contact Netcradus | Cybersecurity Consultation & Enterprise Security";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.company.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="page-contact">
      {/* 1. HERO SECTION WITH US LANDMARK BACKDROP */}
      <section className="contact-hero-section">
        <div className="contact-hero-backdrop">
          <img src={contactUsBg} alt="Netcradus US & Global Cyber Defense" className="contact-hero-bg-img" />
          <div className="contact-hero-overlay" />
          <div className="contact-hero-cyber-particles" />
        </div>

        <div className="container contact-hero-container">
          <div className="contact-hero-text-wrap">
            <span className="contact-hero-eyebrow">
              <span className="eyebrow-square" />
              CONTACT NETCRADUS
            </span>
            <h1 className="contact-hero-title">
              Enterprise Cybersecurity <br />
              Starts With a <span className="hero-brand-orange">Conversation</span>
            </h1>

            <div className="contact-hero-divider" />

            {/* Hero Trust Badges Row */}
            <div className="contact-hero-badges-row">
              <div className="hero-trust-badge">
                <Phone size={14} className="badge-icon-orange" />
                <span>24X7 SUPPORT</span>
              </div>
              <div className="hero-trust-badge">
                <Clock size={14} className="badge-icon-orange" />
                <span>1 HOUR RESPONSE</span>
              </div>
              <div className="hero-trust-badge">
                <FileCheck size={14} className="badge-icon-orange" />
                <span>NDA AVAILABLE</span>
              </div>
              <div className="hero-trust-badge">
                <Shield size={14} className="badge-icon-orange" />
                <span>ISO-COMPLIANT ENGAGEMENTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION + FORM (2-COLUMN LAYOUT - INDIA SITE STRUCTURE) */}
      <section className="section-py contact-light-form-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left / Form Column: "Let's Secure Your Business" (White Card) */}
            <div className="contact-form-card-light">
              <div className="form-card-header">
                <h2 className="form-card-title-light">Let's Secure Your Business</h2>
                <p className="form-card-sub-light">Fields marked with <span className="req-star">*</span> are required.</p>
              </div>

              {submitted ? (
                <div className="contact-success-state-light">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={48} className="text-orange" />
                  </div>
                  <h3 className="success-title-light">Consultation Request Received</h3>
                  <p className="success-desc-light">
                    Thank you, <strong>{formData.firstName} {formData.lastName}</strong> from <strong>{formData.company}</strong>. Our US security engineering team will review your brief and contact you within one business hour.
                  </p>
                  
                  <div className="success-summary-box-light">
                    <div className="summary-row-light">
                      <span className="summary-label">Selected Practice:</span>
                      <strong className="summary-value">{formData.service}</strong>
                    </div>
                    <div className="summary-row-light">
                      <span className="summary-label">Business Email:</span>
                      <strong className="summary-value">{formData.email}</strong>
                    </div>
                    <div className="summary-row-light">
                      <span className="summary-label">Direct Desk Line:</span>
                      <a href="tel:+13024952661" className="summary-link">+1 302 495 2661</a>
                    </div>
                  </div>

                  <button 
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Managed SOC',
                        country: 'United States',
                        message: ''
                      });
                    }}
                    className="submit-another-btn-light"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="official-contact-form-light">
                  {/* Name Row */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="first_name">FIRST NAME <span className="req-star">*</span></label>
                      <input 
                        id="first_name"
                        type="text" 
                        required 
                        placeholder="First Name*" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="form-input-light"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">LAST NAME <span className="req-star">*</span></label>
                      <input 
                        id="last_name"
                        type="text" 
                        required 
                        placeholder="Last Name*" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="form-input-light"
                      />
                    </div>
                  </div>

                  {/* Contact Info Row */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="email">BUSINESS EMAIL <span className="req-star">*</span></label>
                      <input 
                        id="email"
                        type="email" 
                        required 
                        placeholder="Business Email*" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input-light"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">PHONE NUMBER <span className="req-star">*</span></label>
                      <input 
                        id="phone"
                        type="tel" 
                        required 
                        placeholder="Phone Number*" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input-light"
                      />
                    </div>
                  </div>

                  {/* Company & Service Row */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="company">COMPANY NAME <span className="req-star">*</span></label>
                      <input 
                        id="company"
                        type="text" 
                        required 
                        placeholder="Company Name*" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="form-input-light"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">SERVICE REQUIRED <span className="req-star">*</span></label>
                      <select 
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="form-select-light"
                      >
                        {serviceOptions.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Country / Region */}
                  <div className="form-group">
                    <label htmlFor="country">COUNTRY / REGION</label>
                    <select 
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="form-select-light"
                    >
                      {countryOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <div className="label-with-meta">
                      <label htmlFor="message">HOW CAN WE HELP YOU?</label>
                      <span className="char-counter-light">{formData.message.length}/600</span>
                    </div>
                    <textarea 
                      id="message"
                      rows={4}
                      maxLength={600}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea-light"
                    />
                    <span className="textarea-help-sub">A short summary of your environment and timeline helps us route this faster.</span>
                  </div>

                  {/* Submit Button */}
                  <div className="form-action-row">
                    <button type="submit" className="contact-submit-btn-solid">
                      <span>Request Consultation</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  {/* Encryption Footer */}
                  <div className="form-security-footer-light">
                    <Lock size={14} className="lock-icon-orange" />
                    <span>Transmitted over an encrypted, secure connection.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: "Get In Touch" & Direct Desk Channels (Dark Card) */}
            <div className="contact-direct-column">
              <div className="direct-desk-card-dark">
                <div className="desk-header">
                  <span className="cyber-badge-sm">DIRECT DESK</span>
                  <h3 className="desk-title">Get In Touch</h3>
                  <p className="desk-sub">
                    Speak to our global engineering offices or reach our dispatch desk directly.
                  </p>
                </div>

                {/* Call Us Block */}
                <div className="contact-channel-block">
                  <div className="channel-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">CALL US</span>
                    <a href="tel:+13024952661" className="channel-val-primary">+1 302 495 2661</a>
                    <span className="channel-sub-info">24×7 Emergency Incident Response</span>
                    <div className="toll-free-pill">
                      <span>Toll-Free:</span> <a href="tel:1800121008800">1800 121 008800</a>
                    </div>
                  </div>
                </div>

                {/* Email Us Block */}
                <div className="contact-channel-block">
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">EMAIL US</span>
                    <div className="email-sub-item">
                      <span className="email-type">GENERAL ENQUIRIES</span>
                      <a href="mailto:info@netcradus.com" className="email-val">info@netcradus.com</a>
                    </div>
                    <div className="email-sub-item">
                      <span className="email-type">EMERGENCY SUPPORT (24×7)</span>
                      <a href="mailto:support@netcradus.com" className="email-val">support@netcradus.com</a>
                    </div>
                    <div className="email-sub-item">
                      <span className="email-type">SALES & BUSINESS ENQUIRIES</span>
                      <a href="mailto:sales@netcradus.com" className="email-val">sales@netcradus.com</a>
                    </div>
                  </div>
                </div>

                {/* Regional Nodes Summary */}
                <div className="regional-nodes-summary">
                  <div className="node-summary-item">
                    <MapPin size={16} className="node-pin-icon" />
                    <div>
                      <strong>USA HEADQUARTERS</strong>
                      <p>Netcradus Inc., 8 The Green, Suite B, Dover, DE 19901, United States</p>
                    </div>
                  </div>
                  <div className="node-summary-item">
                    <MapPin size={16} className="node-pin-icon" />
                    <div>
                      <strong>INDIA NODE</strong>
                      <p>AVS City Square, Delhi NCR, India</p>
                    </div>
                  </div>
                  <div className="node-summary-item">
                    <MapPin size={16} className="node-pin-icon" />
                    <div>
                      <strong>UK HEADQUARTERS</strong>
                      <p>Netcradus Ltd., London Road, Leicester, LE2 0QS, England, United Kingdom</p>
                    </div>
                  </div>
                </div>

                {/* 24/7 SOC Operations Callout */}
                <div className="soc-ops-callout glass-card">
                  <div className="soc-callout-header">
                    <Zap size={16} className="text-orange" />
                    <strong>24×7 SECURITY OPERATIONS</strong>
                  </div>
                  <p>
                    Our Security Operations Center (SOC) provides continuous monitoring, incident response, and enterprise cybersecurity support around the clock.
                  </p>
                </div>

                <div className="confidentiality-notice">
                  <Shield size={14} className="shield-icon" />
                  <span>Your information is securely transmitted and handled confidentially in accordance with our data policy.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL PRESENCE / OUR OFFICES SECTION */}
      <section className="section-py cyber-grid-bg">
        <div className="container">
          <SectionHeader
            badge="FIND US"
            title="Our Global"
            highlightText="Offices & Locations"
            subtitle="Visit our offices or connect with our teams across regions. We're here to support your business wherever you are."
          />

          <div className="offices-cards-grid">
            {/* Office 1: United States Headquarters */}
            <div className="official-office-card office-card-us">
              <div className="office-card-backdrop">
                <img src={officeUsBg} alt="USA Headquarters - New York & Delaware" className="office-card-bg-img" />
                <div className="office-card-overlay" />
              </div>
              <div className="office-card-content">
                <div className="office-flag-row">
                  <div className="office-flag-pill">
                    <USFlagIcon />
                    <span className="flag-name">USA</span>
                  </div>
                  <span className="office-region-badge">HEADQUARTERS</span>
                </div>
                <h3 className="office-location-title">UNITED STATES HEADQUARTERS</h3>
                <p className="office-full-address">
                  Netcradus Inc., 8 The Green, Suite B, Dover, DE 19901, United States
                </p>

                <div className="office-meta-list">
                  <div className="office-meta-item">
                    <Clock size={16} className="meta-icon" />
                    <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="office-meta-item">
                    <Phone size={16} className="meta-icon" />
                    <a href="tel:+13024952661">+1 302 495 2661</a>
                  </div>
                  <div className="office-meta-item">
                    <Mail size={16} className="meta-icon" />
                    <a href="mailto:info@netcradus.com">info@netcradus.com</a>
                  </div>
                </div>

                <div className="office-card-actions">
                  <a 
                    href="https://maps.google.com/?q=8+The+Green+Suite+B+Dover+DE+19901" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="office-directions-link"
                  >
                    <span>GET DIRECTIONS</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Office 2: United Kingdom Office */}
            <div className="official-office-card office-card-uk">
              <div className="office-card-backdrop">
                <img src={officeUkBg} alt="UK Headquarters - London & Leicester" className="office-card-bg-img" />
                <div className="office-card-overlay" />
              </div>
              <div className="office-card-content">
                <div className="office-flag-row">
                  <div className="office-flag-pill">
                    <UKFlagIcon />
                    <span className="flag-name">UK</span>
                  </div>
                  <span className="office-region-badge">EUROPE OPERATIONS</span>
                </div>
                <h3 className="office-location-title">UNITED KINGDOM OFFICE</h3>
                <p className="office-full-address">
                  Netcradus Ltd., London Road, Leicester, LE2 0QS, England, United Kingdom
                </p>

                <div className="office-meta-list">
                  <div className="office-meta-item">
                    <Clock size={16} className="meta-icon" />
                    <span>Monday - Friday: 9:00 AM - 5:00 PM GMT</span>
                  </div>
                  <div className="office-meta-item">
                    <Phone size={16} className="meta-icon" />
                    <a href="tel:+447463358081">+44 7463358081</a>
                  </div>
                  <div className="office-meta-item">
                    <Mail size={16} className="meta-icon" />
                    <a href="mailto:info@netcradus.com">info@netcradus.com</a>
                  </div>
                </div>

                <div className="office-card-actions">
                  <a 
                    href="https://maps.google.com/?q=London+Road+Leicester+LE2+0QS+UK" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="office-directions-link"
                  >
                    <span>GET DIRECTIONS</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Office 3: India Headquarters */}
            <div className="official-office-card office-card-in">
              <div className="office-card-backdrop">
                <img src={officeInBg} alt="India APAC Node - Delhi NCR" className="office-card-bg-img" />
                <div className="office-card-overlay" />
              </div>
              <div className="office-card-content">
                <div className="office-flag-row">
                  <div className="office-flag-pill">
                    <INFlagIcon />
                    <span className="flag-name">INDIA</span>
                  </div>
                  <span className="office-region-badge">APAC NODE</span>
                </div>
                <h3 className="office-location-title">INDIA OFFICE</h3>
                <p className="office-full-address">
                  Office no. 609, 6th Floor, AVS City Square, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003, India
                </p>

                <div className="office-meta-list">
                  <div className="office-meta-item">
                    <Clock size={16} className="meta-icon" />
                    <span>Monday - Friday: 9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="office-meta-item">
                    <Phone size={16} className="meta-icon" />
                    <a href="tel:+917290909571">+91 72909 09571</a>
                  </div>
                  <div className="office-meta-item">
                    <Mail size={16} className="meta-icon" />
                    <a href="mailto:info@netcradus.com">info@netcradus.com</a>
                  </div>
                </div>

                <div className="office-card-actions">
                  <a 
                    href="https://maps.google.com/?q=AVS+City+Square+Raj+Nagar+Extension+Ghaziabad" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="office-directions-link"
                  >
                    <span>GET DIRECTIONS</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked"
            highlightText="Questions"
            subtitle="Straightforward answers regarding our consultation flow, SLA benchmarks, NDAs, and emergency incident response."
          />

          <div className="faq-accordion-wrapper max-w-850">
            {officialFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-accordion-item glass-panel ${isOpen ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="faq-still-have-questions glass-card">
              <span>Still have questions about our services or deployment models?</span>
              <a href="mailto:info@netcradus.com" className="faq-mail-link">
                <span>Send us a message</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="section-py contact-final-cta-section cyber-grid-bg">
        <div className="container">
          <div className="contact-cta-card glass-panel text-center">
            <span className="cyber-badge">
              <span className="badge-dot" />
              CYBER DEFENSE ON DEMAND
            </span>
            <h2 className="cta-heading">
              Ready to Strengthen Your Security Posture with <br />
              <span className="text-gradient-orange">Netcradus Autonomous Defense?</span>
            </h2>
            <p className="cta-sub">
              Speak directly with our senior cybersecurity engineers to evaluate vulnerabilities, compliance requirements, or deploy custom cyber defense architectures.
            </p>

            <div className="cta-btn-group">
              <a href="#first_name" className="cta-primary-btn">
                <span>Talk to an Expert</span>
                <ArrowRight size={16} />
              </a>
              <a href="tel:1800121008800" className="cta-secondary-btn">
                <Phone size={16} className="btn-icon-orange" />
                <span>Call Dispatch: 1800 121 008800</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
