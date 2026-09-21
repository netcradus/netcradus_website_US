import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Activity, 
  Cloud, 
  Cpu, 
  Network, 
  Crosshair, 
  KeyRound, 
  HeartPulse, 
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import './Services.css';

const iconMap = {
  ShieldCheck,
  Activity,
  Cloud,
  Cpu,
  Network,
  Crosshair,
  KeyRound,
  HeartPulse
};

export default function Services() {
  const [activeService, setActiveService] = useState(servicesData[0]);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const found = servicesData.find(s => s.id === id);
      if (found) {
        setActiveService(found);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const IconComp = iconMap[activeService.icon] || ShieldCheck;

  return (
    <div className="page-services">
      {/* Hero */}
      <section className="services-hero-section cyber-grid-bg">
        <div className="container text-center">
          <span className="cyber-badge">
            <span className="badge-dot" />
            ENTERPRISE MANAGED SECURITY & DEFENSE
          </span>
          <h1 className="services-hero-title">
            Comprehensive Cybersecurity <br />
            <span className="text-gradient-cyan">Engineering & Managed Services</span>
          </h1>
          <p className="services-hero-sub">
            A focused capability portfolio built for organizations that need cyber defense, visibility, automation, and operational scale without compromising control.
          </p>
        </div>
      </section>

      {/* Interactive Service Explorer */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="EXPLORE CAPABILITIES"
            title="Interactive Security Service"
            highlightText="Architecture"
            subtitle="Select a service below to inspect technical deliverables, capabilities, SLAs, and compliance mappings."
          />

          <div className="services-interactive-layout glass-panel">
            {/* Sidebar list of 8 services */}
            <div className="services-sidebar-list">
              {servicesData.map((service) => {
                const ItemIcon = iconMap[service.icon] || ShieldCheck;
                return (
                  <button
                    key={service.id}
                    type="button"
                    className={`service-sidebar-btn ${activeService.id === service.id ? 'active' : ''}`}
                    onClick={() => setActiveService(service)}
                  >
                    <ItemIcon size={18} className="sidebar-icon" />
                    <div className="sidebar-text">
                      <span className="sidebar-title">{service.title}</span>
                      <span className="sidebar-tag">{service.tag}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Service Detailed View */}
            <div className="service-deep-view" id={activeService.id}>
              <div className="deep-view-header">
                <div className={`deep-icon-box ${activeService.accent || 'cyan'}`}>
                  <IconComp size={32} />
                </div>
                <div>
                  <span className="cyber-badge">{activeService.tag}</span>
                  <h2 className="deep-service-title">{activeService.title}</h2>
                </div>
              </div>

              <p className="deep-service-long-desc">
                {activeService.longDescription}
              </p>

              <div className="deep-sla-card glass-card">
                <div className="sla-item">
                  <Clock size={16} className="text-cyan" />
                  <span>SLA Benchmark: <strong>{activeService.sla}</strong></span>
                </div>
                <div className="sla-item">
                  <ShieldCheck size={16} className="text-cyan" />
                  <span>Zero-Trust Architecture: <strong>Strictly Enforced</strong></span>
                </div>
              </div>

              <div className="deep-capabilities-block">
                <h4 className="capabilities-headline">Key Technical Deliverables & Capabilities:</h4>
                <div className="deep-capabilities-grid">
                  {activeService.capabilities.map((cap, idx) => (
                    <div key={idx} className="deep-cap-row">
                      <CheckCircle2 size={16} className="cap-check-icon" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="deep-action-row">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                  Request {activeService.title} Scope & Pricing
                </Button>
                <Button to="/products#acis" variant="secondary" size="lg">
                  View Associated ACIS Modules
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 8 Services Complete Grid */}
      <section className="section-py">
        <div className="container">
          <SectionHeader
            badge="COMPLETE SERVICE CATALOGUE"
            title="All Netcradus Specialized"
            highlightText="Defense Practices"
            subtitle="Delivering board-level consulting, managed 24/7 SOC, and technical implementations across global enterprise networks."
          />

          <div className="grid-2 services-full-grid">
            {servicesData.map((svc) => {
              const SvcIcon = iconMap[svc.icon] || ShieldCheck;
              return (
                <div key={svc.id} className="glass-card full-service-card" id={`card-${svc.id}`}>
                  <div className="full-card-header">
                    <div className="full-icon-box">
                      <SvcIcon size={24} />
                    </div>
                    <div>
                      <span className="service-tag-badge">{svc.tag}</span>
                      <h3 className="full-service-title">{svc.title}</h3>
                    </div>
                  </div>
                  <p className="full-service-desc">{svc.longDescription}</p>
                  <ul className="full-service-list">
                    {svc.capabilities.map((cap, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="list-check" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="full-card-footer">
                    <span className="full-sla-text">SLA: {svc.sla}</span>
                    <Button to="/contact" variant="outline" size="sm" icon={ArrowRight}>
                      Inquire
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Harden Your Enterprise with"
        highlightText="Netcradus Managed Security?"
        subtitle="Speak directly with our security architects to design a customized defense roadmap."
      />
    </div>
  );
}
