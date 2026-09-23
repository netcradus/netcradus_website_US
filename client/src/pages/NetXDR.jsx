import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ShieldAlert,
  Activity,
  Zap,
  Search,
  Lock,
  Server,
  Layers,
  ArrowRight,
  AlertTriangle,
  Monitor,
  HardDrive,
  Maximize2,
  X,
  ChevronRight,
  FileCode,
  Network
} from 'lucide-react';
import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/CTA/CTASection';

// Dashboard and console screenshots
import xdrDashboardImg from '../assets/images/products/xdr-dashboard.png';
import netxdrEndpointsImg from '../assets/images/products/netxdr-endpoints.png';
import netxdrDetectionsImg from '../assets/images/products/netxdr-detections.png';
import ctiIocImg from '../assets/images/products/cti-ioc.png';
import cyrixMainDashboardImg from '../assets/images/products/cyrix-main-dashboard.png';

import './NetXDR.css';

const eppPillars = [
  {
    id: 'epp-1',
    title: 'Real-Time Endpoint Telemetry',
    desc: 'Deep kernel-level eBPF monitoring of process lineage, ETW events, memory modifications, and raw socket connections with < 1% CPU utilization.',
    icon: Activity,
    badge: 'KERNEL eBPF',
    stat: '100% VISIBILITY'
  },
  {
    id: 'epp-2',
    title: 'Behavioral NGAV & Anti-Ransomware',
    desc: 'Multi-stage behavioral anomaly engine that intercepts file entropy surges, shadow copy deletions, and unauthorized encryption attempts in < 14ms.',
    icon: ShieldAlert,
    badge: 'SUB-14MS BLOCK',
    stat: 'ZERO-DAY SHIELD'
  },
  {
    id: 'epp-3',
    title: 'In-Memory Exploit Mitigation',
    desc: 'Defends against memory-only implants, reflective DLL injections, process hollowing, and living-off-the-land (LotL) binaries.',
    icon: Lock,
    badge: 'MEMORY DEFENSE',
    stat: 'IN-LINE TERMINATION'
  },
  {
    id: 'epp-4',
    title: 'Proactive Threat Hunting & IOC Search',
    desc: 'Search fleet-wide process memory, loaded modules, hashes, and behavioral heuristics against global MITRE ATT&CK TTPs in seconds.',
    icon: Search,
    badge: '200+ TTPs',
    stat: 'SUB-SECOND RETRIEVAL'
  },
  {
    id: 'epp-5',
    title: 'Automated Device Containment',
    desc: 'Isolate compromised workstations or servers instantly from the network with single-click API or autonomous SOAR playbooks while preserving SOC forensics.',
    icon: Zap,
    badge: 'INSTANT ISOLATION',
    stat: 'ZERO LATERAL SPREAD'
  },
  {
    id: 'epp-6',
    title: 'Cross-Platform Heterogeneous Fleet',
    desc: 'Uniform lightweight agent deployment across Windows 10/11, Windows Server, Ubuntu, RHEL, macOS Ventura/Sonoma, and Kubernetes pods.',
    icon: Server,
    badge: 'MULTI-OS FLEET',
    stat: 'ZERO REBOOT DEPLOY'
  }
];

const telemetryConsoles = [
  {
    id: 'console-1',
    title: 'Windows & Linux Process Telemetry',
    desc: 'Real-time monitoring of process trees, ETW events, memory modifications, file system mutations, and outbound C2 connections.',
    badge: 'ACTIVE TELEMETRY',
    badgeColor: 'emerald',
    image: netxdrEndpointsImg,
    fallbackImage: xdrDashboardImg,
    icon: Monitor
  },
  {
    id: 'console-2',
    title: 'Adversary TTP & Hash Search',
    desc: 'Search endpoint behavior against global IOC feeds, Sigma detection rules, and retrospective MITRE ATT&CK campaign patterns.',
    badge: 'LIVE IOC STREAM',
    badgeColor: 'purple',
    image: ctiIocImg,
    fallbackImage: xdrDashboardImg,
    icon: Search
  },
  {
    id: 'console-3',
    title: 'Automated Device Isolation Console',
    desc: 'Automatically detect suspicious privilege escalations, sever malicious network sockets, and isolate endpoints at machine speed.',
    badge: 'SUB-SECOND ISOLATION',
    badgeColor: 'pink',
    image: netxdrDetectionsImg,
    fallbackImage: xdrDashboardImg,
    icon: Zap
  }
];

