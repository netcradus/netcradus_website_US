import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  Users, 
  Cpu, 
  Check, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import ThreatRadar from '../components/Interactive/ThreatRadar';
import CyberTerminal from '../components/Interactive/CyberTerminal';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';
import './Products.css';

const productsList = [
  {
    id: "netcrad",
    name: "NetCRAD Scanner",
    badge: "AI WEB SECURITY & AUDIT",
    tagline: "Discover Security Risks Before Hackers Do",
    description: "Netcrad is an intelligent Website Security Audit platform that scans your website for security vulnerabilities, configuration weaknesses, performance issues, and compliance risks—helping you secure your digital presence before attackers can exploit it.",
    highlights: [
      "Automated full-stack OWASP Top 10 vulnerability scan",
      "SSL/TLS & Cryptographic hygiene verification",
      "Actionable developer remediation guides & instant PDF reports",
      "Continuous domain monitoring & certificate drift alerts"
    ],
    stats: [
      { val: "100%", label: "OWASP Top 10 Coverage" },
      { val: "< 60s", label: "Scan Velocity" },
      { val: "Instant", label: "Dev PDF Reports" }
    ],
    primaryLink: "/netcrad",
    primaryText: "Explore NetCrad Platform",
    secondaryLink: "/contact",
    secondaryText: "Start Free Website Audit",
    accent: "orange"
  },
  {
    id: "netxdr",
    name: "Cyrix XDR / NetXDR",
    badge: "UNIFIED ENDPOINT & CLOUD",
    tagline: "AI-Powered Unified Endpoint, Cloud & Network Protection",
    description: "Protect endpoints, servers, and multi-cloud workloads in real time. NetCradus Cyrix XDR unifies EDR, behavioral Next-Gen Antivirus (NGAV), network telemetry, and proactive threat hunting into one synchronized console.",
    highlights: [
      "Behavioral NGAV & Instant Ransomware Rollback",
      "Continuous Proactive Threat Hunting & MITRE ATT&CK Mapping",
      "Kernel eBPF Telemetry Fusion across Windows, Linux & Mac",
      "Sub-second alert correlation and distributed detection"
    ],
    stats: [
      { val: "< 14ms", label: "Threat Isolation" },
      { val: "eBPF", label: "Kernel Telemetry" },
      { val: "100%", label: "MITRE ATT&CK Sync" }
    ],
    primaryLink: "/netxdr",
    primaryText: "Explore Cyrix XDR",
    secondaryLink: "/contact",
    secondaryText: "Request XDR Trial",
    accent: "purple"
  },
  {
    id: "crm",
    name: "NetCRM",
    badge: "CUSTOMER WORKSPACE & OPERATIONS",
    tagline: "Secure Enterprise Relationship & Operations Platform",
    description: "Enterprise relationship and operations platform designed to streamline customer touchpoints, automate complex operational workflows, integrate disparate data nodes, and scale securely in hybrid cloud environments.",
    highlights: [
      "Granular role-based encryption & access audit trails",
      "Automated SLA escalations & client workflow engine",
      "99.99% Enterprise SLA Uptime with REST API extensibility",
      "Integrated cybersecurity status monitoring & reporting"
    ],
    stats: [
      { val: "99.99%", label: "Enterprise SLA Uptime" },
      { val: "AES-256", label: "Data Encryption" },
      { val: "REST API", label: "Plug-and-Play Integrations" }
    ],
    primaryLink: "/crm",
    primaryText: "Explore NetCRM Platform",
    secondaryLink: "/contact",
    secondaryText: "Request NetCRM Demo",
    accent: "orange"
  },
  {
    id: "acis",
    name: "ACIS Flagship Platform",
    badge: "AUTONOMOUS CYBER IMMUNITY",
    tagline: "Single Agent • Single Console • Autonomous Cyber Defense",
    description: "Combines AI-driven threat detection, automated response, UEBA, SIEM, SOAR, and enterprise resilience to neutralize threats at machine speed before they can disrupt operations.",
    highlights: [
      "Five biologically-inspired defense layers",
      "Sub-14ms machine-speed autonomous containment",
      "High-throughput AI-SIEM ingesting 100k+ EPS",
      "Self-healing snapshot rollback in under 5 minutes"
    ],
    stats: [
      { val: "< 14ms", label: "Autonomous Containment" },
      { val: "100k+", label: "Events / Sec SIEM" },
      { val: "< 5 Min", label: "Self-Healing Rollback" }
    ],
    primaryLink: "/acis",
    primaryText: "Explore ACIS Architecture",
    secondaryLink: "/contact",
    secondaryText: "Request Technical Whitepaper",
    accent: "cyan"
  }
];

