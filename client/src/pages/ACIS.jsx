import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ShieldCheck,
  Target,
  Cpu,
  Server,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Layers,
  Key,
  Eye,
  Workflow,
  Sparkles,
  FileText,
  Radio,
  UserCheck
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import DefenseLayersSlider from '../components/Interactive/DefenseLayersSlider';
import SiemTelemetryGrid from '../components/Interactive/SiemTelemetryGrid';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';
import {
  acisArchitectureStages,
  acisUseCases,
  acisThreatLandscapeMetrics
} from '../data/productsData';
import './Products.css';
import './ACIS.css';

export default function ACIS() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="page-products page-acis">
      {/* 1. Cinematic Photorealistic ACIS Hero */}
      <section className="acis-cinematic-hero" id="acis">
        {/* Cinematic Background Visual Layer */}
        <div className="acis-hero-bg-layer" aria-hidden="true" />
        <div className="acis-hero-gradient-left" aria-hidden="true" />
        
        {/* Subtle Background Typography */}
        <div className="acis-bg-quote" aria-hidden="true">
          DETECT<br />
          ANALYZE<br />
          DECIDE<br />
          PREVENT<br />
          CONTAIN<br />
          RECOVER
        </div>

        <div className="acis-hero-container">
          <div className="acis-hero-left-col">
            {/* 1. Top Cyber Pill Badge */}
            <div className="acis-hero-badge-pill">
              <Shield size={14} className="acis-badge-shield-icon" />
              <span className="acis-badge-title-text">
                ACIS <span>|</span> AUTONOMOUS CYBER IMMUNE SYSTEM
              </span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="acis-hero-main-title">
              Autonomous Threat Detection & <br />
              <span className="text-gradient-orange">Governed Cyber Immunity.</span>
            </h1>

            {/* 3. Subtitle / Body text */}
            <p className="acis-hero-lead-text">
              ACIS continuously monitors your logs, cloud accounts, endpoints, and websites for signs of an attack — correlating real-time events into high-fidelity alerts and executing automated response playbooks with mandatory human approval on critical actions.
            </p>

            {/* 4. Four Core Feature Pillars (Aligned to ACIS Core Capabilities) */}
            <div className="acis-pillars-row">
              {/* 1. Detect */}
              <div className="acis-pillar-card">
                <div className="pillar-icon-box orange">
                  <Radio size={18} />
                </div>
                <h4 className="pillar-title">Detect</h4>
                <p className="pillar-desc">Multi-source logs, cloud & agent telemetry</p>
              </div>

              {/* 2. Correlate */}
              <div className="acis-pillar-card">
                <div className="pillar-icon-box cyan">
                  <Cpu size={18} />
                </div>
                <h4 className="pillar-title">Correlate</h4>
                <p className="pillar-desc">Real-time SPL rules & 1–100 risk scoring</p>
              </div>

              {/* 3. Contain */}
              <div className="acis-pillar-card">
                <div className="pillar-icon-box green">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="pillar-title">Contain</h4>
                <p className="pillar-desc">Approval-gated SOAR response playbooks</p>
              </div>

              {/* 4. Self-Heal */}
              <div className="acis-pillar-card">
                <div className="pillar-icon-box purple">
                  <Sparkles size={18} />
                </div>
                <h4 className="pillar-title">Self-Heal</h4>
                <p className="pillar-desc">Endpoint rollback & AI model retraining</p>
              </div>
            </div>

            {/* 5. CTA Button Group */}
            <div className="acis-hero-cta-group">
              <Link to="/contact" className="btn-acis-primary">
                <span>Explore ACIS Platform</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-acis-secondary">
                <FileText size={16} />
                <span>Request Technical Walkthrough</span>
              </Link>
            </div>

            {/* 6. Bottom Trust & Metadata Ticker */}
            <div className="acis-hero-trust-bar">
              <div className="acis-hero-bottom-ticker">
                ELASTICSEARCH SIEM <span>•</span> SOAR PLAYBOOKS <span>•</span> RED TEAM EMULATION <span>•</span> TAMPER-EVIDENT AUDIT
              </div>
              <div className="trust-mini-chips">
                <span className="trust-chip"><Key size={12} /> Keycloak OAuth2</span>
                <span className="trust-chip"><Target size={12} /> MITRE ATT&CK</span>
                <span className="trust-chip"><FileCheck size={12} /> ClamAV & OSV.dev</span>
                <span className="trust-chip"><Shield size={12} /> VirusTotal Intel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why ACIS — The Cyber Immune Paradigm Shift */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="SECURITY OPERATIONS PARADIGM"
            title="Why Governed Cyber Immunity"
            highlightText="Outperforms Disjointed Tools"
            subtitle="Traditional security operations are overwhelmed by alert noise and fragmented vendor silos. ACIS automates continuous ingestion, pattern correlation, and response drafting while keeping a human in the loop for destructive decisions."
          />

          <div className="grid-2 acis-why-grid">
            <div className="glass-card why-card legacy-card">
              <div className="why-card-badge red">FRAGMENTED SECURITY OPERATIONS</div>
              <h3 className="why-title">Disconnected, Noisy & High Friction</h3>
              <ul className="why-list">
                <li>
                  <span className="why-bullet red">✕</span>
                  <div>
                    <strong>Siloed Visibility:</strong> Separate tools for logs, cloud accounts, endpoints, and mobile apps creating dangerous blind spots.
                  </div>
                </li>
                <li>
                  <span className="why-bullet red">✕</span>
                  <div>
                    <strong>Severe Alert Fatigue:</strong> Floods of uncontextualized notifications with no dynamic risk scoring or IOC correlation.
                  </div>
                </li>
                <li>
                  <span className="why-bullet red">✕</span>
                  <div>
                    <strong>Slow Manual Investigation:</strong> Tedious manual search across disparate consoles without plain-language query translation.
                  </div>
                </li>
                <li>
                  <span className="why-bullet red">✕</span>
                  <div>
                    <strong>Ungoverned Remediation:</strong> Risky automatic actions that cause false-positive lockouts, or slow manual containment steps.
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card why-card acis-card featured-border">
              <div className="why-card-badge orange">ACIS UNIFIED CYBER IMMUNE SYSTEM</div>
              <h3 className="why-title">Correlated, Governed & Validated</h3>
              <ul className="why-list">
                <li>
                  <span className="why-bullet orange">✓</span>
                  <div>
                    <strong>Unified Multi-Source Ingestion:</strong> Centralizes telemetry across Syslog, Splunk HEC, JSON APIs, AWS, Azure, and endpoint agents.
                  </div>
                </li>
                <li>
                  <span className="why-bullet orange">✓</span>
                  <div>
                    <strong>Real-Time Correlation & Risk Scoring:</strong> Evaluates streaming SPL rules, 1–100 risk scores, and live VirusTotal / AbuseIPDB threat intel.
                  </div>
                </li>
                <li>
                  <span className="why-bullet orange">✓</span>
                  <div>
                    <strong>Human-in-the-Loop SOAR:</strong> 20+ automated action types with mandatory dual-authorization on all destructive containment steps.
                  </div>
                </li>
                <li>
                  <span className="why-bullet orange">✓</span>
                  <div>
                    <strong>Continuous Red Team Validation:</strong> Proves detection coverage by running authorized MITRE ATT&CK campaigns against your own systems.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Operational Telemetry Metrics */}
          <div className="acis-challenges-banner glass-panel mt-12">
            <div className="challenges-header text-center">
              <span className="cyber-badge green">OPERATIONAL TELEMETRY & METRICS</span>
              <h3 className="challenges-title">Measurable, Real-Time Security Operations</h3>
              <p className="challenges-sub">
                ACIS provides real-time visibility across pipeline readiness, rule correlation, response workflows, and compliance integrity.
              </p>
            </div>

            <div className="grid-4 challenges-grid">
              {acisThreatLandscapeMetrics.map((item, idx) => (
                <div key={idx} className="glass-card challenge-stat-card">
                  <span className="challenge-val" style={{ color: item.color }}>{item.val}</span>
                  <h4 className="challenge-metric-title">{item.title}</h4>
                  <p className="challenge-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 5 Core Modules of ACIS */}
      <section className="section-py acis-defense-layers-cyber-section cyber-grid-subtle" id="defense-layers">
        <div className="defense-cyber-ambient-left" />
        <div className="defense-cyber-ambient-right" />
        <div className="defense-cyber-orbit-ring" />
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <SectionHeader
            badge="PLATFORM MODULES"
            title="The 5 Core Modules of ACIS"
            highlightText="Unified Cyber Operations"
            subtitle="Explore the integrated modules powering ACIS: from real-time log exploration and stream correlation to governed SOAR playbooks, MITRE ATT&CK red teaming, and supply chain inspection."
          />

          <DefenseLayersSlider />
        </div>
      </section>

      {/* 4. ACIS End-to-End 6-Stage Security Lifecycle */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="END-TO-END LIFECYCLE"
            title="The 6-Stage Security Loop"
            highlightText="Detect to Recover"
            subtitle="ACIS operates as a continuous, closed-loop immune system: detecting raw signals, correlating patterns, triaging alerts, preventing exposure, containing threats, and documenting compliance."
          />

          <div className="acis-arch-tabs">
            {acisArchitectureStages.map((stage, idx) => (
              <button
                key={stage.step}
                type="button"
                className={`arch-tab-btn ${activeStage === idx ? 'active' : ''}`}
                onClick={() => setActiveStage(idx)}
              >
                <span className="tab-num">{stage.step}</span>
                <span className="tab-title">{stage.title}</span>
              </button>
            ))}
          </div>

          <div className="glass-panel acis-arch-stage-display">
            <div className="stage-display-header">
              <div>
                <span className="stage-badge">STAGE {acisArchitectureStages[activeStage].step}</span>
                <h3 className="stage-title">{acisArchitectureStages[activeStage].title}</h3>
                <h4 className="stage-subtitle text-gradient-cyan">{acisArchitectureStages[activeStage].subtitle}</h4>
              </div>
              <div className="stage-metrics-tag">
                <Sparkles size={16} className="text-orange" />
                <span>{acisArchitectureStages[activeStage].metrics}</span>
              </div>
            </div>

            <p className="stage-desc">{acisArchitectureStages[activeStage].description}</p>

            <div className="stage-highlights-grid">
              {acisArchitectureStages[activeStage].highlights.map((h, i) => (
                <div key={i} className="stage-highlight-pill">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIEM & Threat Analytics In-Depth */}
      <section className="section-py acis-siem-command-section" id="siem">
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="siem-section-header">
            <div className="siem-badge-wrap">
              <span className="siem-engine-badge">
                <span className="engine-badge-dot" />
                ACIS SIEM & LOG EXPLORER
              </span>
            </div>
            <h2 className="siem-engine-heading">
              Multi-Source Log Intelligence &amp;{' '}
              <span className="siem-orange-highlight">REAL-TIME CORRELATION</span>
            </h2>
            <p className="siem-engine-subtitle">
              Log Explorer and Correlation Engine provide Elasticsearch-backed search, pipe-delimited SPL syntax, live streaming, forensic queries, live VirusTotal enrichment, and plain-English AI Analyst query translation.
            </p>
          </div>

          <SiemTelemetryGrid />
        </div>
      </section>

      {/* 6. Zero Trust, Role Governance & Audit Integrity */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <div className="glass-panel zero-trust-banner">
            <div className="zero-trust-text">
              <span className="cyber-badge orange">ACCESS CONTROL & GOVERNANCE</span>
              <h3 className="zero-trust-title">Role-Based Access Control & Immutable Compliance</h3>
              <p className="zero-trust-desc">
                Security operations require strict governance and separation of duties. ACIS ships four discrete role tiers (Super Admin, SOC Analyst, Incident Responder, Read-Only Auditor), enforces a mandatory dual-approver gate on destructive SOAR containment actions, and maintains an immutable audit trail of every administrative decision.
              </p>
              <div className="zero-trust-pills">
                <div className="zt-pill"><UserCheck size={15} /> 4 Default Role Tiers</div>
                <div className="zt-pill"><Key size={15} /> Mandatory Dual-Approver Gate</div>
                <div className="zt-pill"><Eye size={15} /> Asset Identity Stitching</div>
                <div className="zt-pill"><FileCheck size={15} /> Tamper-Evident Audit Trail</div>
              </div>
            </div>
            <div className="zero-trust-cta">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Review Governance Controls
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Enterprise Use Cases */}
      <section className="section-py">
        <div className="container">
          <SectionHeader
            badge="DOCUMENTED USE CASES"
            title="Real-World Threat Defense &"
            highlightText="Mission-Critical Scenarios"
            subtitle="Discover how ACIS protects organizations across endpoints, cloud accounts, and software supply chains."
          />

          <div className="grid-2 usecases-grid">
            {acisUseCases.map((uc) => (
              <div key={uc.id} className="glass-card usecase-card">
                <span className="usecase-category">{uc.category}</span>
                <h4 className="usecase-title">{uc.title}</h4>
                <div className="usecase-block">
                  <span className="usecase-label challenge">CHALLENGE</span>
                  <p>{uc.challenge}</p>
                </div>
                <div className="usecase-block">
                  <span className="usecase-label solution">ACIS SOLUTION</span>
                  <p>{uc.solution}</p>
                </div>
                <div className="usecase-outcome">
                  <CheckCircle2 size={16} className="text-green" />
                  <span><strong>Outcome:</strong> {uc.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technical Deployment & Integration */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="INTEGRATION ARCHITECTURE"
            title="Five Integration Paths for"
            highlightText="Every Asset Type"
            subtitle="Connect servers, cloud accounts, custom applications, mobile binaries, and web surfaces using concrete, documented integration methods."
          />

          <div className="grid-3 deployment-specs-grid">
            <div className="glass-card spec-card">
              <div className="spec-icon-box"><Layers size={24} /></div>
              <h4>Endpoint Fleet Agents</h4>
              <p>One-line installation commands for Windows PowerShell, Linux Bash, macOS, and Kubernetes with configurable CPU and RAM caps and agent heartbeat monitoring.</p>
              <span className="spec-detail">Windows • Linux • macOS • K8s</span>
            </div>

            <div className="glass-card spec-card">
              <div className="spec-icon-box"><Server size={24} /></div>
              <h4>Push & Ingestion APIs</h4>
              <p>Stream your application events via Splunk HEC-compatible endpoints, dedicated Syslog/CEF UDP/TCP ports, or JSON ingestion endpoints with scoped API keys.</p>
              <span className="spec-detail">Splunk HEC • Syslog/CEF • JSON APIs</span>
            </div>

            <div className="glass-card spec-card">
              <div className="spec-icon-box"><Workflow size={24} /></div>
              <h4>Cloud & Security Connectors</h4>
              <p>Scheduled polling for AWS GuardDuty, Azure Sentinel, and Azure AD, with native SOAR integrations for Cloudflare, Palo Alto NGFW, SentinelOne, Slack, Teams, and Jira.</p>
              <span className="spec-detail">AWS • Azure • Palo Alto • SentinelOne</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ACIS Deployment Editions */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="DEPLOYMENT TIERS"
            title="Flexible ACIS Platform"
            highlightText="Deployment Editions"
            subtitle="Tailored packages engineered to scale from growing teams to complex enterprise multi-cloud environments."
          />

          <div className="grid-3 pricing-plans-grid">
            {/* ACIS Starter */}
            <div className="glass-card pricing-card">
              <div className="pricing-tag">STARTER</div>
              <h3 className="pricing-title">ACIS Starter</h3>
              <p className="pricing-desc">Core visibility and log exploration for teams establishing centralized security monitoring.</p>
              <ul className="pricing-feats-list">
                <li><CheckCircle2 size={15} className="price-check" /> Elasticsearch Log Explorer with SPL search</li>
                <li><CheckCircle2 size={15} className="price-check" /> Baseline correlation rule templates</li>
                <li><CheckCircle2 size={15} className="price-check" /> ClamAV file & mobile binary scanning</li>
                <li><CheckCircle2 size={15} className="price-check" /> Multi-channel console & email notifications</li>
              </ul>
              <Button to="/contact" variant="outline" size="md" className="w-full">
                Request Starter Scope
              </Button>
            </div>

            {/* ACIS Professional */}
            <div className="glass-card pricing-card featured">
              <div className="featured-price-badge">POPULAR</div>
              <div className="pricing-tag text-gradient-cyan">PROFESSIONAL</div>
              <h3 className="pricing-title">ACIS Professional</h3>
              <p className="pricing-desc">Advanced correlation, threat intelligence, and governed SOAR response workflows.</p>
              <ul className="pricing-feats-list">
                <li><CheckCircle2 size={15} className="price-check" /> Custom streaming & scheduled SPL rules</li>
                <li><CheckCircle2 size={15} className="price-check" /> Live VirusTotal & AbuseIPDB IOC enrichment</li>
                <li><CheckCircle2 size={15} className="price-check" /> SOAR playbooks with dual-approver gates</li>
                <li><CheckCircle2 size={15} className="price-check" /> AI Analyst plain-English query translation</li>
              </ul>
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Request Professional Scope
              </Button>
            </div>

            {/* ACIS Enterprise */}
            <div className="glass-card pricing-card">
              <div className="pricing-tag">ENTERPRISE</div>
              <h3 className="pricing-title">ACIS Enterprise</h3>
              <p className="pricing-desc">Full cyber immune architecture with Red Team attack emulation and multi-cloud integrations.</p>
              <ul className="pricing-feats-list">
                <li><CheckCircle2 size={15} className="price-check" /> Authorized Red Team MITRE attack emulation</li>
                <li><CheckCircle2 size={15} className="price-check" /> Full AWS GuardDuty & Azure Sentinel polling</li>
                <li><CheckCircle2 size={15} className="price-check" /> AI model supervised retraining with analyst feedback</li>
                <li><CheckCircle2 size={15} className="price-check" /> Scheduled executive & compliance reporting</li>
              </ul>
              <Button to="/contact" variant="outline" size="md" className="w-full">
                Contact for Enterprise Tier
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Experience Autonomous Cyber Immunity with"
        highlightText="Netcradus ACIS"
        subtitle="Request a live technical demonstration of the ACIS console, live correlation engine, and SOAR response workflows."
      />
    </div>
  );
}

