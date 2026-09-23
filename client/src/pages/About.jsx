import React from 'react';
import { 
  Target, 
  Eye, 
  Lock, 
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/CTA/CTASection';
import StatsCounter from '../components/common/StatsCounter';
import { companyInfo } from '../data/companyInfo';
import './About.css';

export default function About() {
  return (
    <div className="page-about">
      {/* Hero Banner */}
      <section className="about-hero-section cyber-grid-bg">
        <div className="container text-center">
          <span className="cyber-badge">
            <span className="badge-dot" />
            WHO WE ARE & WHAT WE DO
          </span>
          <h1 className="about-hero-title">
            Engineering the Future of <br />
            <span className="text-gradient-cyan">Autonomous Cyber Defense</span>
          </h1>
          <p className="about-hero-sub">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-py" id="mission-vision">
        <div className="container">
          <div className="grid-2 mission-vision-grid">
            <div className="glass-card mission-vision-card">
              <div className="card-top-icon-row">
                <div className="icon-box cyan">
                  <Target size={24} />
                </div>
                <span className="card-badge-label">OUR MISSION</span>
              </div>
              <h3 className="card-main-title">Autonomous Cyber Resilience</h3>
              <p className="card-text-body">
                To deliver proactive, machine-speed cybersecurity immune systems that detect, correlate, and autonomously neutralize sophisticated cyber threats before they can impact organizational continuity, data integrity, or customer trust.
              </p>
              <ul className="card-bullet-list">
                <li><CheckCircle2 size={15} className="bullet-icon cyan" /> Sub-15 minute rapid threat containment SLA</li>
                <li><CheckCircle2 size={15} className="bullet-icon cyan" /> Zero-Trust architecture across hybrid workloads</li>
                <li><CheckCircle2 size={15} className="bullet-icon cyan" /> Single console unified threat visibility</li>
              </ul>
            </div>

            <div className="glass-card mission-vision-card">
              <div className="card-top-icon-row">
                <div className="icon-box purple">
                  <Eye size={24} />
                </div>
                <span className="card-badge-label">OUR VISION</span>
              </div>
              <h3 className="card-main-title">Self-Healing Digital Infrastructure</h3>
              <p className="card-text-body">
                To empower global enterprises with intelligent cyber defense platforms where security telemetry from cloud, endpoints, and networks converge into an autonomous, self-healing immune ecosystem capable of withstanding state-sponsored adversaries and novel AI vectors.
              </p>
              <ul className="card-bullet-list">
                <li><CheckCircle2 size={15} className="bullet-icon purple" /> Converged 7-tier cybersecurity platform</li>
                <li><CheckCircle2 size={15} className="bullet-icon purple" /> Autonomous AI-driven playbook orchestration</li>
                <li><CheckCircle2 size={15} className="bullet-icon purple" /> Continuous global threat intelligence integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-py cyber-grid-subtle" id="why-us">
        <div className="container">
          <SectionHeader
            badge="ENTERPRISE STRENGTHS"
            title="Our Core Engineering"
            highlightText="Capabilities"
            subtitle="Netcradus delivers board-level cybersecurity consulting, threat intelligence, and digital defense frameworks designed to mitigate systemic risk and satisfy rigorous regulatory compliance."
          />

          <div className="grid-3">
            <div className="glass-card capability-box">
              <div className="cap-num">01</div>
              <h4>Autonomous Immune Systems</h4>
              <p>Combining AI-driven behavioral analytics and automated SOAR containment playbooks into the ACIS platform.</p>
            </div>
            <div className="glass-card capability-box">
              <div className="cap-num">02</div>
              <h4>24/7 Security Operations</h4>
              <p>Round-the-clock SOC & SIEM monitoring with dedicated threat analysts and sub-15 minute response times.</p>
            </div>
            <div className="glass-card capability-box">
              <div className="cap-num">03</div>
              <h4>Zero Trust Hardening</h4>
              <p>Least-privilege access enforcement, micro-segmentation, and continuous behavioral authentication.</p>
            </div>
            <div className="glass-card capability-box">
              <div className="cap-num">04</div>
              <h4>Cloud & Container Defense</h4>
              <p>Continuous posture management, drift detection, and runtime security across AWS, Azure, GCP, and Kubernetes.</p>
            </div>
            <div className="glass-card capability-box">
              <div className="cap-num">05</div>
              <h4>Offensive VAPT & Red Teaming</h4>
              <p>Rigorous ethical hacking, application fuzzing, and Active Directory penetration tests with actionable fixes.</p>
            </div>
            <div className="glass-card capability-box">
              <div className="cap-num">06</div>
              <h4>Governance & Compliance</h4>
              <p>Continuous audit-ready evidence mapping for ISO 27001, SOC 2 Type II, GDPR, NIST CSF, and ABDM health standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="section-py-sm">
        <div className="container">
          <StatsCounter stats={companyInfo.stats} />
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="section-py" style={{ background: 'rgba(8, 14, 30, 0.7)' }}>
        <div className="container">
          <SectionHeader
            badge="GLOBAL FOOTPRINT"
            title="Operational Presence in"
            highlightText="India & United States"
            subtitle="Netcradus delivers autonomous cyber defense and technical consulting through its strategic operational hubs."
          />

          <div className="grid-2 global-presence-grid">
            <div className="glass-card presence-card">
              <div className="presence-top">
                <div className="presence-country-pill cyan">INDIA</div>
                <h3 className="presence-company-title">{companyInfo.offices.india.companyName}</h3>
                <span className="presence-role-text">Global Engineering & 24/7 SOC Operations</span>
              </div>
              <p className="presence-body-text">
                Center for core ACIS platform engineering, security research, continuous SIEM/SOC telemetry monitoring, and rapid incident containment.
              </p>
              <div className="presence-footer-row">
                <div className="presence-loc-item">
                  <span className="loc-label">Location:</span>
                  <span className="loc-val">{companyInfo.offices.india.city}, {companyInfo.offices.india.state}, {companyInfo.offices.india.country}</span>
                </div>
                <div className="presence-loc-item">
                  <span className="loc-label">Toll-Free Helpline:</span>
                  <span className="loc-val">
                    <a href={`tel:${companyInfo.offices.india.tollFree.replace(/\s+/g, '')}`}>{companyInfo.offices.india.tollFree}</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card presence-card">
              <div className="presence-top">
                <div className="presence-country-pill purple">UNITED STATES</div>
                <h3 className="presence-company-title">{companyInfo.offices.usa.companyName}</h3>
                <span className="presence-role-text">North America Enterprise Operations</span>
              </div>
              <p className="presence-body-text">
                North America enterprise engagement, client advisory, and strategic cybersecurity consulting for global organizations.
              </p>
              <div className="presence-footer-row">
                <div className="presence-loc-item">
                  <span className="loc-label">Location:</span>
                  <span className="loc-val">{companyInfo.offices.usa.city}, {companyInfo.offices.usa.state}, {companyInfo.offices.usa.country}</span>
                </div>
                <div className="presence-loc-item">
                  <span className="loc-label">Direct Phone:</span>
                  <span className="loc-val">
                    <a href={`tel:${companyInfo.offices.usa.phoneRaw}`}>{companyInfo.offices.usa.phone}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="section-py" style={{ background: 'rgba(5, 9, 20, 0.85)' }}>
        <div className="container text-center">
          <SectionHeader
            badge="TRUST & COMPLIANCE"
            title="Aligned with Global"
            highlightText="Security Frameworks"
            subtitle="Our defense methodologies adhere to the highest international cybersecurity benchmarks and regulatory mandates."
          />

          <div className="compliance-grid-display">
            {companyInfo.complianceStandards.map((std, idx) => (
              <div key={idx} className="glass-card compliance-framework-card">
                <Lock size={22} className="compliance-icon" />
                <span className="framework-name">{typeof std === 'object' ? std.name : std}</span>
                <span className="framework-status">{typeof std === 'object' ? std.scope : 'COMPLIANT & AUDIT-READY'}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Partner with Netcradus to Build"
        highlightText="Resilient Cyber Immunity"
        subtitle="Schedule a technical architecture briefing with our principal cybersecurity consultants."
      />
    </div>
  );
}