const huntingCapabilities = [
  {
    title: 'Process Lineage Tree Analysis',
    desc: 'Visualize complete parent-child process chains from initial execution to memory injection.',
    icon: Layers
  },
  {
    title: 'Kernel eBPF Socket Audit',
    desc: 'Inspect encrypted outbound payloads, suspicious DNS beacons, and hidden reverse shells.',
    icon: Network
  },
  {
    title: 'YARA-X & Sigma Rules Execution',
    desc: 'Execute custom threat detection logic natively across millions of live endpoint events.',
    icon: FileCode
  },
  {
    title: 'MITRE ATT&CK Matrix Mapping',
    desc: 'Every endpoint detection is mapped to standardized tactic and technique IDs automatically.',
    icon: ShieldCheck
  }
];

const isolationPlaybooks = [
  {
    title: 'Network Socket Severing',
    desc: 'Quarantine device network interfaces while maintaining secure telemetry pipe to SOC.',
    icon: Zap
  },
  {
    title: 'Process Tree Termination',
    desc: 'Instantly kill malicious parent and child process trees to halt payload execution.',
    icon: AlertTriangle
  },
  {
    title: 'Cryptographic File Quarantine',
    desc: 'Lock down malicious binaries and extract hashes for automated sandboxing.',
    icon: Lock
  },
  {
    title: 'Automated Snapshot Rollback',
    desc: 'Restore encrypted user files from pristine local shadow snapshots in under 5 minutes.',
    icon: HardDrive
  }
];

const endpointMetrics = [
  { label: 'TOTAL ENDPOINTS', value: '24', change: 'FLEET ENROLLED', color: '#F8FAFC' },
  { label: 'HEALTHY & ACTIVE', value: '20', change: '100% HEALTH', color: '#34D399' },
  { label: 'AT RISK / ELEVATED', value: '2', change: 'ISOLATED', color: '#F59E0B' },
  { label: 'OFFLINE / INACTIVE', value: '2', change: 'STANDBY', color: '#94A3B8' },
  { label: 'CONTAINMENT TIME', value: '< 14ms', change: 'SUB-SECOND', color: '#FF7900' },
  { label: 'CPU UTILIZATION', value: '< 1%', change: 'ULTRA-LIGHT', color: '#38BDF8' }
];

