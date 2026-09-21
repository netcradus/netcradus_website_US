import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Shield, 
  MessageSquare, 
  Lock,
  Headphones,
  ArrowRight,
  Info
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { companyInfo } from '../data/companyInfo';
import { servicesData } from '../data/servicesData';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterested: servicesData[0].title,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="page-contact">
      {/* Hero */}
      <section className="contact-hero-section cyber-grid-bg">
        <div className="container text-center">
          <span className="cyber-badge">
            <span className="badge-dot" />
            24/7 GLOBAL SECURITY OPERATIONS DESK
          </span>
          <h1 className="contact-hero-title">
            Connect with Netcradus <br />
            <span className="text-gradient-cyan">Cyber Defense Specialists</span>
          </h1>
          <p className="contact-hero-sub">
            Speak directly with our cybersecurity team for enterprise risk audits, ACIS platform inquiries, or 24/7 SOC integration.
          </p>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="section-py-sm global-offices-section">
        <div className="container">
          <SectionHeader
            badge="GLOBAL PRESENCE"
            title="Our International"
            highlightText="Offices & Operations"
            subtitle="Connect directly with Netcradus engineering and client advisory teams across our global locations."
          />

          <div className="grid-2 offices-grid">
            {/* India Office Card */}
            <div className="glass-panel office-card">
              <div className="office-card-header">
                <div className="office-country-pill cyan">INDIA</div>
                <h3 className="office-company-name">{companyInfo.offices.india.companyName}</h3>
                <span className="office-role-tag">Global Engineering & 24/7 SOC Operations</span>
              </div>

              <div className="office-details-list">
                <div className="office-detail-row">
                  <div className="office-icon cyan">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Registered Office:</span>
                    <p className="detail-val">{companyInfo.offices.india.fullAddress}</p>
                  </div>
                </div>

                <div className="office-detail-row">
                  <div className="office-icon blue">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Toll-Free Helpline:</span>
                    <p className="detail-val">
                      <a href={`tel:${companyInfo.offices.india.tollFree.replace(/\s+/g, '')}`}>
                        {companyInfo.offices.india.tollFree}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="office-detail-row">
                  <div className="office-icon purple">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="detail-label">24/7 Security Desk:</span>
                    <p className="detail-val">
                      <a href={`tel:${companyInfo.offices.india.phone.replace(/\s+/g, '')}`}>
                        {companyInfo.offices.india.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="office-detail-row">
                  <div className="office-icon cyan">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Official Email:</span>
                    <p className="detail-val">
                      <a href={`mailto:${companyInfo.offices.india.email}`}>
                        {companyInfo.offices.india.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="office-detail-row">
                  <div className="office-icon green">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Operations:</span>
                    <p className="detail-val">{companyInfo.offices.india.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* United States Office Card */}
            <div className="glass-panel office-card">
              <div className="office-card-header">
                <div className="office-country-pill purple">UNITED STATES</div>
                <h3 className="office-company-name">{companyInfo.offices.usa.companyName}</h3>
                <span className="office-role-tag">North America Enterprise Operations</span>
              </div>

              <div className="office-details-list">
                <div className="office-detail-row">
                  <div className="office-icon purple">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="detail-label">United States Office:</span>
                    <p className="detail-val">
                      {companyInfo.offices.usa.street}<br />
                      {companyInfo.offices.usa.city}, {companyInfo.offices.usa.state} {companyInfo.offices.usa.postalCode}<br />
                      {companyInfo.offices.usa.country}
                    </p>
                  </div>
                </div>

                <div className="office-detail-row">
                  <div className="office-icon cyan">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="detail-label">US Phone Line:</span>
                    <p className="detail-val">
                      <a href={`tel:${companyInfo.offices.usa.phoneRaw}`}>
                        {companyInfo.offices.usa.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="office-detail-row">
                  <div className="office-icon blue">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Official Email:</span>
                    <p className="detail-val">
                      <a href={`mailto:${companyInfo.offices.usa.email}`}>
                        {companyInfo.offices.usa.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="office-detail-row">
                  <div className="office-icon green">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Availability:</span>
                    <p className="detail-val">{companyInfo.offices.usa.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Consultation Section */}
      <section className="section-py">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: Form */}
            <div className="glass-panel contact-form-panel">
              <h2 className="form-panel-title">Request a Security Consultation</h2>
              <p className="form-panel-desc">
                Complete the inquiry form below to connect with our security engineering consultants.
              </p>

              {submitted ? (
                <div className="contact-success-box text-center">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={52} className="text-cyan" />
                  </div>
                  <h3>Security Consultation Request Prepared</h3>
                  <p className="success-body-text">
                    Thank you, <strong>{formData.name}</strong> from <strong>{formData.company || 'your organization'}</strong>.
                  </p>
                  
                  <div className="local-validation-notice glass-card">
                    <div className="notice-icon-col">
                      <Info size={20} className="text-cyan" />
                    </div>
                    <div className="notice-text-col">
                      <strong>Direct Transmission Details:</strong>
                      <p>
                        To reach Netcradus instantly, send this brief to <a href={`mailto:${companyInfo.contact.email}?subject=Security Consultation Inquiry - ${encodeURIComponent(formData.serviceInterested)}&body=Name: ${encodeURIComponent(formData.name)}%0ACompany: ${encodeURIComponent(formData.company)}%0APhone: ${encodeURIComponent(formData.phone)}%0AMessage: ${encodeURIComponent(formData.message)}`}>{companyInfo.contact.email}</a> or call our 24/7 Desk at <a href={`tel:${companyInfo.contact.phone.replace(/\s+/g, '')}`}>{companyInfo.contact.phone}</a> or US Desk at <a href={`tel:${companyInfo.offices.usa.phoneRaw}`}>{companyInfo.offices.usa.phone}</a>.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          serviceInterested: servicesData[0].title,
                          message: ''
                        });
                      }}
                      variant="primary"
                      size="md"
                    >
                      Submit Another Consultation Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enterprise-contact-form" noValidate={false}>
                  <div className="form-grid-2">
                    <div className="contact-field">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        aria-required="true"
                      />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-email">Enterprise Work Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="contact-field">
                      <label htmlFor="contact-phone">Phone Number *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="+1 / +91 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        aria-required="true"
                      />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-company">Company / Organization *</label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        placeholder="e.g. Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-service">Service or Platform of Interest *</label>
                    <select
                      id="contact-service"
                      value={formData.serviceInterested}
                      onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
                    >
                      <optgroup label="Core Cybersecurity Services">
                        {servicesData.map((svc) => (
                          <option key={svc.id} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Flagship Platforms">
                        <option value="ACIS - Autonomous Cyber Immune System">ACIS - Autonomous Cyber Immune System</option>
                        <option value="Cyrix XDR / NetXDR Platform">Cyrix XDR / NetXDR Platform</option>
                        <option value="NetCRAD AI Web Security Scanner">NetCRAD AI Web Security Scanner</option>
                        <option value="Netcradus Enterprise CRM">Netcradus Enterprise CRM</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-message">Security Scope Overview / Message *</label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      required
                      placeholder="Describe your environment (endpoints, cloud workloads, compliance timelines, or threat concerns)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      aria-required="true"
                    />
                  </div>

                  <div className="form-submit-row">
                    <Button type="submit" variant="primary" size="lg" icon={Send}>
                      Submit Consultation Request
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: 24/7 Security Desk & Quick Channels */}
            <div className="contact-info-column">
              {/* Quick Communication Box */}
              <div className="glass-panel info-card-box">
                <span className="cyber-badge">DIRECT ACCESS</span>
                <h3 className="info-box-title">Security Desk Channels</h3>

                <div className="info-details-list">
                  <div className="info-detail-item">
                    <div className="info-icon blue">
                      <Phone size={20} />
                    </div>
                    <div>
                      <strong>India Toll-Free:</strong>
                      <p><a href={`tel:${companyInfo.offices.india.tollFree.replace(/\s+/g, '')}`}>{companyInfo.offices.india.tollFree}</a></p>
                    </div>
                  </div>

                  <div className="info-detail-item">
                    <div className="info-icon purple">
                      <Phone size={20} />
                    </div>
                    <div>
                      <strong>United States Office:</strong>
                      <p><a href={`tel:${companyInfo.offices.usa.phoneRaw}`}>{companyInfo.offices.usa.phone}</a></p>
                    </div>
                  </div>

                  <div className="info-detail-item">
                    <div className="info-icon cyan">
                      <Mail size={20} />
                    </div>
                    <div>
                      <strong>Official Email:</strong>
                      <p><a href={`mailto:${companyInfo.contact.email}`}>{companyInfo.contact.email}</a></p>
                    </div>
                  </div>

                  <div className="info-detail-item">
                    <div className="info-icon green">
                      <Clock size={20} />
                    </div>
                    <div>
                      <strong>Operational Availability:</strong>
                      <p>{companyInfo.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 24/7 Threat Support Notice */}
              <div className="glass-card threat-notice-card">
                <div className="notice-header">
                  <Headphones size={20} className="text-cyan" />
                  <strong>Active Security Incident Support</strong>
                </div>
                <p>
                  Experiencing an ongoing security breach, ransomware alert, or DDoS attack? Call our 24/7 rapid containment team directly at <strong>{companyInfo.contact.phone}</strong> or US desk at <strong>{companyInfo.offices.usa.phone}</strong> for instant triage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
