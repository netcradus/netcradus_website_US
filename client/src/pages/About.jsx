import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Activity, 
  Zap, 
  Layers, 
  Globe, 
  Lock, 
  FileCheck2, 
  Cloud, 
  Cpu, 
  Radio, 
  Crosshair, 
  Check, 
  ArrowRight,
  Eye,
  Rocket
} from 'lucide-react';
import cyberGlobeImg from '../assets/images/about-cyber-globe.jpg';
import summitJourneyImg from '../assets/images/about-summit-journey.jpg';
import worldTelemetryImg from '../assets/images/about-world-telemetry.jpg';
import socCommandImg from '../assets/images/about-soc-command.jpg';
import ctaHorizonImg from '../assets/images/about-cta-horizon.jpg';
import './About.css';

export default function About() {
  const [activeCap, setActiveCap] = useState(null);

  useEffect(() => {
    document.title = "Why Choose Netcradus | Autonomous Cyber Defense & Engineering";
  }, []);

  return (
    <div className="why-netcradus-page">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="nc-hero-section">
        <div className="nc-ambient-glow nc-glow-hero" />
        <div className="nc-grid-matrix" />

        <div className="nc-container nc-hero-grid">
          {/* Left Column: Headline & Action */}
          <div className="nc-hero-text-col">
            <div className="nc-eyebrow">
              <span className="nc-eyebrow-dot" />
              SECURE TODAY. AUTONOMOUS TOMORROW.
            </div>

            <h1 className="nc-hero-heading">
              Engineering the Future of <br className="nc-hero-br-desktop" />
              <span className="nc-text-orange-glow">Autonomous Cyber Defense</span>
            </h1>

            <p className="nc-hero-subtext">
              AI-driven cybersecurity solutions to predict, prevent, and neutralize threats — before they impact your business.
            </p>

            <div className="nc-hero-cta-group">
              <Link to="/contact" className="nc-btn-primary">
                TALK TO AN EXPERT
                <ArrowRight size={17} className="nc-btn-icon" />
              </Link>
              <Link to="/platform" className="nc-btn-ghost">
                EXPLORE OUR PLATFORM
              </Link>
            </div>

            {/* 3 Compact Value Indicators */}
            <div className="nc-hero-indicators">
              <div className="nc-indicator-item">
                <Shield size={16} className="nc-ind-icon" />
                <span>Predict Threats</span>
              </div>
              <div className="nc-indicator-item">
                <Crosshair size={16} className="nc-ind-icon" />
                <span>Prevent Breaches</span>
              </div>
              <div className="nc-indicator-item">
                <Activity size={16} className="nc-ind-icon" />
                <span>Ensure Business Continuity</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Cyber Defense Visual (Globe + Shield + Orbits) */}
          <div className="nc-hero-visual-col" aria-label="Autonomous Cyber-Defense Visualization">
            <div className="nc-hero-visual-wrapper">
              {/* Concentric Rotating Orbital Rings */}
              <div className="nc-orbit-ring nc-orbit-1" />
              <div className="nc-orbit-ring nc-orbit-2" />
              <div className="nc-orbit-ring nc-orbit-3" />

              {/* Rich 3D Photorealistic Cyber Globe */}
              <div className="nc-globe-sphere-wrapper">
                <img 
                  src={cyberGlobeImg} 
                  alt="Global Cyber Defense Telemetry Sphere" 
                  className="nc-globe-sphere-img"
                  loading="eager"
                />
                <div className="nc-globe-sphere-glow" />
              </div>

              {/* Central Glowing Netcradus Shield */}
              <div className="nc-hero-shield-hologram">
                <svg className="nc-shield-svg" viewBox="0 0 160 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="shieldFill" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="rgba(255, 122, 0, 0.45)" />
                      <stop offset="70%" stopColor="rgba(15, 10, 5, 0.9)" />
                      <stop offset="100%" stopColor="rgba(5, 5, 10, 0.95)" />
                    </radialGradient>
                    <filter id="shieldGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  {/* Outer Shield Frame */}
                  <path 
                    d="M 80 4 L 152 30 C 152 105, 105 160, 80 182 C 55 160, 8 105, 8 30 Z" 
                    fill="url(#shieldFill)" 
                    stroke="#FF7A00" 
                    strokeWidth="3" 
                    filter="url(#shieldGlow)"
                  />
                  {/* Inner Accent Line */}
                  <path 
                    d="M 80 16 L 140 38 C 140 98, 100 146, 80 166 C 60 146, 20 98, 20 38 Z" 
                    fill="none" 
                    stroke="rgba(255, 157, 46, 0.5)" 
                    strokeWidth="1.2" 
                  />
                  {/* Netcradus 'N' Emblem */}
                  <text 
                    x="80" 
                    y="116" 
                    textAnchor="middle" 
                    fill="#FFFFFF" 
                    fontFamily="Space Grotesk, sans-serif" 
                    fontSize="68" 
                    fontWeight="800"
                    letterSpacing="1"
                  >
                    N
                  </text>
                </svg>
              </div>

              {/* Floating Telemetry Nodes / Badges */}
              <div className="nc-telemetry-pill nc-pill-detect">
                <span className="nc-pill-dot" />
                <div className="nc-pill-text">
                  <strong>DETECT</strong>
                  <span>FASTER</span>
                </div>
              </div>

              <div className="nc-telemetry-pill nc-pill-respond">
                <span className="nc-pill-dot" />
                <div className="nc-pill-text">
                  <strong>RESPOND</strong>
                  <span>SMARTER</span>
                </div>
              </div>

              <div className="nc-telemetry-pill nc-pill-stay">
                <span className="nc-pill-dot" />
                <div className="nc-pill-text">
                  <strong>STAY</strong>
                  <span>AHEAD</span>
                </div>
              </div>

              <div className="nc-telemetry-watermark">
                A SAFER <br />
                DIGITAL <br />
                TOMORROW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MISSION & VISION (INTEGRATED STORYTELLING SUMMIT)
          ========================================================================= */}
      <section className="nc-mission-section" id="mission-vision">
        <div className="nc-ambient-glow nc-glow-mission" />
        <div className="nc-container nc-mission-grid">
          {/* Left: Vertical Storytelling Flow */}
          <div className="nc-mission-narrative-col">
            <div className="nc-eyebrow">
              <span className="nc-eyebrow-dot" />
              OUR PURPOSE
            </div>
            
            <h2 className="nc-section-title">
              Mission &amp; <span className="nc-text-orange">Vision</span>
            </h2>

            <p className="nc-section-lead">
              To build a safer, more resilient digital world through autonomous, intelligent cybersecurity.
            </p>

            {/* Continuous Vertical Timeline Flow */}
            <div className="nc-purpose-flow">
              <div className="nc-flow-line" />

              <div className="nc-flow-step">
                <div className="nc-flow-node">
                  <Rocket size={18} className="nc-flow-icon" />
                </div>
                <div className="nc-flow-content">
                  <h3 className="nc-flow-title">Our Mission</h3>
                  <p className="nc-flow-desc">
                    Empower organizations with AI-driven security that stops threats early and ensures trust at scale.
                  </p>
                </div>
              </div>

              <div className="nc-flow-step">
                <div className="nc-flow-node">
                  <Eye size={18} className="nc-flow-icon" />
                </div>
                <div className="nc-flow-content">
                  <h3 className="nc-flow-title">Our Vision</h3>
                  <p className="nc-flow-desc">
                    A future where every business can innovate fearlessly in a secure digital ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mountain Journey Summit Visual (Enlarged & Prominent Path) */}
          <div className="nc-mission-summit-col">
            <div className="nc-summit-display-frame">
              <img 
                src={summitJourneyImg} 
                alt="Cyber Journey Summit showing illuminated pathway to resilient businesses" 
                className="nc-summit-render-img"
                loading="lazy"
              />
              <div className="nc-summit-edge-fade" />

              {/* Waypoint Markers on the illuminated path */}
              <div className="nc-waypoint-tag nc-wp-start">
                <div className="nc-wp-dot" />
                <span className="nc-wp-label">A SAFER TOMORROW</span>
              </div>

              <div className="nc-waypoint-tag nc-wp-mid">
                <div className="nc-wp-dot" />
                <span className="nc-wp-label">TRUSTED ECOSYSTEMS</span>
              </div>

              <div className="nc-waypoint-tag nc-wp-peak">
                <div className="nc-wp-dot" />
                <span className="nc-wp-label">RESILIENT BUSINESSES</span>
              </div>

              {/* Summit Header Banner */}
              <div className="nc-summit-crest-text">
                <span>HIGHER SECURITY</span>
                <strong>BRIGHTER POSSIBILITIES</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ENTERPRISE METRICS (CLEAN OPEN NUMERICS & WORLD MAP)
          ========================================================================= */}
      <section className="nc-metrics-section">
        <div className="nc-ambient-glow nc-glow-metrics" />
        <div className="nc-container">
          <div className="nc-metrics-header-block">
            <div className="nc-eyebrow">
              <span className="nc-eyebrow-dot" />
              TRUSTED GLOBALLY
            </div>
            <h2 className="nc-section-title">
              Real Impact. Measurable <span className="nc-text-orange">Security.</span>
            </h2>
            <p className="nc-section-sub">
              Delivering enterprise-grade protection with real-world results.
            </p>
          </div>

          {/* Clean Integrated Stat Bar & Global Map */}
          <div className="nc-metrics-wrapper">
            {/* Open Statistics Display */}
            <div className="nc-stat-bar-layout">
              <div className="nc-metric-cell">
                <div className="nc-metric-top">
                  <Activity size={20} className="nc-metric-icon" />
                  <span className="nc-metric-val">24×7</span>
                </div>
                <div className="nc-metric-label">Security Operations &amp; Monitoring</div>
              </div>

              <div className="nc-metric-cell">
                <div className="nc-metric-top">
                  <Zap size={20} className="nc-metric-icon" />
                  <span className="nc-metric-val">&lt;15 min</span>
                </div>
                <div className="nc-metric-label">Average Threat Response Time</div>
              </div>

              <div className="nc-metric-cell">
                <div className="nc-metric-top">
                  <Layers size={20} className="nc-metric-icon" />
                  <span className="nc-metric-val">6+</span>
                </div>
                <div className="nc-metric-label">Defense Layers Across Infrastructure</div>
              </div>

              <div className="nc-metric-cell">
                <div className="nc-metric-top">
                  <Globe size={20} className="nc-metric-icon" />
                  <span className="nc-metric-val">Global</span>
                </div>
                <div className="nc-metric-label">Coverage &amp; Enterprise Reach</div>
              </div>
            </div>

            {/* Dark Global Telemetry Map Graphic */}
            <div className="nc-telemetry-map-wrap">
              <div className="nc-telemetry-image-container">
                <img 
                  src={worldTelemetryImg} 
                  alt="Netcradus Global Threat Telemetry and Coverage Network" 
                  className="nc-world-telemetry-img"
                  loading="lazy"
                />
                <div className="nc-telemetry-overlay-vignette" />

                {/* Overlaid Regional Nodes Legend */}
                <div className="nc-regional-legend">
                  <div className="nc-legend-item"><span className="nc-legend-pip" /> NORTH AMERICA</div>
                  <div className="nc-legend-item"><span className="nc-legend-pip" /> EUROPE</div>
                  <div className="nc-legend-item"><span className="nc-legend-pip" /> ASIA PACIFIC</div>
                  <div className="nc-legend-item"><span className="nc-legend-pip" /> MIDDLE EAST</div>
                  <div className="nc-legend-item"><span className="nc-legend-pip" /> AFRICA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE ENGINEERING CAPABILITIES (DOMINANT CENTRAL HUB & SPOKE)
          ========================================================================= */}
      <section className="nc-capabilities-section" id="why-us">
        <div className="nc-ambient-glow nc-glow-capabilities" />
        <div className="nc-container">
          <div className="nc-capabilities-header text-center">
            <div className="nc-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="nc-eyebrow-dot" />
              BUILT FOR WHAT'S NEXT
            </div>
            <h2 className="nc-section-title">
              Our Core Engineering <span className="nc-text-orange">Capabilities</span>
            </h2>
            <p className="nc-section-sub" style={{ margin: '0 auto' }}>
              An integrated, AI-powered cybersecurity ecosystem.
            </p>
          </div>

          <div className="nc-ecosystem-stage">
            {/* SVG Connecting Bus Cables */}
            <svg className="nc-bus-lines-svg" viewBox="0 0 1160 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="busGradLeft" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="busGradRight" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Left Spoke Lines */}
              <path d="M 460 160 C 370 160, 360 75, 310 75" stroke="url(#busGradLeft)" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M 440 210 C 370 210, 350 210, 310 210" stroke="url(#busGradLeft)" strokeWidth="2.2" />
              <path d="M 460 260 C 370 260, 360 345, 310 345" stroke="url(#busGradLeft)" strokeWidth="2" strokeDasharray="5 5" />

              {/* Right Spoke Lines */}
              <path d="M 700 160 C 790 160, 800 75, 850 75" stroke="url(#busGradRight)" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M 720 210 C 790 210, 810 210, 850 210" stroke="url(#busGradRight)" strokeWidth="2.2" />
              <path d="M 700 260 C 790 260, 800 345, 850 345" stroke="url(#busGradRight)" strokeWidth="2" strokeDasharray="5 5" />

              {/* Connection End Nodes */}
              <circle cx="310" cy="75" r="4.5" fill="#FF7A00" />
              <circle cx="310" cy="210" r="4.5" fill="#FF7A00" />
              <circle cx="310" cy="345" r="4.5" fill="#FF7A00" />
              <circle cx="850" cy="75" r="4.5" fill="#FF7A00" />
              <circle cx="850" cy="210" r="4.5" fill="#FF7A00" />
              <circle cx="850" cy="345" r="4.5" fill="#FF7A00" />
            </svg>

            <div className="nc-ecosystem-grid">
              {/* Left Spoke Capabilities (Floating Nodes) */}
              <div className="nc-spoke-col nc-spoke-left">
                {/* Capability 1: SOC */}
                <div 
                  className={`nc-node-item ${activeCap === 1 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCap(1)}
                  onMouseLeave={() => setActiveCap(null)}
                >
                  <div className="nc-node-text">
                    <h3 className="nc-node-title">Security Operations Center (SOC)</h3>
                    <p className="nc-node-desc">Continuous monitoring, detection and response</p>
                  </div>
                  <div className="nc-node-icon-circle">
                    <Radio size={19} />
                  </div>
                </div>

                {/* Capability 2: VAPT */}
                <div 
                  className={`nc-node-item ${activeCap === 2 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCap(2)}
                  onMouseLeave={() => setActiveCap(null)}
                >
                  <div className="nc-node-text">
                    <h3 className="nc-node-title">Vulnerability Assessment &amp; Penetration Testing (VAPT)</h3>
                    <p className="nc-node-desc">Find and fix risks before attackers do</p>
                  </div>
                  <div className="nc-node-icon-circle">
                    <Crosshair size={19} />
                  </div>
                </div>

                {/* Capability 3: Cloud Defense */}
                <div 
                  className={`nc-node-item ${activeCap === 3 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCap(3)}
                  onMouseLeave={() => setActiveCap(null)}
                >
                  <div className="nc-node-text">
                    <h3 className="nc-node-title">Cloud &amp; Container Defense</h3>
                    <p className="nc-node-desc">Secure multi-cloud and modern infrastructure</p>
                  </div>
                  <div className="nc-node-icon-circle">
                    <Cloud size={19} />
                  </div>
                </div>
              </div>

              {/* Dominant Central AI Defense Radar Core (Enlarged ~18%) */}
              <div className="nc-central-radar-hub">
                <div className="nc-radar-glow-aura" />
                <div className="nc-radar-sweep-beam" />
                <div className="nc-radar-ring-1" />
                <div className="nc-radar-ring-2" />
                <div className="nc-radar-ring-3" />

                {/* Central Autonomous Core Disc */}
                <div className="nc-core-emblem-disc">
                  <div className="nc-core-inner-border" />
                  <div className="nc-core-n-symbol">N</div>
                  <div className="nc-core-status-labels">
                    <span>AI-DRIVEN</span>
                    <strong>AUTONOMOUS</strong>
                    <span>DEFENSE</span>
                  </div>
                </div>
              </div>

              {/* Right Spoke Capabilities (Floating Nodes) */}
              <div className="nc-spoke-col nc-spoke-right">
                {/* Capability 4: Zero Trust */}
                <div 
                  className={`nc-node-item ${activeCap === 4 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCap(4)}
                  onMouseLeave={() => setActiveCap(null)}
                >
                  <div className="nc-node-icon-circle">
                    <Lock size={19} />
                  </div>
                  <div className="nc-node-text">
                    <h3 className="nc-node-title">Zero Trust Security</h3>
                    <p className="nc-node-desc">Identity-first, least-privilege access for a safer enterprise</p>
                  </div>
                </div>

                {/* Capability 5: Governance */}
                <div 
                  className={`nc-node-item ${activeCap === 5 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCap(5)}
                  onMouseLeave={() => setActiveCap(null)}
                >
                  <div className="nc-node-icon-circle">
                    <FileCheck2 size={19} />
                  </div>
                  <div className="nc-node-text">
                    <h3 className="nc-node-title">Governance &amp; Compliance</h3>
                    <p className="nc-node-desc">Stay ahead of evolving regulations with confidence</p>
                  </div>
                </div>

                {/* Capability 6: Autonomous Security */}
                <div 
                  className={`nc-node-item ${activeCap === 6 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCap(6)}
                  onMouseLeave={() => setActiveCap(null)}
                >
                  <div className="nc-node-icon-circle">
                    <Cpu size={19} />
                  </div>
                  <div className="nc-node-text">
                    <h3 className="nc-node-title">Autonomous Security</h3>
                    <p className="nc-node-desc">AI-powered threat detection, response and self-healing defense</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY ENTERPRISES CHOOSE NETCRADUS (SPLIT SOC VIEW)
          ========================================================================= */}
      <section className="nc-why-choose-section">
        <div className="nc-ambient-glow nc-glow-why" />
        <div className="nc-container nc-why-grid">
          {/* Left: Enterprise Checklist */}
          <div className="nc-why-left-col">
            <div className="nc-eyebrow">
              <span className="nc-eyebrow-dot" />
              ENTERPRISE CONFIDENCE
            </div>

            <h2 className="nc-section-title">
              Why Enterprises <br />
              Choose <span className="nc-text-orange">Netcradus</span>
            </h2>

            <p className="nc-why-subtitle">
              More than a cybersecurity provider — a strategic partner in your growth and resilience.
            </p>

            <ul className="nc-checklist-flow">
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Engineering-led, not just service-led</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>AI-powered and future-ready solutions</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Proven expertise across regulated industries</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Human + Autonomous defense approach</span>
              </li>
              <li>
                <div className="nc-chk-badge">
                  <Check size={14} className="nc-chk-icon" />
                </div>
                <span>Commitment to long-term partnership</span>
              </li>
            </ul>
          </div>

          {/* Right: SOC Command Center Realistic Visual */}
          <div className="nc-why-right-col">
            <div className="nc-soc-cinematic-card">
              <img 
                src={socCommandImg} 
                alt="Netcradus Global Security Operations Center command environment" 
                className="nc-soc-media-img"
                loading="lazy"
              />
              <div className="nc-soc-vignette-layer" />

              {/* Tagline Overlay */}
              <div className="nc-soc-banner-overlay">
                <div className="nc-soc-banner-text">
                  PEOPLE. TECHNOLOGY. <br />
                  A SAFER TOMORROW.
                </div>
                <div className="nc-soc-banner-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PREMIUM FINAL CINEMATIC CTA
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
              READY TO STRENGTHEN YOUR DEFENSE?
            </div>
            
            <h2 className="nc-cta-main-heading">
              Let's Build a <span className="nc-text-orange-glow">Safer Tomorrow</span>
            </h2>

            <p className="nc-cta-body-text">
              Partner with Netcradus to design a resilient, intelligent and autonomous cybersecurity future for your organization.
            </p>

            <div className="nc-cta-btn-wrap">
              <Link to="/contact" className="nc-btn-primary nc-btn-cta-glow">
                TALK TO AN EXPERT
                <ArrowRight size={18} className="nc-btn-icon" />
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