export default function Products() {
  return (
    <div className="page-products">
      {/* Products Landing Hero */}
      <section className="products-hero-section cyber-grid-bg">
        <div className="container text-center">
          <span className="cyber-badge orange">
            <span className="badge-dot" />
            ENTERPRISE PRODUCT ECOSYSTEM
          </span>
          <h1 className="products-hero-title">
            Intelligent Cybersecurity & <br />
            <span className="text-gradient-cyan">Business Software Platforms</span>
          </h1>
          <p className="products-hero-sub">
            Discover the official Netcradus software ecosystem—from AI-powered website vulnerability auditing to unified XDR endpoint defense and enterprise workspace operations.
          </p>

          {/* Quick Nav Anchors Bar */}
          <div className="products-quick-bar">
            <a href="#netcrad" className="quick-pill">
              <Search size={14} className="text-orange" />
              <span>NetCRAD Scanner</span>
            </a>
            <a href="#netxdr" className="quick-pill">
              <Shield size={14} className="text-purple" />
              <span>Cyrix XDR</span>
            </a>
            <a href="#crm" className="quick-pill">
              <Users size={14} className="text-green" />
              <span>NetCRM</span>
            </a>
            <a href="#acis" className="quick-pill">
              <Cpu size={14} className="text-cyan" />
              <span>ACIS Platform</span>
            </a>
            <a href="#future" className="quick-pill">
              <Sparkles size={14} className="text-amber" />
              <span>Future Products</span>
            </a>
          </div>
        </div>
      </section>

      {/* Products Showcase Sections */}
      <section className="section-py products-showcase-container">
        <div className="container">
          
          {/* 1. NetCRAD Scanner Spotlight */}
          <div className="glass-panel product-ecosystem-card" id="netcrad">
            <div className="eco-content-col">
              <div className="eco-badge-row">
                <span className="cyber-badge orange">AI WEB SECURITY & AUDITING</span>
                <span className="eco-type-tag">CONTINUOUS SCANNER</span>
              </div>
              <h2 className="eco-product-title">NetCRAD Scanner</h2>
              <p className="eco-tagline text-gradient-cyan">Discover Security Risks Before Hackers Do</p>
              <p className="eco-description">
                Netcrad is an intelligent Website Security Audit platform that scans your website for security vulnerabilities, configuration weaknesses, performance issues, and compliance risks—helping you secure your digital presence before attackers can exploit it.
              </p>

              <div className="eco-highlights-list">
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>Automated full-stack OWASP Top 10 vulnerability scan (SQLi, XSS, SSRF)</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>SSL / TLS Cryptographic hygiene & HTTP security header verification</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>Actionable developer remediation guides & instant downloadable PDF reports</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>Continuous domain monitoring with instant configuration drift alerts</span>
                </div>
              </div>

              <div className="eco-stats-row">
                <div className="eco-stat-box">
                  <span className="eco-stat-num text-gradient-cyan">100%</span>
                  <span className="eco-stat-lbl">OWASP Top 10</span>
                </div>
                <div className="eco-stat-box">
                  <span className="eco-stat-num text-gradient-purple">&lt; 60s</span>
                  <span className="eco-stat-lbl">Scan Velocity</span>
                </div>
                <div className="eco-stat-box">
                  <span className="eco-stat-num" style={{ color: '#34D399' }}>Instant</span>
                  <span className="eco-stat-lbl">PDF Reports</span>
                </div>
              </div>

              <div className="eco-action-btns">
                <Button to="/netcrad" variant="primary" size="lg" icon={ArrowRight}>
                  Open NetCRAD Page & Free Audit
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Schedule Enterprise Scan
                </Button>
              </div>
            </div>

            <div className="eco-visual-col">
              <div className="glass-card netcrad-mini-preview">
                <div className="preview-top">
                  <span className="p-dot red" />
                  <span className="p-dot yellow" />
                  <span className="p-dot green" />
                  <span className="p-url">netcrad://audit.engine/target</span>
                </div>
                <div className="preview-body">
                  <div className="p-score-banner">
                    <div className="p-circle">A+</div>
                    <div>
                      <h4 className="p-domain">yourcompany.com</h4>
                      <p className="p-sub">Full Security Score: 98/100</p>
                    </div>
                  </div>
                  <div className="p-checks">
                    <div className="p-check-row pass">✓ SSL/TLS 1.3 Encryption Valid</div>
                    <div className="p-check-row pass">✓ OWASP Top 10 Shield Active</div>
                    <div className="p-check-row pass">✓ Zero Exposed Configuration Files</div>
                    <div className="p-check-row info">ℹ 5/6 Security Headers Verified</div>
                  </div>
                  <Link to="/netcrad" className="p-run-btn">
                    <span>Launch NetCRAD Live Audit</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Cyrix XDR Spotlight */}
          <div className="glass-panel product-ecosystem-card" id="netxdr">
            <div className="eco-content-col">
              <div className="eco-badge-row">
                <span className="cyber-badge purple">UNIFIED ENDPOINT & NETWORK</span>
                <span className="eco-type-tag">XDR DEFENSE</span>
              </div>
              <h2 className="eco-product-title">Cyrix XDR / NetXDR</h2>
              <p className="eco-tagline text-gradient-purple">AI-Powered Unified Endpoint, Cloud & Network Protection</p>
              <p className="eco-description">
                Protect endpoints, servers, and multi-cloud workloads in real time. NetCradus Cyrix XDR unifies EDR, behavioral Next-Gen Antivirus (NGAV), network telemetry, and proactive threat hunting into one synchronized console.
              </p>

              <div className="eco-highlights-list">
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-purple" />
                  <span>Behavioral NGAV & instant ransomware rollback via shadow copy snapshots</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-purple" />
                  <span>Continuous proactive threat hunting with live adversary tradecraft feeds</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-purple" />
                  <span>Lightweight universal eBPF kernel agent with &lt;1% CPU utilization</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-purple" />
                  <span>Automated MITRE ATT&CK technique mapping across all attack stages</span>
                </div>
              </div>

              <div className="eco-stats-row">
                <div className="eco-stat-box">
                  <span className="eco-stat-num text-gradient-cyan">&lt; 14ms</span>
                  <span className="eco-stat-lbl">Containment</span>
                </div>
                <div className="eco-stat-box">
                  <span className="eco-stat-num text-gradient-purple">&lt; 1%</span>
                  <span className="eco-stat-lbl">Agent CPU Impact</span>
                </div>
                <div className="eco-stat-box">
                  <span className="eco-stat-num" style={{ color: '#34D399' }}>200+</span>
                  <span className="eco-stat-lbl">MITRE TTPs</span>
                </div>
              </div>

              <div className="eco-action-btns">
                <Button to="/netxdr" variant="primary" size="lg" icon={ArrowRight}>
                  Explore Cyrix XDR Pillar
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Request XDR Deployment
                </Button>
              </div>
            </div>

            <div className="eco-visual-col">
              <CyberTerminal />
            </div>
          </div>

          {/* 3. NetCRM Spotlight */}
          <div className="glass-panel product-ecosystem-card" id="crm">
            <div className="eco-content-col">
              <div className="eco-badge-row">
                <span className="cyber-badge green">CUSTOMER WORKSPACE</span>
                <span className="eco-type-tag">ENTERPRISE OPERATIONS</span>
              </div>
              <h2 className="eco-product-title">NetCRM</h2>
              <p className="eco-tagline" style={{ color: '#34D399' }}>Secure Enterprise Relationship & Operations Platform</p>
              <p className="eco-description">
                Enterprise relationship and operations platform designed to streamline customer touchpoints, automate complex operational workflows, integrate disparate data nodes, and scale securely in hybrid cloud environments.
              </p>

              <div className="eco-highlights-list">
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} style={{ color: '#34D399' }} />
                  <span>Granular role-based encryption & complete access audit logging</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} style={{ color: '#34D399' }} />
                  <span>Automated client workflow engine with custom SLA escalations</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} style={{ color: '#34D399' }} />
                  <span>99.99% enterprise SLA uptime with bi-directional REST APIs</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} style={{ color: '#34D399' }} />
                  <span>Integrated client cybersecurity reporting & risk telemetry dashboard</span>
                </div>
              </div>

              <div className="eco-stats-row">
                <div className="eco-stat-box">
                  <span className="eco-stat-num" style={{ color: '#34D399' }}>99.99%</span>
                  <span className="eco-stat-lbl">Enterprise Uptime</span>
                </div>
                <div className="eco-stat-box">
                  <span className="eco-stat-num text-gradient-cyan">AES-256</span>
                  <span className="eco-stat-lbl">Encryption</span>
                </div>
                <div className="eco-stat-box">
                  <span className="eco-stat-num text-gradient-purple">REST</span>
                  <span className="eco-stat-lbl">API Ready</span>
                </div>
              </div>

              <div className="eco-action-btns">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                  Request Enterprise NetCRM Demo
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Talk to a Product Specialist
                </Button>
              </div>
            </div>

            <div className="eco-visual-col">
              <div className="glass-card crm-visual-card">
                <div className="crm-header">
                  <div className="crm-logo-badge">
                    <Users size={18} style={{ color: '#34D399' }} />
                    <span>NetCRM Workspace</span>
                  </div>
                  <span className="crm-status-live">OPERATIONAL</span>
                </div>

                <div className="crm-metrics-grid">
                  <div className="crm-m-box">
                    <span className="crm-m-val">99.99%</span>
                    <span className="crm-m-lbl">SLA Reliability</span>
                  </div>
                  <div className="crm-m-box">
                    <span className="crm-m-val">&lt; 250ms</span>
                    <span className="crm-m-lbl">API Latency</span>
                  </div>
                </div>

                <div className="crm-features-list">
                  <div className="crm-feat-row">
                    <Check size={14} className="text-green" />
                    <span>Client Lifecycle Automation</span>
                  </div>
                  <div className="crm-feat-row">
                    <Check size={14} className="text-green" />
                    <span>Encrypted Lead & Account Vaults</span>
                  </div>
                  <div className="crm-feat-row">
                    <Check size={14} className="text-green" />
                    <span>Cross-Platform Webhook Connectors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. ACIS Cyber Immune Platform Spotlight */}
          <div className="glass-panel product-ecosystem-card" id="acis">
            <div className="eco-content-col">
              <div className="eco-badge-row">
                <span className="cyber-badge purple">FLAGSHIP PLATFORM</span>
                <span className="eco-type-tag">CYBER IMMUNE SYSTEM</span>
              </div>
              <h2 className="eco-product-title">ACIS Platform</h2>
              <p className="eco-tagline text-gradient-cyan">Single Agent • Single Console • Autonomous Cyber Defense</p>
              <p className="eco-description">
                Autonomous Cyber Immune System engineered to continuously sense, learn, correlate, neutralize threats at machine speed, and self-heal across endpoints, networks, and hybrid cloud infrastructure.
              </p>

              <div className="eco-highlights-list">
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>5 biologically-inspired defense layers operating synchronously</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Sub-14ms machine-speed host isolation and credential revocation</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>High-throughput AI-SIEM ingesting 100k+ EPS with UEBA behavioral tracking</span>
                </div>
                <div className="eco-highlight-item">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Autonomous snapshot rollback & closed-loop threat learning</span>
                </div>
              </div>

              <div className="eco-stats-row">
                <div className="eco-stat-box">
                  <span className="eco-stat-num text-gradient-cyan">&lt; 14ms</span>
                  <span className="eco-stat-lbl">Containment SLA</span>
                </div>
                <div className="eco-stat-box">
                  <span className="eco-stat-num text-gradient-purple">100k+</span>
                  <span className="eco-stat-lbl">Events / Sec</span>
                </div>
                <div className="eco-stat-box">
                  <span className="eco-stat-num" style={{ color: '#34D399' }}>5 Layers</span>
                  <span className="eco-stat-lbl">Immune Defense</span>
                </div>
              </div>

              <div className="eco-action-btns">
                <Button to="/acis" variant="primary" size="lg" icon={ArrowRight}>
                  Explore Full ACIS Deep Dive
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Request Technical Whitepaper
                </Button>
              </div>
            </div>

            <div className="eco-visual-col">
              <ThreatRadar />
            </div>
          </div>

          {/* 5. Future Products Section */}
          <div className="glass-panel future-products-banner" id="future">
            <div className="future-text-col">
              <span className="cyber-badge amber">INNOVATION ROADMAP</span>
              <h3 className="future-title">Future Products & Emerging Engines</h3>
              <p className="future-desc">
                Netcradus is pioneering next-generation autonomous AI security engines, continuous red-team swarm simulators, and automated cryptographic posture tools. Stay tuned for upcoming product launches.
              </p>
              <div className="future-tags-row">
                <span className="f-tag">⚡ Automated Red Team Swarms</span>
                <span className="f-tag">🛡 LLM Threat Guardrails</span>
                <span className="f-tag">🔮 Quantum-Safe Key Rotator</span>
              </div>
            </div>
            <div className="future-cta-col">
              <Button to="/contact" variant="outline" size="lg" icon={ArrowRight}>
                Join Product Early Access
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Product Ecosystem Matrix */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="ECOSYSTEM MATRIX"
            title="Comprehensive Product Matrix &"
            highlightText="Deployment Models"
            subtitle="Understand how each Netcradus product fits your enterprise security and operational requirements."
          />

          <div className="grid-4 product-matrix-grid">
            {productsList.map((p) => (
              <div key={p.id} className="glass-card matrix-card">
                <div className="matrix-top">
                  <span className={`matrix-badge ${p.accent}`}>{p.badge}</span>
                  <h4 className="matrix-name">{p.name}</h4>
                  <p className="matrix-tagline">{p.tagline}</p>
                </div>

                <div className="matrix-stats">
                  {p.stats.map((s, idx) => (
                    <div key={idx} className="matrix-s-row">
                      <span className="m-s-lbl">{s.label}:</span>
                      <strong className="m-s-val">{s.val}</strong>
                    </div>
                  ))}
                </div>

                <div className="matrix-bottom">
                  <Link to={p.primaryLink} className="matrix-link">
                    <span>{p.primaryText}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Accelerate Your Digital Security with"
        highlightText="Netcradus Enterprise Products"
        subtitle="Schedule a technical consultation or live platform walkthrough with our principal security specialists."
      />
    </div>
  );
}
