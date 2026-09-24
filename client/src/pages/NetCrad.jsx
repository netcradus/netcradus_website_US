import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Activity, 
  Layers, 
  Lock, 
  Radio, 
  Crosshair, 
  Check, 
  ArrowRight,
  FileCode,
  FileText,
  AlertTriangle,
  Server,
  Zap,
  CheckCircle2,
  Filter,
  BarChart3,
  Download,
  Terminal,
  ShieldCheck,
  Code,
  Users
} from 'lucide-react';
import newScanImg from '../assets/images/netcrad-new-scan.png';
import scanProgressImg from '../assets/images/netcrad-scan-progress.png';
import resultsImg from '../assets/images/netcrad-results.png';
import scanHistoryImg from '../assets/images/netcrad-scan-history.png';
import ctaHorizonImg from '../assets/images/about-cta-horizon.jpg';
import './NetCrad.css';

export default function NetCrad() {
  useEffect(() => {
    document.title = "NETCRAD | Vulnerability Assessment & Security Scanner";
  }, []);

  return (
    <div className="netcrad-product-page">
      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="nc-hero-section">
        <div className="nc-ambient-glow nc-glow-hero" />
        <div className="nc-grid-matrix" />

        <div className="nc-container nc-hero-grid">
          {/* Left Column: Heading & Value Props */}
          <div className="nc-hero-text-col">
            <div className="nc-eyebrow">
              <span className="nc-eyebrow-dot" />
              VULNERABILITY ASSESSMENT PLATFORM
            </div>

            <h1 className="nc-hero-heading">
              Find Vulnerabilities <br className="nc-hero-br-desktop" />
              Before <span className="nc-text-orange-glow">Attackers Do.</span>
            </h1>

            <p className="nc-hero-subtext">
              NETCRAD helps organizations discover security weaknesses across websites and digital assets, turning technical findings into clear, actionable security insights.
            </p>

            <div className="nc-hero-cta-group">
              <Link to="/contact" className="nc-btn-primary">
                START A SECURITY SCAN
                <ArrowRight size={17} className="nc-btn-icon" />
              </Link>
              <a href="#how-it-works" className="nc-btn-ghost">
                SEE HOW IT WORKS
              </a>
            </div>

            {/* 3 Compact Value Indicators */}
            <div className="nc-hero-indicators">
              <div className="nc-indicator-item">
                <Shield size={16} className="nc-ind-icon" />
                <div className="nc-ind-text">
                  <strong>Identify Security Risks</strong>
                  <span>Across your attack surface</span>
                </div>
              </div>
              <div className="nc-indicator-item">
                <Crosshair size={16} className="nc-ind-icon" />
                <div className="nc-ind-text">
                  <strong>Prioritize What Matters</strong>
                  <span>With CVSS scoring</span>
                </div>
              </div>
              <div className="nc-indicator-item">
                <Activity size={16} className="nc-ind-icon" />
                <div className="nc-ind-text">
                  <strong>Strengthen Your Defenses</strong>
                  <span>Before it's too late</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real NETCRAD "New Scan" Dashboard Screenshot */}
          <div className="nc-hero-visual-col" aria-label="NETCRAD Vulnerability Scanner Dashboard">
            <div className="nc-dashboard-frame nc-hero-dashboard">
              <div className="nc-frame-glow-aura" />
              <div className="nc-browser-bar">
                <div className="nc-browser-dots">
                  <span className="nc-dot-red" />
                  <span className="nc-dot-yellow" />
                  <span className="nc-dot-green" />
                </div>
                <div className="nc-browser-url">audit.netcradus.in/new-scan</div>
              </div>
              <img 
                src={newScanImg} 
                alt="NETCRAD Vulnerability Assessment New Scan Dashboard" 
                className="nc-dashboard-media"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECURITY CAPABILITY STRIP
          ========================================================================= */}
      <section className="nc-capability-strip-section">
        <div className="nc-container">
          <div className="nc-capability-strip">
            <div className="nc-strip-item">
              <div className="nc-strip-icon-wrap">
                <Radio size={18} />
              </div>
              <div className="nc-strip-text">
                <strong>PORTS</strong>
                <span>Open services detection</span>
              </div>
            </div>

            <div className="nc-strip-item">
              <div className="nc-strip-icon-wrap">
                <FileCode size={18} />
              </div>
              <div className="nc-strip-text">
                <strong>HEADERS</strong>
                <span>Security header analysis</span>
              </div>
            </div>

            <div className="nc-strip-item">
              <div className="nc-strip-icon-wrap">
                <Lock size={18} />
              </div>
              <div className="nc-strip-text">
                <strong>SSL / TLS</strong>
                <span>Certificate &amp; protocol checks</span>
              </div>
            </div>

            <div className="nc-strip-item">
              <div className="nc-strip-icon-wrap">
                <AlertTriangle size={18} />
              </div>
              <div className="nc-strip-text">
                <strong>OWASP TOP 10</strong>
                <span>Web application risks</span>
              </div>
            </div>

            <div className="nc-strip-item">
              <div className="nc-strip-icon-wrap">
                <Crosshair size={18} />
              </div>
              <div className="nc-strip-text">
                <strong>CVSS SCORING</strong>
                <span>Industry standard risk rating</span>
              </div>
            </div>

            <div className="nc-strip-item">
              <div className="nc-strip-icon-wrap">
                <FileText size={18} />
              </div>
              <div className="nc-strip-text">
                <strong>DETAILED REPORTS</strong>
                <span>Actionable security results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HOW NETCRAD WORKS (5-STEP CONNECTED WORKFLOW)
          ========================================================================= */}
      <section className="nc-works-section" id="how-it-works">
        <div className="nc-ambient-glow nc-glow-works" />
        <div className="nc-container">
          <div className="nc-section-header text-center">
            <h2 className="nc-section-title">
              How <span className="nc-text-orange">NETCRAD</span> Works
            </h2>
            <p className="nc-section-sub" style={{ margin: '0 auto' }}>
              From scan to actionable insights — in minutes.
            </p>
          </div>

          <div className="nc-workflow-flow">
            {/* Step 1 */}
            <div className="nc-flow-card">
              <div className="nc-step-node-badge">
                <div className="nc-step-icon-circle">
                  <Terminal size={18} />
                </div>
                <span className="nc-step-number">1</span>
              </div>
              <div className="nc-flow-details">
                <h3 className="nc-flow-step-title">Enter Target</h3>
                <p className="nc-flow-step-desc">Provide the website or authorized target.</p>
              </div>
            </div>

            <div className="nc-flow-connector-line" />

            {/* Step 2 */}
            <div className="nc-flow-card">
              <div className="nc-step-node-badge">
                <div className="nc-step-icon-circle">
                  <Zap size={18} />
                </div>
                <span className="nc-step-number">2</span>
              </div>
              <div className="nc-flow-details">
                <h3 className="nc-flow-step-title">Scan</h3>
                <p className="nc-flow-step-desc">NETCRAD checks ports, headers, SSL, OWASP and more.</p>
              </div>
            </div>

            <div className="nc-flow-connector-line" />

            {/* Step 3 */}
            <div className="nc-flow-card">
              <div className="nc-step-node-badge">
                <div className="nc-step-icon-circle">
                  <BarChart3 size={18} />
                </div>
                <span className="nc-step-number">3</span>
              </div>
              <div className="nc-flow-details">
                <h3 className="nc-flow-step-title">Analyze</h3>
                <p className="nc-flow-step-desc">Findings are categorized and risk scored (CVSS).</p>
              </div>
            </div>

            <div className="nc-flow-connector-line" />

            {/* Step 4 */}
            <div className="nc-flow-card">
              <div className="nc-step-node-badge">
                <div className="nc-step-icon-circle">
                  <ShieldCheck size={18} />
                </div>
                <span className="nc-step-number">4</span>
              </div>
              <div className="nc-flow-details">
                <h3 className="nc-flow-step-title">Get Results</h3>
                <p className="nc-flow-step-desc">Review vulnerabilities and supporting details.</p>
              </div>
            </div>

            <div className="nc-flow-connector-line" />

            {/* Step 5 */}
            <div className="nc-flow-card">
              <div className="nc-step-node-badge">
                <div className="nc-step-icon-circle">
                  <CheckCircle2 size={18} />
                </div>
                <span className="nc-step-number">5</span>
              </div>
              <div className="nc-flow-details">
                <h3 className="nc-flow-step-title">Take Action</h3>
                <p className="nc-flow-step-desc">Use findings to guide remediation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: LIVE SCAN INTELLIGENCE
          ========================================================================= */}
      <section className="nc-live-scan-section">
        <div className="nc-ambient-glow nc-glow-live" />
        <div className="nc-container nc-split-grid">
          {/* Left Narrative */}
          <div className="nc-split-left-col">
            <div className="nc-eyebrow">
              <span className="nc-eyebrow-dot" />
              REAL-TIME SECURITY ANALYSIS
            </div>

            <h2 className="nc-section-title">
              Live Scan <span className="nc-text-orange">Intelligence</span>
            </h2>

            <p className="nc-split-desc">
              Watch NETCRAD analyze your target in real-time. Our multi-layered scanning engine checks for open ports, security headers, SSL/TLS issues, OWASP vulnerabilities and more.
            </p>

            <ul className="nc-feature-checklist">
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Port scanning (Nmap 1-1024)</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Security header analysis (CSP, HSTS, X-Frame)</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>SSL / TLS certificate &amp; cipher audit</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>OWASP security checks &amp; passive alerts</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Real-time CVSS risk scoring</span>
              </li>
            </ul>
          </div>

          {/* Right: Real "Scan in Progress" Screenshot */}
          <div className="nc-split-right-col">
            <div className="nc-dashboard-frame">
              <div className="nc-frame-glow-aura" />
              <div className="nc-browser-bar">
                <div className="nc-browser-dots">
                  <span className="nc-dot-red" />
                  <span className="nc-dot-yellow" />
                  <span className="nc-dot-green" />
                </div>
                <div className="nc-browser-url">audit.netcradus.in/scan-in-progress</div>
              </div>
              <img 
                src={scanProgressImg} 
                alt="NETCRAD Live Security Scan In Progress" 
                className="nc-dashboard-media"
                loading="lazy"
              />

              {/* Actionable Badge Overlay */}
              <div className="nc-accent-badge-box">
                <Zap size={18} className="nc-accent-badge-icon" />
                <div className="nc-accent-badge-text">
                  FAST. <br />
                  ACCURATE. <br />
                  ACTIONABLE.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: RESULTS (TURN FINDINGS INTO DECISIONS)
          ========================================================================= */}
      <section className="nc-results-section">
        <div className="nc-ambient-glow nc-glow-results" />
        <div className="nc-container nc-split-grid">
          {/* Left: Results Capabilities (Compact Cardless Layout) */}
          <div className="nc-split-left-col">
            <div className="nc-eyebrow">
              <span className="nc-eyebrow-dot" />
              CLEAR INSIGHTS. HIGHER SECURITY
            </div>

            <h2 className="nc-section-title">
              Turn Findings Into <span className="nc-text-orange">Decisions</span>
            </h2>

            <p className="nc-split-desc">
              NETCRAD organizes security findings so teams can understand severity and prioritize remediation.
            </p>

            <div className="nc-results-cardless-list">
              <div className="nc-res-row">
                <div className="nc-res-icon-wrap">
                  <ShieldCheck size={18} />
                </div>
                <div className="nc-res-text">
                  <strong>Site security grade</strong>
                  <span>Holistic executive rating (A–F)</span>
                </div>
              </div>

              <div className="nc-res-row">
                <div className="nc-res-icon-wrap">
                  <BarChart3 size={18} />
                </div>
                <div className="nc-res-text">
                  <strong>CVSS average score</strong>
                  <span>Standardized vulnerability rating</span>
                </div>
              </div>

              <div className="nc-res-row">
                <div className="nc-res-icon-wrap">
                  <Layers size={18} />
                </div>
                <div className="nc-res-text">
                  <strong>Detailed vulnerability findings</strong>
                  <span>Contextual evidence &amp; mapped CWEs</span>
                </div>
              </div>

              <div className="nc-res-row">
                <div className="nc-res-icon-wrap">
                  <Filter size={18} />
                </div>
                <div className="nc-res-text">
                  <strong>Severity filtering</strong>
                  <span>Filter by Critical, High, Medium, Low</span>
                </div>
              </div>

              <div className="nc-res-row">
                <div className="nc-res-icon-wrap">
                  <Download size={18} />
                </div>
                <div className="nc-res-text">
                  <strong>Downloadable security report</strong>
                  <span>Actionable audit-ready documentation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Real "Results" Screenshot */}
          <div className="nc-split-right-col">
            <div className="nc-dashboard-frame">
              <div className="nc-frame-glow-aura" />
              <div className="nc-browser-bar">
                <div className="nc-browser-dots">
                  <span className="nc-dot-red" />
                  <span className="nc-dot-yellow" />
                  <span className="nc-dot-green" />
                </div>
                <div className="nc-browser-url">audit.netcradus.in/results</div>
              </div>
              <img 
                src={resultsImg} 
                alt="NETCRAD Vulnerability Assessment Results Dashboard" 
                className="nc-dashboard-media"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SECURITY PRIORITIZATION
          ========================================================================= */}
      <section className="nc-prioritization-section">
        <div className="nc-container">
          <div className="nc-section-header text-center">
            <div className="nc-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="nc-eyebrow-dot" />
              RISK-BASED REMEDIATION
            </div>
            <h2 className="nc-section-title">
              Know What Matters <span className="nc-text-orange">First</span>
            </h2>
            <p className="nc-section-sub" style={{ margin: '0 auto' }}>
              NETCRAD organizes detected findings by severity and risk information so security teams can focus on higher-priority issues first.
            </p>
          </div>

          {/* Severity Risk Spectrum Display */}
          <div className="nc-severity-spectrum">
            <div className="nc-spectrum-card nc-sev-critical">
              <div className="nc-sev-badge">CRITICAL</div>
              <div className="nc-sev-cvss">CVSS 9.0 – 10.0</div>
              <p className="nc-sev-desc">Immediate exploitable exposures requiring urgent same-day mitigation.</p>
            </div>

            <div className="nc-spectrum-card nc-sev-high">
              <div className="nc-sev-badge">HIGH</div>
              <div className="nc-sev-cvss">CVSS 7.0 – 8.9</div>
              <p className="nc-sev-desc">Significant security weaknesses that could enable direct privilege escalation or data loss.</p>
            </div>

            <div className="nc-spectrum-card nc-sev-medium">
              <div className="nc-sev-badge">MEDIUM</div>
              <div className="nc-sev-cvss">CVSS 4.0 – 6.9</div>
              <p className="nc-sev-desc">Configuration flaws and missing defense-in-depth headers requiring planned remediation.</p>
            </div>

            <div className="nc-spectrum-card nc-sev-low">
              <div className="nc-sev-badge">LOW / INFO</div>
              <div className="nc-sev-cvss">CVSS 0.1 – 3.9</div>
              <p className="nc-sev-desc">Informational findings and best practice hardening recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SCAN HISTORY (TRACK YOUR ASSESSMENTS)
          ========================================================================= */}
      <section className="nc-history-section">
        <div className="nc-ambient-glow nc-glow-history" />
        <div className="nc-container nc-split-grid">
          {/* Left Narrative */}
          <div className="nc-split-left-col">
            <div className="nc-eyebrow">
              <span className="nc-eyebrow-dot" />
              SECURITY VISIBILITY OVER TIME
            </div>

            <h2 className="nc-section-title">
              Track Your <span className="nc-text-orange">Assessments</span>
            </h2>

            <p className="nc-split-desc">
              NETCRAD maintains scan history so teams can review previous assessments and compare security results over time.
            </p>

            <ul className="nc-feature-checklist">
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Review previous scans</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Compare security grades</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Review finding counts</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Check assessment dates</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Re-run security assessments</span>
              </li>
            </ul>
          </div>

          {/* Right: Real "Scan History" Screenshot */}
          <div className="nc-split-right-col">
            <div className="nc-dashboard-frame">
              <div className="nc-frame-glow-aura" />
              <div className="nc-browser-bar">
                <div className="nc-browser-dots">
                  <span className="nc-dot-red" />
                  <span className="nc-dot-yellow" />
                  <span className="nc-dot-green" />
                </div>
                <div className="nc-browser-url">audit.netcradus.in/history</div>
              </div>
              <img 
                src={scanHistoryImg} 
                alt="NETCRAD Scan History and Assessment Tracking" 
                className="nc-dashboard-media"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PRODUCT WORKFLOW PIPELINE
          ========================================================================= */}
      <section className="nc-pipeline-section">
        <div className="nc-container">
          <div className="nc-section-header text-center">
            <div className="nc-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="nc-eyebrow-dot" />
              END-TO-END SECURITY LIFECYCLE
            </div>
            <h2 className="nc-section-title">
              Complete Assessment <span className="nc-text-orange">Pipeline</span>
            </h2>
            <p className="nc-section-sub" style={{ margin: '0 auto' }}>
              From security assessment to remediation and re-assessment.
            </p>
          </div>

          <div className="nc-pipeline-wrapper">
            <div className="nc-pipeline-node">
              <span className="nc-pipe-label">TARGET</span>
            </div>
            <div className="nc-pipe-arrow">→</div>
            
            <div className="nc-pipeline-node">
              <span className="nc-pipe-label">SCAN</span>
            </div>
            <div className="nc-pipe-arrow">→</div>

            <div className="nc-pipeline-node">
              <span className="nc-pipe-label">DETECT</span>
            </div>
            <div className="nc-pipe-arrow">→</div>

            <div className="nc-pipeline-node">
              <span className="nc-pipe-label">ANALYZE</span>
            </div>
            <div className="nc-pipe-arrow">→</div>

            <div className="nc-pipeline-node">
              <span className="nc-pipe-label">PRIORITIZE</span>
            </div>
            <div className="nc-pipe-arrow">→</div>

            <div className="nc-pipeline-node">
              <span className="nc-pipe-label">REPORT</span>
            </div>
            <div className="nc-pipe-arrow">→</div>

            <div className="nc-pipeline-node">
              <span className="nc-pipe-label">REMEDIATE</span>
            </div>
            <div className="nc-pipe-arrow">→</div>

            <div className="nc-pipeline-node nc-pipe-final">
              <span className="nc-pipe-label">RE-SCAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: BUILT FOR SECURITY-FOCUSED TEAMS
          ========================================================================= */}
      <section className="nc-teams-section">
        <div className="nc-container">
          <div className="nc-section-header text-center">
            <div className="nc-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="nc-eyebrow-dot" />
              TRUSTED BY MODERN ORGANIZATIONS
            </div>
            <h2 className="nc-section-title">
              Built for Security-Focused <span className="nc-text-orange">Teams</span>
            </h2>
          </div>

          <div className="nc-teams-strip">
            <div className="nc-team-item">
              <div className="nc-team-icon-wrap">
                <Shield size={20} />
              </div>
              <div className="nc-team-text">
                <strong>Security Teams</strong>
                <span>Proactive risk management</span>
              </div>
            </div>

            <div className="nc-team-item">
              <div className="nc-team-icon-wrap">
                <Server size={20} />
              </div>
              <div className="nc-team-text">
                <strong>IT &amp; Infrastructure</strong>
                <span>Secure your digital assets</span>
              </div>
            </div>

            <div className="nc-team-item">
              <div className="nc-team-icon-wrap">
                <Code size={20} />
              </div>
              <div className="nc-team-text">
                <strong>DevSecOps</strong>
                <span>Integrate into your SDLC</span>
              </div>
            </div>

            <div className="nc-team-item">
              <div className="nc-team-icon-wrap">
                <Activity size={20} />
              </div>
              <div className="nc-team-text">
                <strong>SOC Teams</strong>
                <span>Enhance threat detection</span>
              </div>
            </div>

            <div className="nc-team-item">
              <div className="nc-team-icon-wrap">
                <Users size={20} />
              </div>
              <div className="nc-team-text">
                <strong>Compliance Teams</strong>
                <span>Meet regulatory requirements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FINAL CTA
          ========================================================================= */}
      <section className="nc-final-cta-section">
        <div className="nc-cta-backdrop-layer">
          <img 
            src={ctaHorizonImg} 
            alt="Cybersecurity sunrise horizon landscape" 
            className="nc-cta-horizon-img"
            loading="lazy"
          />
          <div className="nc-cta-horizon-mask" />
        </div>

        <div className="nc-container nc-final-cta-inner">
          <div className="nc-cta-headline-block">
            <div className="nc-cta-eyebrow-text">
              READY TO ASSESS YOUR SECURITY?
            </div>
            
            <h2 className="nc-cta-main-heading">
              See What Attackers Could Find <br />
              <span className="nc-text-orange-glow">Before They Do.</span>
            </h2>

            <p className="nc-cta-body-text">
              Use NETCRAD to assess your authorized digital assets and turn security findings into actionable insights.
            </p>

            <div className="nc-cta-btn-wrap">
              <Link to="/contact" className="nc-btn-primary nc-btn-cta-glow">
                START SECURITY ASSESSMENT
                <ArrowRight size={18} className="nc-btn-icon" />
              </Link>
              <Link to="/contact" className="nc-btn-ghost nc-btn-cta-ghost">
                REQUEST A DEMO
              </Link>
            </div>
          </div>

          {/* Integrated Tagline Crest on Right */}
          <div className="nc-cta-crest-block">
            <div className="nc-cta-crest-labels">
              <span>SECURITY</span>
              <span>FUELS</span>
              <strong>PROGRESS</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
