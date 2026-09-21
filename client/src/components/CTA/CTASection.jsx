import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import { companyInfo } from '../../data/companyInfo';
import './CTASection.css';

export default function CTASection({
  badge = "ENGINEERED FOR RESILIENCE",
  title = "Ready to Transform Your Organization with",
  highlightText = "Autonomous Cyber Defense?",
  subtitle = "Engage Netcradus 24/7 Security Operations. Deploy ACIS and secure your hybrid enterprise against modern multi-stage cyber threats.",
  primaryBtnText = "Request Enterprise Security Assessment",
  secondaryBtnText = `Call 24/7 Desk: ${companyInfo.contact.tollFree}`
}) {
  return (
    <section className="cta-section-wrapper">
      <div className="cta-glow-backdrop" />
      <div className="container">
        <div className="cta-inner-panel glass-panel">
          <div className="cta-badge-wrapper">
            <span className="cyber-badge">
              <span className="badge-dot" />
              {badge}
            </span>
          </div>

          <h2 className="cta-main-title">
            {title} <span className="text-gradient-cyan">{highlightText}</span>
          </h2>

          <p className="cta-description">{subtitle}</p>

          <div className="cta-trust-points">
            <div className="trust-point">
              <ShieldCheck size={16} className="trust-icon" />
              <span>Sub-15 Min Incident SLA</span>
            </div>
            <div className="trust-point">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>24/7 SOC & SIEM Telemetry</span>
            </div>
            <div className="trust-point">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Zero-Trust Architecture</span>
            </div>
          </div>

          <div className="cta-buttons-row">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              {primaryBtnText}
            </Button>
            <Button href={`tel:${companyInfo.contact.tollFree.replace(/\s+/g, '')}`} variant="secondary" size="lg" icon={PhoneCall} iconPosition="left">
              {secondaryBtnText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
