import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Database, 
  Zap, 
  Globe, 
  Lock, 
  FileCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';
import ThreatRadar from '../components/Interactive/ThreatRadar';
import { platformOverviewData } from '../data/platformDetailData';
import './Platform.css';

const pillarIcons = {
  'xdr': Shield,
  'siem': Database,
  'soar': Zap,
  'cti': Globe,
  'pam': Lock,
  'grc': FileCheck,
  'ai-security': Cpu
};

export default function Platform() {
  return (
    <div className="page-platform">
      {/* Platform Hero */}
      <section className="platform-hero-section cyber-grid-bg">
        <div className="container text-center">
          <span className="cyber-badge orange">
            <span className="badge-dot" />
            UNIFIED CONVERGED PLATFORM
          </span>
          <h1 className="platform-hero-title">
            Seven Converged Platforms. <br />
            <span className="text-gradient-cyan">One Autonomous Cyber Immune System.</span>
          </h1>
          <p className="platform-hero-sub">
            {platformOverviewData.description}
          </p>

          <div className="platform-hero-stats">
            {platformOverviewData.stats.map((st, idx) => (
              <div key={idx} className="glass-card platform-hero-stat-card">
                <span className="p-stat-val text-gradient-cyan">{st.value}</span>
                <span className="p-stat-lbl">{st.label}</span>
                <span className="p-stat-detail">{st.detail}</span>
              </div>
            ))}
          </div>

          <div className="platform-hero-cta">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Schedule Technical Platform Demo
            </Button>
            <Button to="/products#acis" variant="secondary" size="lg">
              Explore Flagship ACIS Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Seven Converged Platforms Grid */}
      <section className="section-py cyber-grid-subtle" id="pillars">
        <div className="container">
          <SectionHeader
            badge="CONVERGED DEFENSE ECOSYSTEM"
            title="Seven Pillars Engineered to"
            highlightText="Operate as One Immune System"
            subtitle="Click on any pillar to explore its in-depth capabilities, architecture, and deployment specifications."
          />

          <div className="grid-3 platform-pillars-grid">
            {platformOverviewData.pillars.map((pillar) => {
              const PillarIcon = pillarIcons[pillar.id] || Shield;
              return (
                <Link 
                  key={pillar.id} 
                  to={pillar.path} 
                  className="glass-card platform-pillar-card group"
                  aria-label={`Explore ${pillar.name}`}
                >
                  <div className="pillar-header">
                    <div className="pillar-icon-box">
                      <PillarIcon size={24} />
                    </div>
                    <span className="pillar-tag">EXPLORE PILLAR</span>
                  </div>
                  <h3 className="pillar-name">{pillar.name}</h3>
                  <h4 className="pillar-tagline text-gradient-cyan">{pillar.tagline}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                  
                  <div className="pillar-link-action">
                    <span>Explore {pillar.name}</span>
                    <ArrowRight size={16} className="pillar-arrow" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How All 7 Platforms Work Together */}
      <section className="section-py">
        <div className="container">
          <SectionHeader
            badge="INTEGRATED WORKFLOW"
            title="How the Seven Converged"
            highlightText="Platforms Work Together"
            subtitle="Eliminating fragmented point solutions through continuous automated coordination."
          />

          <div className="platform-workflow-timeline">
            {platformOverviewData.workflow.map((wf) => (
              <div key={wf.num} className="glass-card workflow-timeline-step">
                <div className="wf-step-num">{wf.num}</div>
                <div className="wf-step-content">
                  <h4 className="wf-step-title">{wf.title}</h4>
                  <p className="wf-step-desc">{wf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Agent & Single Console Showcase */}
      <section className="section-py cyber-grid-subtle">
        <div className="container">
          <div className="glass-panel single-console-banner">
            <div className="console-text-content">
              <span className="cyber-badge purple">ARCHITECTURAL EXCELLENCE</span>
              <h3 className="console-title">Single Universal Agent. Single Cloud Console.</h3>
              <p className="console-desc">
                Replace 5+ heavy legacy security agents with NetCradus's ultra-lightweight universal eBPF kernel agent. Enjoy zero performance degradation, zero kernel panics, and effortless deployment across Windows, Linux, macOS, and container clusters in minutes.
              </p>
              <div className="console-check-list">
                <div className="console-check-item">
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>&lt; 1% CPU footprint with sub-50MB memory utilization</span>
                </div>
                <div className="console-check-item">
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>Kernel-level eBPF monitoring without dangerous kernel modules</span>
                </div>
                <div className="console-check-item">
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>Zero reboot required during deployment and automated updates</span>
                </div>
                <div className="console-check-item">
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>Single unified pane of glass across endpoints, network, and cloud</span>
                </div>
              </div>
              <div className="console-btn-row">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                  Request Enterprise Agent Trial
                </Button>
              </div>
            </div>
            <div className="console-visual-content">
              <ThreatRadar />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Unify Your Enterprise Security on"
        highlightText="NetCradus Converged Platform"
        subtitle="Experience sub-second threat detection and autonomous containment with our team of security architects."
      />
    </div>
  );
}
