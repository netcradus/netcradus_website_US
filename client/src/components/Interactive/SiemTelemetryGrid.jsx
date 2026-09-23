import React, { useState, useEffect } from 'react';
import {
  Database,
  Activity,
  Target,
  ShieldAlert,
  Search,
  Sparkles
} from 'lucide-react';
import './SiemTelemetryGrid.css';

const siemCapabilities = [
  {
    id: 'telemetry-ingestion',
    title: 'Multi-Source Telemetry Ingestion',
    desc: 'Ingests and normalizes logs from endpoints, network syslog/CEF, Splunk HEC, JSON APIs, AWS GuardDuty/CloudTrail, and Azure Sentinel into an Elasticsearch store.',
    icon: Database,
    tag: 'MULTI-SOURCE',
    metric: 'ELASTICSEARCH',
    status: 'INGESTING',
    type: 'stream'
  },
  {
    id: 'spl-correlation',
    title: 'Real-Time SPL Correlation Rules',
    desc: 'Evaluates continuous stream and scheduled detection queries using pipe-delimited SPL syntax, custom time windows, and dynamic 1-100 risk scoring.',
    icon: Activity,
    tag: 'RULES ENGINE',
    metric: 'SPL STREAM RULES',
    status: 'ACTIVE RULES',
    type: 'waveform'
  },
  {
    id: 'ai-analyst',
    title: 'AI Analyst Query Translation',
    desc: 'Translates plain-English natural language questions into real search queries against live and forensic telemetry with transparent query fallback.',
    icon: Search,
    tag: 'AI QUERY TRANSLATOR',
    metric: 'PLAIN ENGLISH',
    status: 'TRANSLATING',
    type: 'terminal'
  },
  {
    id: 'threat-intel',
    title: 'Live Threat Intel Enrichment',
    desc: 'Enriches indicators against live VirusTotal and AbuseIPDB APIs, highlighting confirmed IOC hits at the top of the alert triage queue.',
    icon: ShieldAlert,
    tag: 'VIRUSTOTAL & ABUSEIPDB',
    metric: 'LIVE IOC LOOKUP',
    status: 'ENRICHED',
    type: 'risk-gauge'
  },
  {
    id: 'mitre-attack',
    title: 'MITRE ATT&CK Alignment',
    desc: 'Maps every alert, correlation rule, and red team simulation stage to MITRE ATT&CK tactics and techniques for complete adversary context.',
    icon: Target,
    tag: 'MITRE ATT&CK',
    metric: 'ATT&CK MATRIX',
    status: 'MAPPED',
    type: 'nodes'
  },
  {
    id: 'model-retraining',
    title: 'AI Classifier Continuous Retraining',
    desc: 'Retrains alert classification models based on analyst-confirmed incident verdicts, automatically evaluating held-out accuracy before deployment.',
    icon: Sparkles,
    tag: 'MODEL RETRAINING',
    metric: 'ANALYST FEEDBACK',
    status: 'OPTIMIZING',
    type: 'scanner'
  }
];

