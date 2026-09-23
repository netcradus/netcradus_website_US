import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  Shield, 
  Database, 
  Zap, 
  Globe, 
  Lock, 
  FileCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/CTA/CTASection';
import Button from '../components/common/Button';
import ThreatRadar from '../components/Interactive/ThreatRadar';
import xdrDashboardImg from '../assets/images/products/xdr-dashboard.png';
import siemDashboardImg from '../assets/images/products/siem-dashboard.png';
import soarDashboardImg from '../assets/images/products/soar-dashboard.png';
import ctiDashboardImg from '../assets/images/products/cti-dashboard.png';
import pamDashboardImg from '../assets/images/products/pam-dashboard.png';
import grcDashboardImg from '../assets/images/products/grc-dashboard.png';
import aiSecurityDashboardImg from '../assets/images/products/ai-security-dashboard.png';
import { productsDetailMap } from '../data/platformDetailData';
import './ProductDetail.css';

const productDashboardMap = {
  'xdr': {
    src: xdrDashboardImg,
    url: 'app.netcradus.com/cyrix-xdr/endpoints',
    badge: 'LIVE XDR CONSOLE',
    alt: 'NetCradus XDR Endpoints & Detections Console'
  },
  'siem': {
    src: siemDashboardImg,
    url: 'app.netcradus.com/cyrix-xdr/siem',
    badge: 'LIVE SIEM CONSOLE',
    alt: 'NetCradus SIEM Live Event Correlation & Analytics'
  },
  'soar': {
    src: soarDashboardImg,
    url: 'app.netcradus.com/cyrix-xdr/soar-playbooks',
    badge: 'AUTOMATED PLAYBOOKS',
    alt: 'NetCradus SOAR Orchestration & Playbook Engine'
  },
  'cti': {
    src: ctiDashboardImg,
    url: 'app.netcradus.com/cyrix-xdr/threat-intel',
    badge: 'IOC FEED & TTPs',
    alt: 'NetCradus CTI Cyber Threat Intelligence Engine'
  },
  'pam': {
    src: pamDashboardImg,
    url: 'app.netcradus.com/cyrix-xdr/zero-trust-pam',
    badge: 'PRIVILEGED VAULT',
    alt: 'NetCradus PAM Privileged Access & Zero Trust'
  },
  'grc': {
    src: grcDashboardImg,
    url: 'app.netcradus.com/cyrix-xdr/compliance-audit',
    badge: 'CONTINUOUS COMPLIANCE',
    alt: 'NetCradus GRC Attack Surface & Governance Audit'
  },
  'ai-security': {
    src: aiSecurityDashboardImg,
    url: 'app.netcradus.com/cyrix-xdr/ai-immune-engine',
    badge: 'AI CYBER IMMUNE CORE',
    alt: 'NetCradus AI Security Autonomous Defense Core'
  }
};

const productIcons = {
  'xdr': Shield,
  'siem': Database,
  'soar': Zap,
  'cti': Globe,
  'pam': Lock,
  'grc': FileCheck,
  'ai-security': Cpu
};