export default function NetXDR() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="page-netxdr">
      {/* 1. Breadcrumbs */}
      <div className="netxdr-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={13} className="bc-sep" />
            <Link to="/products">Products</Link>
            <ChevronRight size={13} className="bc-sep" />
            <span className="bc-current">NetCradus Cyrix XDR</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="netxdr-hero-section cyber-grid-bg">
        <div className="container">
          <div className="netxdr-hero-grid">
            <div className="netxdr-hero-content">
              <span className="cyber-badge orange">
                <span className="badge-dot" />
                EXTENDED DETECTION &amp; RESPONSE
              </span>

              <h1 className="netxdr-hero-title">
                NetCradus <span className="text-gradient-orange">Cyrix XDR</span>
              </h1>

              <h2 className="netxdr-hero-tagline text-gradient-cyan">
                AI-Powered Unified Endpoint, Cloud &amp; Network Protection
              </h2>

              <p className="netxdr-hero-lead">
                Kernel eBPF &bull; Behavioral NGAV &bull; Proactive Threat Hunting &bull; Ransomware Rollback
              </p>

              <p className="netxdr-hero-desc">
                NetCradus Cyrix XDR delivers enterprise-wide telemetry visibility, machine-speed threat containment, and autonomous investigation across workstations, physical servers, virtual cloud instances, and container clusters before adversary damage occurs.
              </p>

              <div className="netxdr-hero-cta">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                  Request Cyrix XDR Demo
                </Button>
                <Button to="/acis" variant="secondary" size="lg">
                  Explore ACIS Integration
                </Button>
              </div>

              {/* Quick Spec Tags */}
              <div className="netxdr-spec-pills">
                <span className="spec-pill">&lt; 14ms Containment</span>
                <span className="spec-pill">eBPF Kernel Agent</span>
                <span className="spec-pill">&lt; 1% CPU Footprint</span>
                <span className="spec-pill">Automated Rollback</span>
              </div>
            </div>

            {/* Right Side: Interactive Live XDR Dashboard Console */}
            <div className="netxdr-hero-visual">
              <div 
                className="xdr-preview-frame glass-panel"
                onClick={() => setModalImage({ src: xdrDashboardImg, alt: 'Cyrix XDR Endpoints Dashboard' })}
              >
                <div className="xdr-frame-bar">
                  <div className="xdr-traffic-lights">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="xdr-url-box">
                    <Lock size={11} className="lock-icon" />
                    <span>app.netcradus.com/cyrix-xdr/endpoints</span>
                  </div>
                  <span className="xdr-live-badge">● LIVE CONSOLE</span>
                </div>
                <div className="xdr-frame-canvas">
                  <img 
                    src={xdrDashboardImg} 
                    alt="NetCradus Cyrix XDR Endpoints Console Dashboard" 
                    className="xdr-hero-img"
                  />
                  <div className="xdr-expand-overlay">
                    <Maximize2 size={16} />
                    <span>Click to Expand Full Screen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6 Core Defense Pillars */}
      <section className="section-py cyber-grid-subtle" id="pillars">
        <div className="container">
          <SectionHeader
            badge="NETCRADUS EPP / EDR"
            title="Next-Generation Unified"
            highlightText="Endpoint Defense Architecture"
            subtitle="Engineered with lightweight eBPF probes that operate seamlessly at the kernel boundary without compromising stability or performance."
          />

          <div className="netxdr-pillars-grid">
            {eppPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.id} className="glass-card netxdr-pillar-card">
                  <div className="pillar-top-row">
                    <div className="pillar-icon-box">
                      <IconComp size={22} />
                    </div>
                    <span className="pillar-badge">{pillar.badge}</span>
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                  <div className="pillar-footer">
                    <span className="pillar-stat-dot">●</span>
                    <span className="pillar-stat-text">{pillar.stat}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Live Telemetry & Console Gallery */}
      <section className="section-py netxdr-telemetry-section" id="consoles">
        <div className="container">
          <SectionHeader
            badge="LIVE TELEMETRY & CONSOLE"
            title="Centralized Host Visibility &"
            highlightText="Threat Isolation"
            subtitle="Inspect real-time process execution logs, active agent health scores, endpoint telemetry, and threat hunting indicators from a centralized security console."
          />

          <div className="netxdr-consoles-grid">
            {telemetryConsoles.map((cons) => {
              const IconComp = cons.icon;
              return (
                <div key={cons.id} className="glass-panel netxdr-console-card">
                  <div className="console-card-header">
                    <h3 className="console-card-title">
                      <IconComp size={16} className="text-orange" />
                      <span>{cons.title}</span>
                    </h3>
                    <span className={`console-status-pill ${cons.badgeColor}`}>
                      {cons.badge}
                    </span>
                  </div>

                  <div 
                    className="console-img-wrap"
                    onClick={() => setModalImage({ src: cons.image || cons.fallbackImage, alt: cons.title })}
                  >
                    <img 
                      src={cons.image || cons.fallbackImage} 
                      alt={cons.title} 
                      className="console-thumb-img"
                      onError={(e) => { e.currentTarget.src = xdrDashboardImg; }}
                    />
                    <div className="console-img-overlay">
                      <Maximize2 size={16} />
                      <span>Click to Expand Screenshot</span>
                    </div>
                  </div>

                  <div className="console-card-body">
                    <p className="console-desc">{cons.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Proactive Threat Hunting Engine */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <div className="netxdr-split-row">
            <div className="split-content-col">
              <span className="cyber-badge orange">PROACTIVE DEFENSE</span>
              <h2 className="split-main-heading">
                Proactive <span className="text-gradient-orange">Threat Hunting</span>
              </h2>
              <h3 className="split-sub-heading text-gradient-cyan">
                Find threats before they become catastrophic incidents.
              </h3>
              <p className="split-body-copy">
                NetCradus Cyrix XDR continuously analyzes endpoint telemetry, process lineage graphs, file hashes, and network socket telemetry to uncover advanced persistent adversaries (APTs) and stealthy living-off-the-land attacks.
              </p>

              <div className="split-features-grid">
                {huntingCapabilities.map((feat, i) => {
                  const IconComp = feat.icon;
                  return (
                    <div key={i} className="split-feat-box glass-card">
                      <div className="feat-icon-badge">
                        <IconComp size={18} />
                      </div>
                      <h4 className="feat-title">{feat.title}</h4>
                      <p className="feat-desc">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="split-visual-col">
              <div 
                className="split-preview-frame glass-panel"
                onClick={() => setModalImage({ src: ctiIocImg, alt: 'Threat Hunting Workbench' })}
              >
                <div className="xdr-frame-bar">
                  <span className="font-mono text-orange font-bold text-xs">THREAT HUNTING ENGINE</span>
                  <span className="font-mono text-cyan text-xs">MITRE ATT&amp;CK RETROSPECTION</span>
                </div>
                <div className="xdr-frame-canvas">
                  <img 
                    src={ctiIocImg} 
                    alt="Proactive Threat Hunting Workbench" 
                    className="split-frame-img"
                    onError={(e) => { e.currentTarget.src = xdrDashboardImg; }}
                  />
                  <div className="xdr-expand-overlay">
                    <Maximize2 size={16} />
                    <span>Click to Expand Threat Hunting Console</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Automated Response & Containment */}
      <section className="section-py netxdr-response-section">
        <div className="container">
          <div className="netxdr-split-row reverse">
            <div className="split-visual-col">
              <div 
                className="split-preview-frame glass-panel"
                onClick={() => setModalImage({ src: netxdrDetectionsImg, alt: 'Automated Device Isolation Console' })}
              >
                <div className="xdr-frame-bar">
                  <span className="font-mono text-pink-400 font-bold text-xs">AUTOMATED ISOLATION PLAYBOOK</span>
                  <span className="font-mono text-emerald-400 font-bold text-xs">EXECUTED</span>
                </div>
                <div className="xdr-frame-canvas">
                  <img 
                    src={netxdrDetectionsImg} 
                    alt="Automated Device Isolation Console" 
                    className="split-frame-img"
                    onError={(e) => { e.currentTarget.src = xdrDashboardImg; }}
                  />
                  <div className="xdr-expand-overlay">
                    <Maximize2 size={16} />
                    <span>Click to Expand Isolation Console</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="split-content-col">
              <span className="cyber-badge orange">AUTOMATED RESPONSE</span>
              <h2 className="split-main-heading">
                Contain Threats <span className="text-gradient-orange">Before They Spread</span>
              </h2>
              <p className="split-body-copy">
                When malicious activity or lateral movement is confirmed, Cyrix XDR immediately isolates the host, severs malicious network sockets, halts processes, and rolls back unauthorized modifications in sub-second time.
              </p>

              <div className="split-features-grid">
                {isolationPlaybooks.map((pb, i) => {
                  const IconComp = pb.icon;
                  return (
                    <div key={i} className="split-feat-box glass-card">
                      <div className="feat-icon-badge">
                        <IconComp size={18} />
                      </div>
                      <h4 className="feat-title">{pb.title}</h4>
                      <p className="feat-desc">{pb.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Centralized Fleet Metrics & Full Console View */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <SectionHeader
            badge="ENTERPRISE TELEMETRY"
            title="Complete Endpoint"
            highlightText="Intelligence Fleet"
            subtitle="Real-time visibility across endpoints, active users, processes, applications, network connections, and security telemetry."
          />

          <div className="netxdr-stats-row">
            {endpointMetrics.map((m, idx) => (
              <div key={idx} className="glass-card netxdr-stat-box">
                <span className="stat-label">{m.label}</span>
                <span className="stat-value" style={{ color: m.color }}>{m.value}</span>
                <span className="stat-change">{m.change}</span>
              </div>
            ))}
          </div>

          <div 
            className="netxdr-full-console-box glass-panel"
            onClick={() => setModalImage({ src: cyrixMainDashboardImg, alt: 'CYRIX Cyber Defense Platform Dashboard' })}
          >
            <div className="xdr-frame-bar">
              <span className="font-mono text-orange font-bold text-xs">CYRIX CYBER DEFENSE PLATFORM DASHBOARD</span>
              <span className="font-mono text-cyan text-xs">REAL-TIME TELEMETRY AUDIT</span>
            </div>
            <div className="xdr-frame-canvas">
              <img 
                src={cyrixMainDashboardImg} 
                alt="CYRIX Cyber Defense Platform Dashboard" 
                className="full-console-img"
                onError={(e) => { e.currentTarget.src = xdrDashboardImg; }}
              />
              <div className="xdr-expand-overlay">
                <Maximize2 size={20} />
                <span>Click to Expand CYRIX Platform Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <CTASection
        badge="UNIFIED CYBER IMMUNITY"
        title="Secure Every Endpoint With"
        highlightText="NetCradus Cyrix XDR"
        subtitle="Unify endpoint protection, threat hunting, detection, and automated response in one intelligent security platform."
        primaryBtnText="Request a Demo"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Platform"
        secondaryBtnLink="/platform"
      />

      {/* Lightbox Screenshot Modal */}
      {modalImage && (
        <div className="screenshot-modal-backdrop" onClick={() => setModalImage(null)}>
          <div className="screenshot-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setModalImage(null)}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
            <img src={modalImage.src} alt={modalImage.alt} className="modal-preview-img" />
            <p className="modal-caption">{modalImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
