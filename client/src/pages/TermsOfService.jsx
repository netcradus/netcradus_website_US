import React, { useEffect } from 'react';
import {
  Layers,
  UserCheck,
  Lock,
  Scale
} from 'lucide-react';
import CTASection from '../components/CTA/CTASection';
import './TermsOfService.css';

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | Netcradus";
    window.scrollTo(0, 0);
  }, []);

  const termsSections = [
    {
      id: "scope-of-services",
      number: "01",
      title: "Scope of Services",
      icon: Layers,
      paragraphs: [
        "These Terms of Service govern the use of Netcradus websites, advisory engagements, managed security services, and associated platform offerings. Client-specific statements of work, order forms, or service schedules supplement these terms where applicable.",
        "Netcradus delivers cybersecurity services on a commercially reasonable basis and in accordance with agreed engagement parameters, timelines, and technical dependencies supplied by the client."
      ]
    },
    {
      id: "client-responsibilities",
      number: "02",
      title: "Client Responsibilities",
      icon: UserCheck,
      paragraphs: [
        "Clients are responsible for ensuring authorized access, maintaining lawful control over the environments submitted for assessment or monitoring, and supplying accurate operational information required for delivery.",
        "Where security testing or response actions are requested, clients must ensure internal approvals are in place and that all relevant stakeholders understand the scope, timing, and risk posture of the engagement."
      ]
    },
    {
      id: "confidentiality-acceptable-use",
      number: "03",
      title: "Confidentiality and Acceptable Use",
      icon: Lock,
      paragraphs: [
        "Both parties will protect confidential information using appropriate technical and organizational safeguards. Netcradus will process confidential client information strictly for contracted service delivery, legal compliance, or incident management obligations.",
        "Clients must not use Netcradus services to violate applicable law, facilitate unlawful surveillance, interfere with third-party systems without authorization, or distribute malicious content."
      ]
    },
    {
      id: "liability-governing-law",
      number: "04",
      title: "Liability and Governing Law",
      icon: Scale,
      paragraphs: [
        "Except where prohibited by law, liability arising from use of Netcradus services is limited to direct damages and subject to the fee caps defined in the relevant commercial agreement. Netcradus is not liable for indirect, punitive, or consequential loss.",
        "These terms are governed by applicable law as agreed in definitive commercial agreements. In the absence of an express contract, applicable governing law and dispute jurisdiction require formal business confirmation."
      ]
    }
  ];

  return (
    <div className="terms-page">
      {/* Ambient Glow */}
      <div className="terms-ambient-glow" aria-hidden="true" />

      {/* =========================================================================
          HERO / HEADING SECTION (CENTERED)
          ========================================================================= */}
      <section className="terms-hero-section cyber-grid-bg">
        <div className="terms-container">
          <div className="terms-hero-content">
            <div className="terms-hero-badge">
              <span className="cyber-badge">
                <span className="badge-dot" />
                GOVERNANCE & LEGAL TERMS
              </span>
            </div>

            <h1 className="terms-hero-title">
              Terms of <span className="text-gradient-orange">Service</span>
            </h1>

            <p className="terms-hero-desc">
              Terms of Service governing the use of Netcradus websites, managed security services, and platform offerings.
            </p>

            <p className="terms-supporting-text">
              Official governance, privacy, and compliance disclosures for Netcradus.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TERMS SECTIONS (CENTERED SINGLE COLUMN STACK)
          ========================================================================= */}
      <section className="section-py terms-content-section">
        <div className="terms-container">
          <div className="terms-cards-list">
            {termsSections.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="terms-card glass-card"
                >
                  {/* Card Header */}
                  <div className="terms-card-header">
                    <div className="terms-number-badge">
                      <span className="badge-prefix">SECTION</span>
                      <span className="badge-digits">{sec.number}</span>
                    </div>

                    <div className="terms-header-title-wrap">
                      <div className="terms-title-row">
                        <div className="terms-icon-circle">
                          <IconComponent size={20} />
                        </div>
                        <h2 className="terms-title">{sec.title}</h2>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="terms-card-body">
                    {sec.paragraphs.map((p, idx) => (
                      <p key={idx} className="terms-paragraph">
                        {p}
                      </p>
                    ))}
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
        highlightText="Terms or Commercial Agreements?"
        subtitle="Our legal and enterprise operations team is available to assist with contract parameters and SLA commitments."
        primaryBtnText="CONTACT LEGAL DESK"
        primaryBtnLink="/contact"
        secondaryBtnText="EXPLORE OUR PLATFORM"
        secondaryBtnLink="/platform"
      />
    </div>
  );
}
