import React, { useEffect } from 'react';
import {
  Cookie,
  FileExclamationPoint,
  Wallet,
  MessageCircleWarning,
  ShieldCheck,
  Shield,
  ShieldAlert,
  Scale,
  Siren,
  Bug,
  Database,
  Users,
  Copyright,
  Handshake,
  ClipboardCheck,
  RefreshCw,
  CalendarDays,
  ContactRound,
  Building2,
  Globe,
  ExternalLink,
  Mail,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import CTASection from '../components/CTA/CTASection';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Policies & Compliance | Netcradus";
    window.scrollTo(0, 0);
  }, []);

  const policySections = [
    {
      id: "section-01",
      number: "01",
      title: "Cookie Policy",
      icon: Cookie,
      type: "text",
      content: (
        <p className="policy-text">
          We use necessary cookies for core platform security and operation. Optional analytics, marketing, and functional technologies are activated only with your explicit prior consent and can be customized or withdrawn anytime via Cookie Preferences.
        </p>
      )
    },
    {
      id: "section-02",
      number: "02",
      title: "Disclaimer Policy",
      icon: FileExclamationPoint,
      type: "text",
      content: (
        <p className="policy-text">
          All information and services are provided “as-is” without warranties. Netcradus does not guarantee accuracy or uninterrupted availability. Cybersecurity reduces risk but does not eliminate all threats.
        </p>
      )
    },
    {
      id: "section-03",
      number: "03",
      title: "Refund & Cancellation Policy",
      icon: Wallet,
      type: "bullets",
      bullets: [
        "Payments once made are non-refundable unless agreed in writing.",
        "Project cancellations must be requested formally.",
        "Refund eligibility depends on project stage and contractual terms."
      ]
    },
    {
      id: "section-04",
      number: "04",
      title: "Grievance Redressal Policy",
      icon: MessageCircleWarning,
      type: "custom",
      content: (
        <div className="policy-custom-block">
          <p className="policy-text">
            <strong>Grievance redressal contact details:</strong> Designated Grievance Redressal Officer (GRO).
          </p>
          <div className="policy-highlight-card">
            <div className="highlight-row">
              <span className="highlight-label">Primary privacy and grievance email:</span>
              <a href="mailto:privacy@netcradus.com" className="policy-link policy-email-link">
                <Mail size={14} />
                <span>privacy@netcradus.com</span>
              </a>
            </div>
            <div className="highlight-row">
              <span className="highlight-label">Officer name and address:</span>
              <span className="tbc-badge">[TO BE CONFIRMED]</span>
            </div>
          </div>
          <p className="policy-text">
            Requests and grievances will be handled in accordance with applicable law and the organisation's published grievance process.
          </p>
          <p className="policy-text">
            In accordance with the DPDP Act framework, Data Principals must first exhaust the published grievance redressal mechanism before escalating unresolved complaints to the Data Protection Board of India (DPBI).
          </p>
        </div>
      )
    },
    {
      id: "section-05",
      number: "05",
      title: "Data Protection Policy",
      icon: ShieldCheck,
      type: "intro-bullets",
      intro: "Netcradus ensures protection of personal and organizational data through:",
      bullets: [
        "Encryption in transit and secure storage practices.",
        "Access control and least-privilege principles.",
        "Alignment with the Digital Personal Data Protection Act, 2023 (India) and applicable standards."
      ]
    },
    {
      id: "section-06",
      number: "06",
      title: "Information Security Policy",
      icon: Shield,
      type: "bullets",
      bullets: [
        "Network security monitoring.",
        "Endpoint protection.",
        "Access management.",
        "Regular audits and logging."
      ]
    },
    {
      id: "section-07",
      number: "07",
      title: "Cybersecurity Policy",
      icon: ShieldAlert,
      type: "intro-bullets",
      intro: "Netcradus follows industry best practices to:",
      bullets: [
        "Detect, prevent, and respond to cyber threats.",
        "Conduct vulnerability assessments and penetration testing.",
        "Perform continuous monitoring and threat intelligence."
      ]
    },
    {
      id: "section-08",
      number: "08",
      title: "Acceptable Use Policy",
      icon: Scale,
      type: "intro-bullets-outro",
      intro: "Users must not:",
      bullets: [
        "Use services for illegal or harmful activities.",
        "Attempt unauthorized access.",
        "Distribute malware or exploit systems."
      ],
      outro: "Violations may result in termination and legal action."
    },
    {
      id: "section-09",
      number: "09",
      title: "Incident Response Policy",
      icon: Siren,
      type: "intro-bullets",
      intro: "We maintain procedures to:",
      bullets: [
        "Detect and respond to incidents.",
        "Contain and mitigate threats.",
        "Notify affected parties where required.",
        "Document and improve response processes."
      ]
    },
    {
      id: "section-10",
      number: "10",
      title: "Vulnerability Disclosure Policy",
      icon: Bug,
      type: "custom",
      content: (
        <div className="policy-custom-block">
          <p className="policy-text">
            Security researchers can report vulnerabilities responsibly via:
          </p>
          <div className="policy-highlight-card">
            <div className="highlight-row">
              <span className="highlight-label">Email:</span>
              <a href="mailto:info@netcradus.com" className="policy-link policy-email-link">
                <Mail size={14} />
                <span>info@netcradus.com</span>
              </a>
            </div>
          </div>
          <p className="policy-text">
            We encourage ethical disclosure and will not take legal action against responsible reporting.
          </p>
        </div>
      )
    },
    {
      id: "section-11",
      number: "11",
      title: "Data Retention Policy",
      icon: Database,
      type: "bullets",
      bullets: [
        "Data is retained only as long as necessary.",
        "Secure deletion methods are used after the retention period.",
        "Compliance with legal and contractual obligations is maintained."
      ]
    },
    {
      id: "section-12",
      number: "12",
      title: "Third-Party/Vendor Security Policy",
      icon: Users,
      type: "intro-bullets",
      intro: "All vendors must:",
      bullets: [
        "Follow security and confidentiality standards.",
        "Undergo due diligence checks.",
        "Comply with applicable laws and agreements."
      ]
    },
    {
      id: "section-13",
      number: "13",
      title: "Intellectual Property Policy",
      icon: Copyright,
      type: "text",
      content: (
        <p className="policy-text">
          All content, software, and materials belong to Netcradus unless otherwise stated. Unauthorized use, copying, or distribution is prohibited.
        </p>
      )
    },
    {
      id: "section-14",
      number: "14",
      title: "Anti-Bribery Policy",
      icon: Handshake,
      type: "intro-bullets",
      intro: "Netcradus follows zero-tolerance for bribery and complies with:",
      bullets: [
        "Prevention of Corruption Act, 1988 (India).",
        "Applicable international anti-bribery standards."
      ]
    },
    {
      id: "section-15",
      number: "15",
      title: "Compliance Policy",
      icon: ClipboardCheck,
      type: "intro-bullets",
      intro: "We ensure adherence to:",
      bullets: [
        "Indian IT and data protection laws, including the DPDP Act, 2023.",
        "Applicable cross-border commercial and cybersecurity regulations.",
        "Industry standards and best practices."
      ]
    },
    {
      id: "section-16",
      number: "16",
      title: "Business Continuity Policy",
      icon: RefreshCw,
      type: "intro-bullets",
      intro: "We maintain plans to ensure:",
      bullets: [
        "Continuity of services during disruptions.",
        "Data backup and recovery.",
        "Minimal downtime and operational impact."
      ]
    },
    {
      id: "section-17",
      number: "17",
      title: "Effective Date",
      icon: CalendarDays,
      type: "text",
      content: (
        <p className="policy-text">
          All policies are effective from the date of publication on the Netcradus website.
        </p>
      )
    },
    {
      id: "section-18",
      number: "18",
      title: "Contact Information",
      icon: ContactRound,
      type: "custom",
      content: (
        <div className="policy-contact-block">
          <div className="policy-contact-card">
            <div className="contact-card-item">
              <div className="contact-icon-box">
                <Building2 size={18} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Legal Entity</span>
                <strong className="contact-value">Netcradus Pvt Ltd</strong>
              </div>
            </div>

            <div className="contact-divider" />

            <div className="contact-card-item">
              <div className="contact-icon-box">
                <Globe size={18} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Official Website</span>
                <a
                  href="https://us.netcradus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span>us.netcradus.com</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="contact-divider" />

            <div className="contact-card-item">
              <div className="contact-icon-box">
                <Mail size={18} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email Support</span>
                <a
                  href="mailto:info@netcradus.com"
                  className="contact-link"
                >
                  <span>info@netcradus.com</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
          <p className="policy-compact-line">
            Netcradus Pvt Ltd | <a href="https://us.netcradus.com/" target="_blank" rel="noopener noreferrer" className="inline-policy-link">us.netcradus.com</a> | <a href="mailto:info@netcradus.com" className="inline-policy-link">info@netcradus.com</a>
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="policies-page">
      {/* Subtle Ambient Glow Background */}
      <div className="policies-ambient-glow" aria-hidden="true" />
      
      {/* =========================================================================
          HERO / HEADING SECTION (CENTER-ALIGNED, NO BREADCRUMB)
          ========================================================================= */}
      <section className="policies-hero-section cyber-grid-bg">
        <div className="policies-container">
          <div className="policies-hero-content">
            <div className="policies-hero-badge">
              <span className="cyber-badge">
                <span className="badge-dot" />
                LEGAL, SECURITY & GOVERNANCE
              </span>
            </div>

            <h1 className="policies-hero-title">
              Policies <span className="hero-ampersand">&amp;</span> <span className="text-gradient-orange">Compliance</span>
            </h1>

            <p className="policies-hero-sub">
              Enterprise-grade governance, security, and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN POLICIES CONTENT (CENTERED SINGLE-COLUMN STACK)
          ========================================================================= */}
      <section className="section-py policies-content-section">
        <div className="policies-container">
          <div className="policy-cards-list">
            {policySections.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <article 
                  key={sec.id} 
                  id={sec.id} 
                  className="policy-card glass-card"
                >
                  {/* Card Header */}
                  <div className="policy-card-header">
                    <div className="policy-number-badge">
                      <span className="badge-prefix">SECTION</span>
                      <span className="badge-digits">{sec.number}</span>
                    </div>
                    
                    <div className="policy-header-title-wrap">
                      <div className="policy-title-row">
                        <div className="policy-icon-circle">
                          <IconComponent size={20} />
                        </div>
                        <h2 className="policy-title">{sec.title}</h2>
                      </div>
                    </div>
                  </div>

                  {/* Card Body (Left-aligned for readability) */}
                  <div className="policy-card-body">
                    {sec.type === 'text' && sec.content}

                    {sec.type === 'bullets' && (
                      <ul className="policy-bullet-list">
                        {sec.bullets.map((bullet, idx) => (
                          <li key={idx} className="policy-bullet-item">
                            <div className="bullet-check-box">
                              <CheckCircle2 size={16} className="bullet-check-icon" />
                            </div>
                            <span className="bullet-text">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.type === 'intro-bullets' && (
                      <div className="policy-intro-bullets-wrap">
                        <p className="policy-intro-text">{sec.intro}</p>
                        <ul className="policy-bullet-list">
                          {sec.bullets.map((bullet, idx) => (
                            <li key={idx} className="policy-bullet-item">
                              <div className="bullet-check-box">
                                <CheckCircle2 size={16} className="bullet-check-icon" />
                              </div>
                              <span className="bullet-text">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {sec.type === 'intro-bullets-outro' && (
                      <div className="policy-intro-bullets-wrap">
                        <p className="policy-intro-text">{sec.intro}</p>
                        <ul className="policy-bullet-list">
                          {sec.bullets.map((bullet, idx) => (
                            <li key={idx} className="policy-bullet-item">
                              <div className="bullet-check-box">
                                <CheckCircle2 size={16} className="bullet-check-icon" />
                              </div>
                              <span className="bullet-text">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        {sec.outro && (
                          <p className="policy-outro-text">{sec.outro}</p>
                        )}
                      </div>
                    )}

                    {sec.type === 'custom' && sec.content}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA SECTION
          ========================================================================= */}
      <CTASection
        badge="GOVERNANCE & TRUST"
        title="Have Questions About Our"
        highlightText="Policies or Security Posture?"
        subtitle="Our legal, compliance, and cybersecurity engineering specialists are here to provide assistance."
        primaryBtnText="CONTACT COMPLIANCE DESK"
        primaryBtnLink="/contact"
        secondaryBtnText="EXPLORE OUR PLATFORM"
        secondaryBtnLink="/platform"
      />
    </div>
  );
}