export default function ProductDetail() {
  const { productId } = useParams();
  
  // Normalize productId for possible aliases
  let cleanId = (productId || '').toLowerCase();
  if (cleanId === 'endpoint-detection') cleanId = 'xdr';
  if (cleanId === 'aisecurity' || cleanId === 'ai-security-tier') cleanId = 'ai-security';

  const product = productsDetailMap[cleanId];

  if (!product) {
    return <Navigate to="/platform" replace />;
  }

  const ProductIcon = productIcons[product.id] || Shield;
  const dashboardData = productDashboardMap[product.id];

  return (
    <div className="page-product-detail">
      {/* Breadcrumb Bar */}
      <div className="product-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={13} className="bc-sep" />
            <Link to="/platform">Platform</Link>
            <ChevronRight size={13} className="bc-sep" />
            <span className="bc-current">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="product-hero-section cyber-grid-bg">
        <div className="container">
          <div className="product-hero-grid">
            <div className="product-hero-info">
              <span className="cyber-badge orange">
                <span className="badge-dot" />
                {product.badge}
              </span>
              <h1 className="product-hero-title">{product.name}</h1>
              <h2 className="product-hero-tagline text-gradient-cyan">{product.tagline}</h2>
              <p className="product-hero-lead">{product.lead}</p>
              <p className="product-hero-desc">{product.description}</p>

              <div className="product-hero-cta">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                  Request {product.name} Demo
                </Button>
                <Button to="/products#acis" variant="secondary" size="lg">
                  Explore ACIS Integration
                </Button>
              </div>
            </div>

            <div className="product-hero-visual">
              {dashboardData ? (
                <div className="product-dashboard-frame glass-panel">
                  <div className="dashboard-frame-bar">
                    <div className="frame-traffic-lights">
                      <span className="t-dot red" />
                      <span className="t-dot yellow" />
                      <span className="t-dot green" />
                    </div>
                    <div className="frame-address-bar">
                      <Lock size={11} className="lock-icon" />
                      <span>{dashboardData.url}</span>
                    </div>
                    <span className="frame-status-badge live">● {dashboardData.badge}</span>
                  </div>
                  <div className="dashboard-frame-canvas">
                    <img 
                      src={dashboardData.src} 
                      alt={dashboardData.alt} 
                      className="dashboard-screenshot-img"
                    />
                  </div>
                </div>
              ) : (
                <ThreatRadar />
              )}
            </div>
          </div>

          {/* Hero Quick Stats Row */}
          <div className="product-hero-stats-row">
            {product.heroStats.map((st, idx) => (
              <div key={idx} className="glass-card product-hero-stat-card">
                <span className="p-hero-val text-gradient-cyan">{st.value}</span>
                <span className="p-hero-lbl">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="section-py cyber-grid-subtle" id="capabilities">
        <div className="container">
          <SectionHeader
            badge="CORE CAPABILITIES"
            title={`${product.name} Engine &`}
            highlightText="Technical Features"
            subtitle={`Engineered for high performance, zero false-positive fatigue, and automated execution.`}
          />

          <div className="grid-3 product-feats-grid">
            {product.features.map((feat, idx) => (
              <div key={idx} className="glass-card product-feat-card">
                <div className="feat-icon-box">
                  <ProductIcon size={22} />
                </div>
                <h3 className="feat-card-title">{feat.title}</h3>
                <p className="feat-card-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection & Operational Workflow */}
      <section className="section-py" id="workflow">
        <div className="container">
          <SectionHeader
            badge="OPERATIONAL LIFECYCLE"
            title="How It Works:"
            highlightText={`${product.name} Workflow`}
            subtitle="From raw event capture to automated intelligence and containment."
          />

          <div className="product-workflow-grid">
            {product.workflow.map((wf) => (
              <div key={wf.step} className="glass-card product-workflow-card">
                <div className="wf-badge-step">STEP {wf.step}</div>
                <h4 className="wf-card-title">{wf.title}</h4>
                <p className="wf-card-desc">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Use Cases */}
      <section className="section-py cyber-grid-subtle" id="usecases">
        <div className="container">
          <SectionHeader
            badge="ENTERPRISE SCENARIOS"
            title={`Mission-Critical`}
            highlightText="Enterprise Use Cases"
            subtitle={`How global organizations deploy ${product.name} to neutralize advanced adversary threats.`}
          />

          <div className="grid-3 product-usecases-grid">
            {product.useCases.map((uc, idx) => (
              <div key={idx} className="glass-card product-uc-card">
                <div className="uc-icon-wrap">
                  <CheckCircle2 size={20} className="text-orange" />
                </div>
                <h4 className="uc-title">{uc.title}</h4>
                <p className="uc-desc">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Converged Platforms Navigation Strip */}
      <section className="section-py product-suite-nav-section">
        <div className="container text-center">
          <SectionHeader
            badge="CONVERGED SECURITY SUITE"
            title="Explore Other NetCradus"
            highlightText="Platform Pillars"
            subtitle="Part of our unified Single Agent, Single Console Autonomous Cyber Defense Architecture."
          />

          <div className="product-quick-nav-pills">
            {Object.values(productsDetailMap)
              .filter(p => p.id !== product.id)
              .map((p) => {
                const NavIcon = productIcons[p.id] || Shield;
                return (
                  <Link key={p.id} to={`/products/${p.id}`} className="glass-card quick-nav-pill">
                    <NavIcon size={18} className="pill-nav-icon" />
                    <span>{p.name}</span>
                    <ArrowRight size={14} className="pill-nav-arrow" />
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Deploy ${product.name} in Your`}
        highlightText="Enterprise Environment"
        subtitle={`Schedule a dedicated technical demonstration of ${product.name} with our principal cybersecurity architects.`}
      />
    </div>
  );
}
