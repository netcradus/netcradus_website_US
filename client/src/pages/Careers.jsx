import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  X,
  Info,
  DollarSign
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';
import { careersData } from '../data/careersData';
import { companyInfo } from '../data/companyInfo';
import './Careers.css';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverNote: ''
  });

  const handleApply = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      return;
    }
    setAppSubmitted(true);
  };

  const closeModal = () => {
    setSelectedRole(null);
    setAppSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      portfolio: '',
      coverNote: ''
    });
  };

  return (
    <div className="page-careers">
      {/* Hero */}
      <section className="careers-hero-section cyber-grid-bg">
        <div className="container text-center">
          <span className="cyber-badge">
            <span className="badge-dot" />
            CAREERS & TALENT NETWORK
          </span>
          <h1 className="careers-hero-title">
            Join the Frontline of <br />
            <span className="text-gradient-cyan">Autonomous Cyber Defense</span>
          </h1>
          <p className="careers-hero-sub">
            {careersData.subtitle}
          </p>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-py">
        <div className="container">
          <SectionHeader
            badge="LIFE AT NETCRADUS"
            title="Engineered for High-Velocity"
            highlightText="Innovation & Defense"
            subtitle="We are a team of ethical hackers, AI researchers, and defense architects building autonomous security technologies."
          />

          <div className="grid-3 culture-grid">
            {careersData.culture.map((cult, idx) => (
              <div key={idx} className="glass-card culture-card">
                <div className="culture-num">0{idx + 1}</div>
                <h3 className="culture-card-title">{cult.title}</h3>
                <p className="culture-card-desc">{cult.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="section-py-sm cyber-grid-subtle">
        <div className="container">
          <div className="benefits-glass-panel glass-panel">
            <h3 className="benefits-heading text-gradient-purple">Comprehensive Perks & Growth</h3>
            <div className="benefits-grid">
              {careersData.benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-item">
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-py" id="openings">
        <div className="container">
          <SectionHeader
            badge="CURRENT OPENINGS"
            title="Explore Open Roles in"
            highlightText="Cybersecurity, SOC & Research"
            subtitle="Discover opportunities to engineer autonomous defenses and protect global critical infrastructure."
          />

          <div className="openings-list">
            {careersData.openings.map((job) => (
              <div key={job.id} className="glass-card job-card" id={`job-${job.id}`}>
                <div className="job-card-main">
                  <div className="job-header-row">
                    <span className="job-dept-tag">{job.department}</span>
                    <span className="job-type-pill">{job.type} • {job.workType}</span>
                    <span className="job-salary-pill">{job.salary}</span>
                  </div>
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta-row">
                    <span className="meta-item">
                      <MapPin size={14} className="meta-icon" />
                      {job.location}
                    </span>
                    <span className="meta-item">
                      <Clock size={14} className="meta-icon" />
                      Experience: {job.experience}
                    </span>
                  </div>
                  <p className="job-overview">{job.overview}</p>

                  <div className="job-skills-tags">
                    {job.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="job-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="job-card-action">
                  <Button
                    onClick={() => setSelectedRole(job)}
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                  >
                    View Details & Apply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedRole && (
        <div className="application-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="application-modal glass-panel">
            <button type="button" className="close-modal-btn" onClick={closeModal} aria-label="Close application modal">
              <X size={20} />
            </button>

            {!appSubmitted ? (
              <div>
                <div className="modal-header">
                  <span className="cyber-badge">{selectedRole.department}</span>
                  <h3 id="modal-title" className="modal-job-title">{selectedRole.title}</h3>
                  <div className="modal-job-meta">
                    <span><MapPin size={13} /> {selectedRole.location}</span>
                    <span><Clock size={13} /> Experience: {selectedRole.experience}</span>
                    <span><DollarSign size={13} /> {selectedRole.salary}</span>
                  </div>
                </div>

                <div className="modal-requirements">
                  <h4 className="req-title">Candidate Qualifications & Core Competencies:</h4>
                  <ul>
                    {selectedRole.requirements.map((req, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="req-check" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleApply} className="modal-application-form">
                  <h4 className="form-subhead">Submit Candidate Profile:</h4>
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="app-name">Full Name *</label>
                      <input
                        id="app-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="app-email">Personal / Work Email *</label>
                      <input
                        id="app-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="app-phone">Phone Number *</label>
                      <input
                        id="app-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="app-linkedin">LinkedIn / GitHub URL</label>
                      <input
                        id="app-linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="app-note">Security Experience & Certifications (OSCP, CEH, CISSP)</label>
                    <textarea
                      id="app-note"
                      rows="3"
                      placeholder="Highlight relevant hands-on projects, tools, or research experience..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    />
                  </div>

                  <div className="modal-actions-row">
                    <Button type="submit" variant="primary" size="md" icon={Send}>
                      Submit Profile for Review
                    </Button>
                    <Button type="button" onClick={closeModal} variant="ghost" size="md">
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="modal-success-screen text-center">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="text-cyan" />
                </div>
                <h3>Candidate Profile Prepared</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Your profile for the <strong>{selectedRole.title}</strong> opening has been formatted.
                </p>

                <div className="local-validation-notice glass-card" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                  <div className="notice-icon-col">
                    <Info size={20} className="text-cyan" />
                  </div>
                  <div className="notice-text-col">
                    <strong>Direct Transmission to Talent Team:</strong>
                    <p style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
                      Please forward your resume and profile directly to <a href={`mailto:${companyInfo.contact.email}?subject=Job Application - ${encodeURIComponent(selectedRole.title)}&body=Name: ${encodeURIComponent(formData.fullName)}%0APhone: ${encodeURIComponent(formData.phone)}%0ALinkedIn: ${encodeURIComponent(formData.linkedin)}%0AOverview: ${encodeURIComponent(formData.coverNote)}`} style={{ color: 'var(--neon-cyan)', textDecoration: 'underline' }}>{companyInfo.contact.email}</a> for immediate screening.
                    </p>
                  </div>
                </div>

                <Button onClick={closeModal} variant="primary" size="md">
                  Back to Open Roles
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <CTASection
        title="Don't See a Direct Match?"
        highlightText="Submit Your Resume"
        subtitle={`Forward your profile and research portfolio directly to ${companyInfo.contact.email}.`}
        primaryBtnText="Email Talent Acquisition"
      />
    </div>
  );
}
