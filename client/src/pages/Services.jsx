import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Activity, 
  Cloud, 
  Cpu, 
  Network, 
  Crosshair, 
  KeyRound, 
  HeartPulse, 
  Building2, 
  Bug, 
  ArrowRight,
  CheckCircle2,
  Shield
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/CTA/CTASection';
import './Services.css';

const iconMap = {
  ShieldCheck,
  Activity,
  Cloud,
  Cpu,
  Network,
  Crosshair,
  KeyRound,
  HeartPulse,
  Building2,
  Bug,
  Shield
};

export default function Services() {
  useEffect(() => {
    document.title = "Managed Security Services & Enterprise Solutions | Netcradus";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-services">
      {/* 1. HERO */}
      <section className="services-hero-section cyber-grid-bg">
        <div className="container text-center">
          <span className="cyber-badge">
            <span className="badge-dot" />
            ENTERPRISE MANAGED SECURITY & DEFENSE
          </span>
          <h1 className="services-hero-title">
            Comprehensive Cybersecurity <br />
            <span className="text-gradient-orange">Engineering & Managed Services</span>
          </h1>
          <p className="services-hero-sub">
            A focused capability portfolio built for organizations that need enterprise cyber defense, 24/7 SOC monitoring, multi-cloud protection, and regulatory compliance.
          </p>
          <div className="services-hero-buttons">
            <Link to="/contact" className="services-primary-cta">
              <span>Talk to a Security Expert</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CATALOGUE GRID */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="SOLUTIONS & DEFENSE PORTFOLIO"
            title="Enterprise Cybersecurity"
            highlightText="Services & Solutions"
            subtitle="Click any specialized practice below to explore dedicated architecture, capabilities, delivery workflows, and compliance deliverables."
          />

          <div className="services-catalogue-grid">
            {servicesData.map((service) => {
              const ServiceIcon = iconMap[service.icon] || ShieldCheck;
              return (
                <div key={service.id} className="service-catalogue-card glass-panel">
                  <div className="card-header-row">
                    <div className="service-card-icon-box">
                      <ServiceIcon size={24} />
                    </div>
                    <span className="service-card-cat-badge">{service.category}</span>
                  </div>

                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.heroDescription}</p>

                  <div className="service-card-caps">
                    <span className="caps-label">Key Deliverables:</span>
                    <ul className="caps-list">
                      {service.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i}>
                          <CheckCircle2 size={15} className="cap-bullet-icon" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card-footer">
                    <Link to={`/services/${service.id}`} className="service-explore-link">
                      <span>Explore {service.tagline || 'Service'}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <CTASection
        title="Ready to Harden Your Enterprise with"
        highlightText="Netcradus Managed Security?"
        subtitle="Speak directly with our cybersecurity architects to design a customized defense roadmap."
      />
    </div>
  );
}
