import { 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Zap, 
  Lock, 
  ArrowRight, 
  CheckCircle, 
  FileCheck,
  CheckCircle2,
  Building2,
  ShoppingCart,
  DollarSign,
  Factory,
  Cloud
} from 'lucide-react';
import Hero from '../components/Hero/Hero';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import ThreatRadar from '../components/Interactive/ThreatRadar';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';

import { servicesData } from '../data/servicesData';
import { testimonialsData, industryCaseStudies } from '../data/careersData';
import ClientLogo from '../components/common/ClientLogo';
import './Home.css';

const industryIcons = {
  Healthcare: Building2,
  'E-commerce': ShoppingCart,
  Fintech: DollarSign,
  Manufacturing: Factory,
  'SaaS & Cloud Enterprises': Cloud
};

export default function Home() {
  return (
    <div className="page-home">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Core Cybersecurity Services */}
      <section className="section-py">
        <div className="container">
          <SectionHeader
            badge="ENTERPRISE DEFENSE PORTFOLIO"
            title="Comprehensive Cybersecurity"
            highlightText="Engineering & Managed Services"
            subtitle="A focused capability portfolio built for organizations that need cyber defense, visibility, automation, and operational scale without compromising control."
          />

          <div className="grid-3">
            {servicesData.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="view-all-services-bar text-center" style={{ marginTop: '3rem' }}>
            <Button to="/services" variant="secondary" size="lg" icon={ArrowRight}>
              Explore All 8 Enterprise Services & Compliance Standards
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Flagship Product: ACIS Deep Dive Showcase */}
      <section className="section-py acis-showcase-section" id="acis-highlight">
        <div className="acis-glow-bg" />
        <div className="container">
          <div className="acis-showcase-grid">
            <div className="acis-text-side">
              <span className="cyber-badge purple">
                <span className="badge-dot" />
                FLAGSHIP INNOVATION
              </span>
              <h2 className="acis-main-heading">
                ACIS — <span className="text-gradient-purple">Autonomous Cyber Immune System</span>
              </h2>
              <p className="acis-tagline-lead">Single Agent • Single Console • Autonomous Cyber Defense</p>
              
              <p className="acis-body-copy">
                Stay Ahead of Threats — Real-Time, Every Time, with Netcradus.
              </p>

              <div className="acis-highlights-list">
                <div className="acis-highlight-item glass-card">
                  <div className="highlight-icon-box">
                    <Zap size={20} className="text-cyan" />
                  </div>
                  <div>
                    <h4 className="highlight-title">Sub-Second Autonomous Containment</h4>
                    <p className="highlight-desc">Automated agentic playbook execution isolates compromised nodes, revokes rogue tokens, and neutralizes lateral spread.</p>
                  </div>
                </div>

                <div className="acis-highlight-item glass-card">
                  <div className="highlight-icon-box">
                    <Cpu size={20} className="text-purple" />
                  </div>
                  <div>
                    <h4 className="highlight-title">Centralized AI-SIEM & UEBA Telemetry</h4>
                    <p className="highlight-desc">Sub-second event correlation across cloud, endpoints, and networks with deep ML behavioral anomaly analysis.</p>
                  </div>
                </div>
              </div>

              <div className="acis-cta-row">
                <Button to="/products#acis" variant="primary" size="lg" icon={ArrowRight}>
                  Explore ACIS Architecture
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Request ACIS Demo
                </Button>
              </div>
            </div>

            <div className="acis-visual-side">
              <ThreatRadar />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Industry Case Studies */}
      <section className="section-py section-light-balance">
        <div className="container">
          <SectionHeader
            badge="PROVEN INDUSTRY SOLUTIONS"
            title="Real-World Threat Scenarios &"
            highlightText="Operational Results"
            subtitle="Explore how Netcradus neutralizes real-world cyber threats across critical sectors."
          />

          <div className="case-studies-grid">
            {industryCaseStudies.map((cs, idx) => {
              const IndIcon = industryIcons[cs.title] || ShieldCheck;
              return (
                <div key={idx} className="case-study-card">
                  <div className="case-card-top">
                    <div className="case-icon-box">
                      <IndIcon size={20} />
                    </div>
                    <div>
                      <span className="case-sector-label">{cs.title}</span>
                      <h3 className="case-card-title">{cs.subtitle}</h3>
                    </div>
                  </div>

                  <div className="case-detail-row problem">
                    <strong>Threat Vector:</strong>
                    <p>{cs.problem}</p>
                  </div>

                  <div className="case-detail-row solution">
                    <strong>Netcradus Resolution:</strong>
                    <p>{cs.solution}</p>
                  </div>

                  <div className="case-result-banner">
                    <CheckCircle2 size={16} className="case-res-icon" />
                    <span>{cs.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Netcradus */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="THE NETCRADUS ADVANTAGE"
            title="Why Global Enterprises Trust"
            highlightText="Netcradus for Cyber Defense"
            subtitle="Discover why global enterprises choose Netcradus for 24/7 SOC monitoring, sub-15 minute SLA incident response, zero-trust security, and AI-powered threat defense."
          />

          <div className="grid-3">
            <div className="glass-card trust-card">
              <div className="trust-card-icon-wrapper">
                <Activity size={28} className="text-cyan" />
              </div>
              <h3 className="trust-card-title">24/7 Dedicated SOC</h3>
              <p className="trust-card-desc">
                Continuous real-time threat hunting and monitoring across endpoints, servers, and multi-cloud layers with sub-15 minute SLA incident containment.
              </p>
              <div className="trust-metric-pill">24/7/365 Continuous Operations</div>
            </div>

            <div className="glass-card trust-card">
              <div className="trust-card-icon-wrapper">
                <Lock size={28} className="text-purple" />
              </div>
              <h3 className="trust-card-title">Zero-Trust Architecture</h3>
              <p className="trust-card-desc">
                Enforce least-privilege access, micro-segmentation, and continuous behavioral authentication across all enterprise assets and workloads.
              </p>
              <div className="trust-metric-pill">Zero Lateral Movement</div>
            </div>

            <div className="glass-card trust-card">
              <div className="trust-card-icon-wrapper">
                <FileCheck size={28} className="text-cyan" />
              </div>
              <h3 className="trust-card-title">Rigorous Compliance</h3>
              <p className="trust-card-desc">
                Audit-ready evidence gathering and automated mapping for ISO 27001, SOC 2 Type II, GDPR, NIST CSF, and ABDM healthcare standards.
              </p>
              <div className="trust-metric-pill">Audit-Ready Evidence</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Verified Client Testimonials */}
      <section className="section-py" style={{ background: 'rgba(10, 16, 38, 0.6)' }}>
        <div className="container">
          <SectionHeader
            badge="CLIENT TESTIMONIALS"
            title="Trusted by Modern"
            highlightText="Enterprises"
            subtitle="Verified reviews from organizations partnering with Netcradus for security operations and threat management."
          />

          <div className="grid-2 testimonials-2col-grid">
            {testimonialsData.map((test, idx) => (
              <div key={idx} className="glass-card testimonial-card">
                <div className="testimonial-result-badge">
                  <CheckCircle size={14} />
                  <span>{test.result}</span>
                </div>
                <p className="testimonial-quote">"{test.quote}"</p>
                <div className="testimonial-author-block">
                  <div className="testimonial-author-info">
                    <strong className="author-title">{test.company}</strong>
                    <span className="author-org">{test.industry}</span>
                  </div>
                  <div className="testimonial-logo-badge" title={`${test.company} Logo`}>
                    <ClientLogo logoKey={test.logoKey} company={test.company} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <CTASection />
    </div>
  );
}
