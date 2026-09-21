import React, { useState } from 'react';
import { 
  Shield, 
  Cpu, 
  Zap, 
  Activity, 
  Lock, 
  Server, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Database,
  FileCheck,
  Check
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import ThreatRadar from '../components/Interactive/ThreatRadar';
import CyberTerminal from '../components/Interactive/CyberTerminal';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';
import { productsData, platformTiers } from '../data/productsData';
import './Products.css';

const tierIcons = {
  'endpoint-detection': Server,
  'siem': Database,
  'soar': Zap,
  'cti': Globe,
  'pam': Lock,
  'grc': FileCheck,
  'ai-security-tier': Cpu
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);

  return (
    <div className="page-products">
      {/* Products Hero */}
      <section className="products-hero-section cyber-grid-bg">
        <div className="container text-center">
          <span className="cyber-badge purple">
            <span className="badge-dot" />
            ENTERPRISE PLATFORMS & SUITES
          </span>
          <h1 className="products-hero-title">
            Converged AI Cyber Defense & <br />
            <span className="text-gradient-purple">Autonomous Protection Systems</span>
          </h1>
          <p className="products-hero-sub">
            Discover AI-powered cybersecurity and business platforms designed to protect, automate, and accelerate your organization through a unified ecosystem.
          </p>
        </div>
      </section>

      {/* 1. Flagship: ACIS Deep Dive */}
      <section className="section-py acis-deep-dive-section" id="acis">
        <div className="container">
          <div className="acis-showcase-box glass-panel">
            <div className="acis-top-meta">
              <span className="cyber-badge purple">FLAGSHIP CYBER IMMUNE SYSTEM</span>
              <span className="acis-version-tag">ACIS 2026 ENTERPRISE ARCHITECTURE</span>
            </div>

            <div className="acis-hero-grid">
              <div>
                <h2 className="acis-title">ACIS</h2>
                <h3 className="acis-subtitle text-gradient-cyan">Autonomous Cyber Immune System</h3>
                <p className="acis-lead">
                  Single Agent • Single Console • Autonomous Cyber Defense
                </p>
                <p className="acis-desc">
                  Netcradus engineers the future of cyber defense. Through our ACIS platform, we combine AI-driven threat detection, automated response, and enterprise-grade resilience to protect what matters most — before threats even strike.
                </p>

                <div className="acis-stat-pills">
                  <div className="stat-pill">
                    <span className="pill-val text-gradient-cyan">&lt; 14ms</span>
                    <span className="pill-lbl">Autonomous Containment</span>
                  </div>
                  <div className="stat-pill">
                    <span className="pill-val text-gradient-purple">100k+ eps</span>
                    <span className="pill-lbl">Event Correlation</span>
                  </div>
                  <div className="stat-pill">
                    <span className="pill-val" style={{ color: '#34D399' }}>Zero-Trust</span>
                    <span className="pill-lbl">Enforced Across Nodes</span>
                  </div>
                </div>

                <div className="acis-cta-buttons">
                  <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                    Deploy ACIS in Your Organization
                  </Button>
                  <Button to="/contact" variant="secondary" size="lg">
                    Request Architecture White Paper
                  </Button>
                </div>
              </div>

              <div className="acis-visual-panel">
                <ThreatRadar />
              </div>
            </div>

            {/* ACIS Features Grid */}
            <div className="acis-features-4col">
              <div className="glass-card feature-tile">
                <Zap className="feat-icon cyan" size={24} />
                <h4>Autonomous Containment</h4>
                <p>Automated agentic playbook orchestration that isolates compromised hosts, revokes compromised tokens, and stops lateral movement in milliseconds.</p>
              </div>
              <div className="glass-card feature-tile">
                <Cpu className="feat-icon purple" size={24} />
                <h4>Unified AI-SIEM</h4>
                <p>Sub-second event correlation across cloud, network, and endpoints with deep ML anomaly detection.</p>
              </div>
              <div className="glass-card feature-tile">
                <Activity className="feat-icon cyan" size={24} />
                <h4>UEBA Telemetry</h4>
                <p>User & Entity Behavior Analytics baselining normal behavior to immediately flag credential theft and insider threats.</p>
              </div>
              <div className="glass-card feature-tile">
                <Shield className="feat-icon purple" size={24} />
                <h4>Adaptive Self-Healing</h4>
                <p>Dynamic immune response adapting to novel zero-day vectors and evolving adversary tradecraft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seven Converged Platform Tiers */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="SEVEN DEFENSE TIERS"
            title="The 7 Converged Security"
            highlightText="Architecture Tiers"
            subtitle="Explore the individual converged pillars that power the Netcradus cyber resilience ecosystem."
          />

          <div className="grid-3 platform-tiers-grid">
            {platformTiers.map((tier) => {
              const TierIcon = tierIcons[tier.id] || Shield;
              return (
                <div key={tier.id} className="glass-card platform-tier-card" id={`tier-${tier.id}`}>
                  <div className="tier-card-header">
                    <div className="tier-icon-container">
                      <TierIcon size={24} />
                    </div>
                    <span className="tier-pill-badge">{tier.id.toUpperCase()}</span>
                  </div>
                  <h3 className="tier-card-heading">{tier.title}</h3>
                  <h4 className="tier-card-subheading">{tier.subtitle}</h4>
                  <p className="tier-card-description">{tier.description}</p>
                  
                  <div className="tier-card-caps">
                    {tier.capabilities.map((c, idx) => (
                      <div key={idx} className="tier-cap-row">
                        <CheckCircle2 size={14} className="cap-icon" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tier-card-bottom">
                    <Button to="/contact" variant="outline" size="sm" icon={ArrowRight}>
                      Inquire Tier
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Enterprise Products: NetXDR, NetCRAD, CRM */}
      <section className="section-py">
        <div className="container">
          <SectionHeader
            badge="ENTERPRISE PRODUCT SUITE"
            title="Specialized Solutions for"
            highlightText="Endpoints, Web & Operations"
            subtitle="High-performance cybersecurity software designed to secure every digital asset."
          />

          <div className="products-stack-list">
            {/* NetXDR */}
            <div className="glass-panel product-spotlight-card" id="netxdr">
              <div className="spotlight-content">
                <span className="cyber-badge">ENDPOINT + NETWORK DEFENSE</span>
                <h3 className="spotlight-title">NetXDR / Cyrix XDR</h3>
                <p className="spotlight-tagline">AI-Powered Unified Endpoint, Cloud & Network Protection</p>
                <p className="spotlight-body">
                  Protect endpoints, servers, and multi-cloud workloads in real time. NetCradus Cyrix XDR unifies EDR, behavioral NGAV, and proactive threat hunting into one synchronized console.
                </p>
                <ul className="spotlight-feats">
                  <li><Check size={16} className="spot-check" /> Behavioral NGAV & Anti-Ransomware rollback</li>
                  <li><Check size={16} className="spot-check" /> Continuous proactive threat hunting & MITRE mapping</li>
                  <li><Check size={16} className="spot-check" /> Light agent footprint with sub-second telemetry sync</li>
                </ul>
                <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                  Request NetXDR Deployment
                </Button>
              </div>
              <div className="spotlight-terminal">
                <CyberTerminal />
              </div>
            </div>

            {/* NetCRAD */}
            <div className="glass-panel product-spotlight-card reverse" id="netcrad">
              <div className="spotlight-content">
                <span className="cyber-badge purple">AI WEB AUDITING</span>
                <h3 className="spotlight-title">NetCRAD Scanner</h3>
                <p className="spotlight-tagline">Automated Website Security Auditing & Compliance Intelligence</p>
                <p className="spotlight-body">
                  AI-powered website security auditing and vulnerability assessment platform that scans websites for security weaknesses, compliance issues, SSL misconfigurations, and performance risks with actionable remediation insights.
                </p>
                <ul className="spotlight-feats">
                  <li><Check size={16} className="spot-check" /> Automated full-stack OWASP Top 10 vulnerability scan</li>
                  <li><Check size={16} className="spot-check" /> SSL/TLS & Cryptographic hygiene verification</li>
                  <li><Check size={16} className="spot-check" /> Actionable developer remediation guides & instant PDF reports</li>
                </ul>
                <Button to="/contact" variant="secondary" size="md" icon={ArrowRight}>
                  Launch NetCRAD Security Audit
                </Button>
              </div>
              <div className="spotlight-stat-box glass-card">
                <div className="netcrad-stat">
                  <span className="stat-big text-gradient-cyan">100%</span>
                  <span className="stat-desc">OWASP Top 10 Coverage</span>
                </div>
                <div className="netcrad-stat">
                  <span className="stat-big text-gradient-purple">Instant</span>
                  <span className="stat-desc">Actionable Dev Fix Reports</span>
                </div>
              </div>
            </div>

            {/* Netcradus CRM */}
            <div className="glass-panel product-spotlight-card" id="crm">
              <div className="spotlight-content">
                <span className="cyber-badge green">ENTERPRISE PLATFORM</span>
                <h3 className="spotlight-title">Netcradus CRM</h3>
                <p className="spotlight-tagline">Secure Enterprise Relationship & Operations Platform</p>
                <p className="spotlight-body">
                  Enterprise relationship and operations platform designed to streamline operations, integrate disparate data nodes, automate repetitive workflows, and scale securely in hybrid cloud environments.
                </p>
                <ul className="spotlight-feats">
                  <li><Check size={16} className="spot-check" /> Granular role-based encryption & access audit trails</li>
                  <li><Check size={16} className="spot-check" /> Automated SLA escalations & client workflow engine</li>
                  <li><Check size={16} className="spot-check" /> 99.99% Enterprise Uptime with REST API extensibility</li>
                </ul>
                <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                  Request Enterprise CRM Demo
                </Button>
              </div>
              <div className="spotlight-stat-box glass-card">
                <div className="netcrad-stat">
                  <span className="stat-big" style={{ color: '#34D399' }}>99.99%</span>
                  <span className="stat-desc">Enterprise SLA Uptime</span>
                </div>
                <div className="netcrad-stat">
                  <span className="stat-big text-gradient-cyan">AES-256</span>
                  <span className="stat-desc">End-to-End Data Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACIS Deployment Pricing Plans */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="DEPLOYMENT EDITIONS"
            title="Flexible ACIS Platform"
            highlightText="Deployment Tiers"
            subtitle="Tailored packages engineered for growing organizations and global multi-branch enterprises."
          />

          <div className="grid-3 pricing-plans-grid">
            {/* ACIS Lite */}
            <div className="glass-card pricing-card">
              <div className="pricing-tag">ENTRY TIER</div>
              <h3 className="pricing-title">ACIS Lite</h3>
              <p className="pricing-desc">Core automated protection for growing businesses needing cloud SOC integrations.</p>
              <ul className="pricing-feats-list">
                <li><CheckCircle2 size={15} className="price-check" /> Automated host containment playbooks</li>
                <li><CheckCircle2 size={15} className="price-check" /> Centralized log ingestion limits</li>
                <li><CheckCircle2 size={15} className="price-check" /> Standard behavioral NGAV</li>
                <li><CheckCircle2 size={15} className="price-check" /> Business hours technical support</li>
              </ul>
              <Button to="/contact" variant="outline" size="md" className="w-full">
                Get ACIS Lite Scope
              </Button>
            </div>

            {/* ACIS Pro */}
            <div className="glass-card pricing-card featured">
              <div className="featured-price-badge">MOST POPULAR</div>
              <div className="pricing-tag text-gradient-cyan">ADVANCED TIER</div>
              <h3 className="pricing-title">ACIS Pro</h3>
              <p className="pricing-desc">Advanced threat hunting, dedicated SOC monitoring, and fast incident response SLA.</p>
              <ul className="pricing-feats-list">
                <li><CheckCircle2 size={15} className="price-check" /> Sub-15 minute SLA response</li>
                <li><CheckCircle2 size={15} className="price-check" /> 24/7 Dedicated SOC & SIEM analyst monitoring</li>
                <li><CheckCircle2 size={15} className="price-check" /> Full UEBA telemetry & anomaly scoring</li>
                <li><CheckCircle2 size={15} className="price-check" /> Multi-cloud posture compliance audits</li>
              </ul>
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Get ACIS Pro Scope
              </Button>
            </div>

            {/* ACIS Enterprise */}
            <div className="glass-card pricing-card">
              <div className="pricing-tag">MISSION CRITICAL</div>
              <h3 className="pricing-title">ACIS Enterprise</h3>
              <p className="pricing-desc">Full autonomous cyber immune architecture for global hybrid enterprises.</p>
              <ul className="pricing-feats-list">
                <li><CheckCircle2 size={15} className="price-check" /> Sub-second autonomous containment</li>
                <li><CheckCircle2 size={15} className="price-check" /> Unlimited log ingestion & correlation</li>
                <li><CheckCircle2 size={15} className="price-check" /> Dedicated Threat Hunting & Red Team squad</li>
                <li><CheckCircle2 size={15} className="price-check" /> Custom SOAR playbooks & executive dashboards</li>
              </ul>
              <Button to="/contact" variant="outline" size="md" className="w-full">
                Contact for Enterprise Custom Tier
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Deploy Netcradus Autonomous Cyber"
        highlightText="Immune Protection"
        subtitle="Request a live technical demonstration of ACIS with our principal security architects."
      />
    </div>
  );
}