export default function SiemTelemetryGrid() {
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automated gentle sequence stepping through the ACIS intelligence pipeline
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % siemCapabilities.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="siem-telemetry-root"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Cyber Grid & Telemetry Ambient Illumination */}
      <div className="siem-bg-grid" aria-hidden="true" />
      <div className="siem-ambient-glow orange-ambient" aria-hidden="true" />
      <div className="siem-ambient-glow cyan-ambient" aria-hidden="true" />
      
      {/* Decorative Floating Particles */}
      <div className="siem-particles-wrap" aria-hidden="true">
        <span className="siem-particle p1" />
        <span className="siem-particle p2" />
        <span className="siem-particle p3" />
        <span className="siem-particle p4" />
        <span className="siem-particle p5" />
      </div>

      {/* Interconnecting Pipeline SVG Data Bus (Desktop) */}
      <svg className="siem-connector-svg" aria-hidden="true" viewBox="0 0 1200 680" fill="none">
        <defs>
          <linearGradient id="siemLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 121, 0, 0.4)" />
            <stop offset="50%" stopColor="rgba(56, 189, 248, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 121, 0, 0.4)" />
          </linearGradient>
          <linearGradient id="pulseGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 121, 0, 0)" />
            <stop offset="50%" stopColor="#FF7900" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* Row 1 Inter-Card Links */}
        <path d="M 370 180 L 430 180" className="siem-bus-line" />
        <path d="M 770 180 L 830 180" className="siem-bus-line" />

        {/* Vertical Transition from Row 1 End to Row 2 End */}
        <path d="M 1000 320 C 1000 370, 1000 390, 1000 440" className="siem-bus-line" />
        
        {/* Row 2 Reverse Links */}
        <path d="M 830 520 L 770 520" className="siem-bus-line" />
        <path d="M 430 520 L 370 520" className="siem-bus-line" />

        {/* Animated Data Pulses */}
        <circle className="siem-bus-pulse pulse-1" r="3.5" fill="#FF7900" />
        <circle className="siem-bus-pulse pulse-2" r="3.5" fill="#38BDF8" />
        <circle className="siem-bus-pulse pulse-3" r="3.5" fill="#FF7900" />
      </svg>

      {/* Header Info Bar / Status Ticker */}
      <div className="siem-pipeline-statusbar">
        <div className="statusbar-left">
          <span className="live-dot" />
          <span className="statusbar-label">ACIS CORRELATION ENGINE</span>
          <span className="statusbar-sep">//</span>
          <span className="statusbar-info">PIPELINE SYNCHRONIZED</span>
        </div>
        <div className="statusbar-right">
          <span className="statusbar-step">
            ACTIVE STAGE: <span className="step-highlight">0{activeCard + 1} / 06</span>
          </span>
          <span className="statusbar-name">{siemCapabilities[activeCard].title}</span>
        </div>
      </div>

      {/* 6 Capabilities Grid (3x2 Desktop, 2x3 Tablet, 1x6 Mobile) */}
      <div className="siem-cards-grid">
        {siemCapabilities.map((cap, idx) => {
          const IconComp = cap.icon;
          const isActive = activeCard === idx;

          return (
            <div
              key={cap.id}
              className={`siem-card ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveCard(idx)}
              tabIndex={0}
              role="region"
              aria-label={cap.title}
            >
              {/* Corner HUD Accent Brackets */}
              <span className="card-corner tl" />
              <span className="card-corner tr" />
              <span className="card-corner bl" />
              <span className="card-corner br" />

              {/* Active Pulse Border Highlight */}
              <div className="card-border-glow" />

              {/* Top Header: Icon & Category Tag */}
              <div className="siem-card-top">
                <div className="siem-icon-box">
                  <IconComp size={22} className="siem-icon-svg" />
                  <span className="icon-pulse-ring" />
                </div>
                <div className="siem-card-meta">
                  <span className="siem-stage-idx">0{idx + 1}</span>
                  <span className="siem-card-tag">{cap.tag}</span>
                </div>
              </div>

              {/* Card Title & Desc */}
              <h3 className="siem-card-title">{cap.title}</h3>
              <p className="siem-card-desc">{cap.desc}</p>

              {/* Specific Animated Micro-Telemetry Visual */}
              <div className="siem-visual-box">
                {cap.type === 'stream' && (
                  <div className="visual-stream-container">
                    <div className="stream-header">
                      <span>STREAM INGESTION BUS</span>
                      <span className="stream-rate">104.2k eps</span>
                    </div>
                    <div className="stream-bars">
                      <div className="stream-bar bar-1"><span className="stream-packet" /></div>
                      <div className="stream-bar bar-2"><span className="stream-packet" /></div>
                      <div className="stream-bar bar-3"><span className="stream-packet" /></div>
                      <div className="stream-bar bar-4"><span className="stream-packet" /></div>
                    </div>
                    <div className="stream-labels">
                      <span>AWS/GCP</span>
                      <span>K8s PODS</span>
                      <span>NETFLOW</span>
                      <span>ENTRA ID</span>
                    </div>
                  </div>
                )}

                {cap.type === 'waveform' && (
                  <div className="visual-waveform-container">
                    <div className="waveform-header">
                      <span>UEBA ANOMALY BASELINE</span>
                      <span className="wave-status">NORM = 0.02%</span>
                    </div>
                    <svg className="waveform-svg" viewBox="0 0 200 46" preserveAspectRatio="none">
                      <path
                        d="M 0 23 Q 25 23 35 12 T 60 30 T 90 8 T 120 34 T 150 20 T 180 23 L 200 23"
                        className="waveform-path-base"
                      />
                      <path
                        d="M 0 23 Q 25 23 35 12 T 60 30 T 90 8 T 120 34 T 150 20 T 180 23 L 200 23"
                        className="waveform-path-pulse"
                      />
                      <circle cx="90" cy="8" r="3" className="anomaly-ping" />
                    </svg>
                    <div className="waveform-footer">
                      <span>Z-Score: +0.12 (Normal)</span>
                      <span className="anomaly-tag">NO ESCALATION</span>
                    </div>
                  </div>
                )}

                {cap.type === 'scanner' && (
                  <div className="visual-scanner-container">
                    <div className="scanner-header">
                      <span>YARA-X / SIGMA COMPILED</span>
                      <span className="scan-active-dot">SCANNING</span>
                    </div>
                    <div className="scanner-code-window">
                      <div className="scan-line-laser" />
                      <code>
                        <span className="code-kw">rule</span> suspicious_lateral_wmi &#123;<br/>
                        &nbsp;&nbsp;<span className="code-prop">strings:</span> $cmd = <span className="code-str">"wmic process call"</span><br/>
                        &nbsp;&nbsp;<span className="code-prop">condition:</span> $cmd <span className="code-op">and</span> entropy &gt; 7.4<br/>
                        &#125;
                      </code>
                    </div>
                  </div>
                )}

                {cap.type === 'nodes' && (
                  <div className="visual-nodes-container">
                    <div className="nodes-header">
                      <span>TACTIC CORRELATION GRAPH</span>
                      <span className="nodes-matrix">MITRE v14</span>
                    </div>
                    <div className="nodes-canvas">
                      <div className="node node-1" title="Initial Access">
                        <span className="node-dot" />
                        <span className="node-txt">T1190</span>
                      </div>
                      <div className="node-link link-1" />
                      <div className="node node-2" title="Execution">
                        <span className="node-dot" />
                        <span className="node-txt">T1059</span>
                      </div>
                      <div className="node-link link-2" />
                      <div className="node node-3" title="Privilege Escalation">
                        <span className="node-dot active" />
                        <span className="node-txt">T1068</span>
                      </div>
                      <div className="node-link link-3" />
                      <div className="node node-4" title="Exfiltration">
                        <span className="node-dot" />
                        <span className="node-txt">T1048</span>
                      </div>
                    </div>
                  </div>
                )}

                {cap.type === 'risk-gauge' && (
                  <div className="visual-gauge-container">
                    <div className="gauge-header">
                      <span>ASSET RISK VECTOR</span>
                      <span className="risk-badge-sub">EVALUATING</span>
                    </div>
                    <div className="gauge-content">
                      <div className="gauge-dial">
                        <svg viewBox="0 0 100 56" className="dial-svg">
                          <path
                            d="M 12 48 A 38 38 0 0 1 88 48"
                            className="dial-track"
                          />
                          <path
                            d="M 12 48 A 38 38 0 0 1 88 48"
                            className="dial-value"
                          />
                        </svg>
                        <div className="dial-text">
                          <span className="dial-num">14</span>
                          <span className="dial-max">/100</span>
                        </div>
                      </div>
                      <div className="gauge-metrics">
                        <div className="g-metric">
                          <span className="gm-lbl">THREAT INDEX</span>
                          <span className="gm-val low">LOW RISK</span>
                        </div>
                        <div className="g-metric">
                          <span className="gm-lbl">BLAST RADIUS</span>
                          <span className="gm-val">ISOLATED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {cap.type === 'terminal' && (
                  <div className="visual-terminal-container">
                    <div className="term-header">
                      <span className="term-title">SPL QUERY ENGINE</span>
                      <span className="term-lat">0.038s</span>
                    </div>
                    <div className="term-body">
                      <div className="term-prompt">
                        <span className="prompt-sym">&gt;</span>
                        <span className="term-cmd">index=sec | stats count by src_ip | sort -count</span>
                      </div>
                      <div className="term-output">
                        <span className="log-row">10.0.4.18 &bull; 4,892 req/s &bull; HTTP 200</span>
                        <span className="log-row dim">172.16.8.92 &bull; 340 req/s &bull; AUTH PASS</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Bottom Divider & Status Footer */}
              <div className="siem-card-footer">
                <div className="footer-status">
                  <span className="status-live-dot" />
                  <span className="status-live-text">● LIVE</span>
                  <span className="status-state-text">{cap.status}</span>
                </div>
                <div className="footer-metric">
                  <span className="metric-val">{cap.metric}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
