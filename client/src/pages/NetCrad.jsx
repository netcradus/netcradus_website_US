import React, { useState } from 'react';
import { 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  FileCode, 
  Activity, 
  ArrowRight, 
  Download,
  Globe,
  Zap
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';
import './NetCrad.css';

const auditCapabilities = [
  {
    icon: Search,
    title: "AI-Powered Website Intelligence",
    desc: "Advanced vulnerability scanning engine that identifies deep security flaws, logic bugs, and misconfigurations using intelligent behavioral analysis."
  },
  {
    icon: Zap,
    title: "One-Click Security Audit",
    desc: "Simply enter your website domain URL to initiate a comprehensive multi-vector security, SSL/TLS, and header assessment within minutes."
  },
  {
    icon: AlertTriangle,
    title: "Comprehensive Risk Scoring",
    desc: "Every detected vulnerability is contextualized and scored across standard severity tiers: Critical, High, Medium, Low, and Informational."
  },
  {
    icon: FileCode,
    title: "Actionable Dev Remediation Guides",
    desc: "Every issue includes business risk impact, root-cause explanation, code snippets, web server config templates, and best practice fixes."
  },
  {
    icon: Download,
    title: "Professional PDF & CSV Reports",
    desc: "Generate comprehensive audit evidence reports suitable for executive leadership, compliance auditors, developers, and DevOps teams."
  },
  {
    icon: Activity,
    title: "Continuous Automated Monitoring",
    desc: "Monitor critical web assets continuously and receive instantaneous alerts when new CVEs, expired certificates, or configuration drifts occur."
  }
];

const auditCategories = [
  {
    category: "OWASP TOP 10 WEB DEFENSE",
    title: "Full-Stack Web Application Vulnerability Scan",
    description: "Deep inspection detecting SQL Injection (SQLi), Cross-Site Scripting (XSS), Server-Side Request Forgery (SSRF), Cross-Origin Resource Sharing (CORS) misconfigurations, and Broken Access Control.",
    checks: [
      "SQL Injection & NoSQL database exploits",
      "Cross-Site Scripting (Stored, Reflected, DOM-based XSS)",
      "Authentication bypass & Broken Session Management",
      "Insecure Direct Object References (IDOR)",
      "Server-Side Request Forgery (SSRF) & Open Redirects"
    ],
    badge: "100% OWASP COVERAGE"
  },
  {
    category: "CRYPTOGRAPHIC HYGIENE",
    title: "SSL / TLS & HTTP Security Header Verification",
    description: "Evaluates transport layer security strength, certificate chains, weak cipher suites, and mandatory browser security header configurations to prevent MITM attacks.",
    checks: [
      "TLS 1.3 / 1.2 protocol compliance & deprecated cipher alerts",
      "HTTP Strict Transport Security (HSTS) validation",
      "Content Security Policy (CSP) & X-Frame-Options",
      "Referrer-Policy, Permissions-Policy & Cross-Origin policies",
      "Certificate expiration & revocation verification"
    ],
    badge: "A+ SSL HYGIENE"
  },
  {
    category: "SURFACE & CONFIGURATION AUDIT",
    title: "Server Misconfiguration & Information Leakage",
    description: "Identifies exposed administrative consoles, dangling subdomains, directory traversal vulnerabilities, sensitive environment files (.env, .git), and server version fingerprinting.",
    checks: [
      "Publicly accessible backup & configuration files (.git, .env, .sql)",
      "Exposed administrative portals & Swagger/OpenAPI endpoints",
      "Server banner grabbing & component vulnerability detection",
      "Dangling DNS CNAME records & subdomain takeover risks",
      "Insecure cookies (Missing Secure, HttpOnly, SameSite flags)"
    ],
    badge: "ZERO INFORMATION LEAK"
  }
];

const scanSteps = [
  {
    step: "01",
    title: "Enter Target Domain",
    desc: "Input your web application or corporate domain URL into NetCrad."
  },
  {
    step: "02",
    title: "Automated Reconnaissance",
    desc: "Engine crawls endpoints, maps attack surface, and discovers technologies."
  },
  {
    step: "03",
    title: "Deep Vulnerability Audit",
    desc: "AI scanners execute non-intrusive security checks across OWASP vectors."
  },
  {
    step: "04",
    title: "Actionable Fix Report",
    desc: "Receive instant executive summary and developer remediation guide."
  }
];

export default function NetCrad() {
  const [scanUrl, setScanUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleScanSubmit = (e) => {
    e.preventDefault();
    if (!scanUrl) return;

    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        url: scanUrl.startsWith('http') ? scanUrl : `https://${scanUrl}`,
        score: 94,
        grade: 'A',
        ssl: 'Valid TLS 1.3 (2048-bit RSA)',
        headers: '5/6 Recommended Configured',
        vulnerabilities: 0,
        warnings: 2,
        time: '1.4s'
      });
    }, 1800);
  };

  return (
    <div className="page-netcrad">
      {/* Hero Section */}
      <section className="netcrad-hero-section cyber-grid-bg">
        <div className="container">
          <div className="netcrad-hero-grid">
            <div className="netcrad-hero-text">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-bold tracking-wider uppercase text-orange-400">
                  Netcrad Website Audit Tool
                </span>
              </div>

              <h1 className="netcrad-hero-title">
                Discover Security Risks <br />
                <span className="text-gradient-cyan">Before Hackers Do</span>
              </h1>

              <p className="netcrad-hero-desc">
                Netcrad is an intelligent Website Security Audit platform that scans your website for security vulnerabilities, configuration weaknesses, performance issues, and compliance risks—helping you secure your digital presence before attackers can exploit it.
              </p>

              {/* Interactive Audit Input Form */}
              <form onSubmit={handleScanSubmit} className="netcrad-scan-form">
                <div className="scan-input-wrapper">
                  <Globe size={18} className="scan-globe-icon" />
                  <input
                    type="text"
                    placeholder="Enter website URL (e.g. yourcompany.com)"
                    value={scanUrl}
                    onChange={(e) => setScanUrl(e.target.value)}
                    className="scan-url-input"
                    required
                  />
                  <button 
                    type="submit" 
                    className="scan-submit-btn"
                    disabled={isScanning}
                  >
                    {isScanning ? (
                      <>
                        <span className="spinner-border" />
                        <span>Auditing...</span>
                      </>
                    ) : (
                      <>
                        <span>Audit Website</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Live Simulated Result Box */}
              {scanResult && (
                <div className="netcrad-result-card glass-card animate-fade-in mt-4">
                  <div className="result-header">
                    <div className="result-grade-circle">
                      <span className="grade-letter">{scanResult.grade}</span>
                      <span className="grade-score">{scanResult.score}/100</span>
                    </div>
                    <div className="result-target-info">
                      <h4 className="result-domain">{scanResult.url}</h4>
                      <p className="result-meta">Audit completed in {scanResult.time} • Ready for download</p>
                    </div>
                  </div>

                  <div className="result-badges-row">
                    <span className="res-badge green">✓ {scanResult.ssl}</span>
                    <span className="res-badge blue">✓ {scanResult.headers}</span>
                    <span className="res-badge orange">⚠ {scanResult.warnings} Low Risk Warnings</span>
                  </div>

                  <div className="result-cta-row">
                    <Button to="/contact" variant="primary" size="sm" icon={Download}>
                      Request Full Technical Audit PDF
                    </Button>
                  </div>
                </div>
              )}

              <div className="netcrad-quick-stats">
                <div className="q-stat">
                  <span className="q-val text-gradient-cyan">100%</span>
                  <span className="q-lbl">OWASP Top 10 Coverage</span>
                </div>
                <div className="q-stat">
                  <span className="q-val text-gradient-purple">&lt; 60s</span>
                  <span className="q-lbl">Scan Velocity</span>
                </div>
                <div className="q-stat">
                  <span className="q-val" style={{ color: '#34D399' }}>Instant</span>
                  <span className="q-lbl">Dev Remediation Reports</span>
                </div>
              </div>
            </div>

            {/* Visual Panel */}
            <div className="netcrad-hero-visual">
              <div className="glass-panel audit-preview-card">
                <div className="audit-card-top">
                  <div className="audit-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="audit-title-tag">NETCRAD://AUDIT-ENGINE-V2</span>
                  <span className="audit-live-status">LIVE AUDITING</span>
                </div>

                <div className="audit-card-body">
                  <div className="audit-item pass">
                    <CheckCircle2 size={16} className="text-green" />
                    <div className="audit-item-text">
                      <strong>SSL / TLS Cryptographic Hygiene</strong>
                      <span>TLS 1.3 enforced • RSA-2048 key • HSTS active</span>
                    </div>
                    <span className="audit-badge-pass">PASS</span>
                  </div>

                  <div className="audit-item pass">
                    <CheckCircle2 size={16} className="text-green" />
                    <div className="audit-item-text">
                      <strong>HTTP Security Headers</strong>
                      <span>CSP, X-Frame-Options, Permissions-Policy configured</span>
                    </div>
                    <span className="audit-badge-pass">PASS</span>
                  </div>

                  <div className="audit-item pass">
                    <CheckCircle2 size={16} className="text-green" />
                    <div className="audit-item-text">
                      <strong>OWASP SQLi & XSS Injection Sweep</strong>
                      <span>Zero reflected, stored, or DOM-based injection points</span>
                    </div>
                    <span className="audit-badge-pass">SECURE</span>
                  </div>

                  <div className="audit-item warn">
                    <AlertTriangle size={16} className="text-orange" />
                    <div className="audit-item-text">
                      <strong>Cookie Security Flags</strong>
                      <span>SameSite=Lax set, verify Strict on auth session cookies</span>
                    </div>
                    <span className="audit-badge-warn">WARN</span>
                  </div>

                  <div className="audit-item pass">
                    <CheckCircle2 size={16} className="text-green" />
                    <div className="audit-item-text">
                      <strong>Information Leakage & Config Probing</strong>
                      <span>No public .env, .git, or debug endpoints exposed</span>
                    </div>
                    <span className="audit-badge-pass">CLEAN</span>
                  </div>
                </div>

                <div className="audit-card-footer">
                  <span>Netcrad Automated Intelligence Engine</span>
                  <span className="font-mono text-orange">100% Comprehensive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Capabilities */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="POWERFUL CAPABILITIES"
            title="Comprehensive Website Security"
            highlightText="Intelligence & Auditing"
            subtitle="Discover, risk-score, remediate, and continuously track public-facing website exposures."
          />

          <div className="grid-3 netcrad-caps-grid">
            {auditCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="glass-card netcrad-cap-card">
                  <div className="cap-icon-box">
                    <Icon size={24} />
                  </div>
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Audit Categories */}
      <section className="section-py" id="categories">
        <div className="container">
          <SectionHeader
            badge="FULL-SPECTRUM SCANNING"
            title="What NetCrad Inspects on"
            highlightText="Your Digital Perimeter"
            subtitle="Deep non-intrusive security checks across application code, protocols, and infrastructure."
          />

          <div className="netcrad-categories-stack">
            {auditCategories.map((cat, idx) => (
              <div key={idx} className="glass-card netcrad-cat-card">
                <div className="cat-card-header">
                  <span className="cat-badge">{cat.badge}</span>
                  <span className="cat-category-label">{cat.category}</span>
                </div>
                <h3 className="cat-title">{cat.title}</h3>
                <p className="cat-desc">{cat.description}</p>

                <div className="cat-checks-grid">
                  {cat.checks.map((check, cIdx) => (
                    <div key={cIdx} className="cat-check-item">
                      <CheckCircle2 size={16} className="text-orange" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How NetCrad Works */}
      <section className="section-py cyber-grid-subtle" id="how-it-works">
        <div className="container">
          <SectionHeader
            badge="4-STEP WORKFLOW"
            title="How NetCrad Auditing"
            highlightText="Works End-to-End"
            subtitle="From single URL input to comprehensive developer remediation guidance in minutes."
          />

          <div className="grid-4 netcrad-steps-grid">
            {scanSteps.map((step) => (
              <div key={step.step} className="glass-card netcrad-step-card">
                <span className="step-num-pill">{step.step}</span>
                <h4 className="step-card-title">{step.title}</h4>
                <p className="step-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Audit and Harden Your Website with"
        highlightText="NetCrad Intelligence"
        subtitle="Schedule a comprehensive vulnerability assessment with our application security engineers."
      />
    </div>
  );
}
