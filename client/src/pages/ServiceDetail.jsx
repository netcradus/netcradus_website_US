import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Shield, 
  ShieldCheck, 
  Activity, 
  Cloud, 
  Cpu, 
  Network, 
  Crosshair, 
  KeyRound, 
  Key,
  HeartPulse, 
  Building2, 
  Bug, 
  Server, 
  Layers, 
  FileCheck, 
  FileCode, 
  Lock, 
  Globe, 
  Zap, 
  Database, 
  Users, 
  UserCheck, 
  Briefcase, 
  Smartphone, 
  Search, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';

const iconMap = {
  Shield,
  ShieldCheck,
  Activity,
  Cloud,
  Cpu,
  Network,
  Crosshair,
  KeyRound,
  Key,
  HeartPulse,
  Building2,
  Bug,
  Server,
  Layers,
  FileCheck,
  FileCode,
  Lock,
  Globe,
  Zap,
  Database,
  Users,
  UserCheck,
  Briefcase,
  Smartphone,
  Search,
  BarChart3
};

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Handle aliases if any (e.g. cybersecurity-engineering -> cybersecurity)
  const normalizedId = serviceId ? serviceId.toLowerCase().replace('-engineering', '') : '';
  const service = servicesData.find(s => s.id === normalizedId || s.id === serviceId);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Netcradus Cybersecurity Solutions`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const HeaderIcon = iconMap[service.icon] || ShieldCheck;
  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="service-detail-page">
      {/* 1. HERO SECTION */}
      <section className="service-hero-section">
        <div className="service-hero-bg-glow" />
        <div className="container">
          {/* Breadcrumb */}
          <div className="service-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </div>

          <div className="service-hero-grid">
            <div className="service-hero-content">
              <div className="service-hero-badge">
                <HeaderIcon size={16} className="badge-icon" />
                <span>{service.badge}</span>
              </div>

              <h1 className="service-hero-title">
                {service.subtitle || service.title}
              </h1>

              <p className="service-hero-desc">
                {service.heroDescription || service.overview}
              </p>

              <div className="service-hero-actions">
                <Link to="/contact" className="service-primary-btn">
                  <span>Schedule Consultation</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#capabilities" className="service-secondary-btn">
                  <span>Inspect Capabilities</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="service-hero-card-col">
              <div className="service-floating-card">
                <div className="card-top-header">
                  <div className="card-icon-container">
                    <HeaderIcon size={28} />
                  </div>
                  <div className="card-meta">
                    <span className="card-cat">{service.category}</span>
                    <h3 className="card-title">{service.title}</h3>
                  </div>
                </div>

                <div className="card-stats-grid">
                  {service.stats.map((st, i) => (
                    <div className="card-stat-box" key={i}>
                      <span className="stat-val">{st.val}</span>
                      <span className="stat-lbl">{st.label}</span>
                    </div>
                  ))}
                </div>

                <div className="card-footer-badge">
                  <span className="pulse-dot" />
                  <span>Enterprise SLA • Production Hardened</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PROBLEM STATEMENT */}
      <section className="service-section alt-dark-bg">
        <div className="container">
          <div className="service-overview-grid">
            <div className="overview-text">
              <span className="section-eyebrow">EXECUTIVE BRIEF</span>
              <h2 className="section-title">
                Strategic Cyber Defense & <span>Operational Resilience</span>
              </h2>
              <p className="overview-lead-paragraph">
                {service.overview}
              </p>
              <div className="overview-checklist">
                {service.capabilities.slice(0, 4).map((cap, idx) => (
                  <div className="overview-check-item" key={idx}>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overview-infobox-col">
              <div className="overview-infobox">
                <div className="infobox-badge">ENTERPRISE ASSURANCE</div>
                <h3>Why Leading Organizations Rely on Netcradus</h3>
                <p>
                  We combine autonomous AI security models with seasoned, certified threat analysts to defend high-stakes environments without operational friction.
                </p>
                <div className="infobox-points">
                  <div className="point-row">
                    <strong>Zero-Trust Architecture:</strong> Verified identity, continuous policy enforcement, and minimal attack surface.
                  </div>
                  <div className="point-row">
                    <strong>Regulatory Confidence:</strong> Full alignment with ISO 27001, SOC 2 Type II, DPDP Act 2023, GDPR, and CERT-In guidelines.
                  </div>
                  <div className="point-row">
                    <strong>Rapid Containment:</strong> Sub-second automated isolation playbooks backed by 24/7 incident response SLA.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE PILLARS */}
      {service.pillars && service.pillars.length > 0 && (
        <section className="service-section" id="pillars">
          <div className="container">
            <div className="section-header-center">
              <span className="section-eyebrow">CORE CAPABILITY MATRIX</span>
              <h2 className="section-title">
                Architectural Pillars & <span>Technical Scope</span>
              </h2>
              <p className="section-subtitle">
                Engineered to cover every layer of your security perimeter with deep inspection, telemetry fusion, and continuous governance.
              </p>
            </div>

            <div className="service-pillars-grid">
              {service.pillars.map((pil, idx) => {
                const PilIcon = iconMap[pil.icon] || Shield;
                return (
                  <div className="service-pillar-card" key={idx}>
                    <div className="pillar-icon-box">
                      <PilIcon size={22} />
                    </div>
                    <h3 className="pillar-title">{pil.title}</h3>
                    <p className="pillar-desc">{pil.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. TECHNICAL CAPABILITIES CHECKLIST */}
      <section className="service-section alt-dark-bg" id="capabilities">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">COMPREHENSIVE COVERAGE</span>
            <h2 className="section-title">
              Technical Deliverables & <span>Capabilities</span>
            </h2>
            <p className="section-subtitle">
              Every deployment includes end-to-end configuration, continuous monitoring integration, and audit-ready verification artifacts.
            </p>
          </div>

          <div className="capabilities-two-col-grid">
            {service.capabilities.map((cap, idx) => (
              <div className="capability-card" key={idx}>
                <div className="capability-check-circle">
                  <CheckCircle2 size={20} />
                </div>
                <div className="capability-text">
                  <h4>{cap}</h4>
                  <p>Production-grade implementation with continuous health checks and verified compliance traceability.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DELIVERY WORKFLOW */}
      {service.workflow && service.workflow.length > 0 && (
        <section className="service-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-eyebrow">EXECUTION MODEL</span>
              <h2 className="section-title">
                Engagement & <span>Deployment Workflow</span>
              </h2>
              <p className="section-subtitle">
                A structured, transparent lifecycle taking your organization from initial threat modeling to continuous proactive defense.
              </p>
            </div>

            <div className="service-workflow-track">
              {service.workflow.map((wf, idx) => (
                <div className="workflow-step-card" key={idx}>
                  <div className="workflow-step-num">{wf.step}</div>
                  <h3 className="workflow-step-title">{wf.title}</h3>
                  <p className="workflow-step-desc">{wf.desc}</p>
                  {idx < service.workflow.length - 1 && (
                    <div className="workflow-connector-line" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. TARGET INDUSTRIES */}
      {service.industries && service.industries.length > 0 && (
        <section className="service-section alt-dark-bg">
          <div className="container">
            <div className="section-header-center">
              <span className="section-eyebrow">SECTOR EXPERTISE</span>
              <h2 className="section-title">
                Tailored for <span>Regulated & Critical Industries</span>
              </h2>
              <p className="section-subtitle">
                Customized threat profiles and compliance mappings tailored to your industry's specific threat landscape.
              </p>
            </div>

            <div className="service-industries-grid">
              {service.industries.map((ind, idx) => (
                <div className="service-industry-pill" key={idx}>
                  <Building2 size={18} className="industry-icon" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. RELATED SERVICES */}
      <section className="service-section">
        <div className="container">
          <div className="section-header-between">
            <div>
              <span className="section-eyebrow">CROSS-PLATFORM DEFENSE</span>
              <h2 className="section-title">Explore Related Solutions</h2>
            </div>
            <Link to="/services" className="see-all-services-link">
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="related-services-grid">
            {relatedServices.map((rel) => {
              const RelIcon = iconMap[rel.icon] || Shield;
              return (
                <Link to={`/services/${rel.id}`} className="related-service-card" key={rel.id}>
                  <div className="rel-icon-box">
                    <RelIcon size={22} />
                  </div>
                  <div className="rel-meta">
                    <span className="rel-cat">{rel.category}</span>
                    <h3 className="rel-title">{rel.title}</h3>
                    <p className="rel-desc">{rel.heroDescription.slice(0, 110)}...</p>
                  </div>
                  <span className="rel-action-arrow">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="service-final-cta-section">
        <div className="container">
          <div className="service-final-cta-card">
            <div className="cta-tech-glow" />
            <span className="cta-badge">TALK TO OUR CYBERSECURITY TEAM</span>
            <h2>
              Ready to Strengthen Your Security Posture with {service.title}?
            </h2>
            <p>
              Schedule an architecture review with our senior cybersecurity engineers to evaluate vulnerabilities, compliance requirements, and custom deployment options.
            </p>
            <div className="cta-actions-row">
              <Link to="/contact" className="cta-primary-btn">
                <span>Request Security Assessment</span>
                <ArrowRight size={18} />
              </Link>
              <a href="tel:1800121008800" className="cta-secondary-btn">
                <PhoneCall size={16} />
                <span>Toll-Free: 1800 121 008800</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
