import React from 'react';
import { ArrowRight, ShieldCheck, Play, Lock, Activity } from 'lucide-react';
import Button from '../common/Button';
import CyberTerminal from '../Interactive/CyberTerminal';
import ThreatRadar from '../Interactive/ThreatRadar';
import StatsCounter from '../common/StatsCounter';
import { companyInfo } from '../../data/companyInfo';
import './Hero.css';

export default function Hero() {
  return (
    <section className="cyber-hero-section cyber-grid-bg">
      <div className="hero-glow-sphere" />
      <div className="hero-purple-sphere" />

      <div className="container">
        <div className="hero-content-grid">
          {/* Left Column: Messaging & CTAs */}
          <div className="hero-text-col">
            <div className="hero-badge-container">
              <span className="cyber-badge">
                <span className="badge-dot" />
                AUTONOMOUS CYBER IMMUNE SYSTEM
              </span>
            </div>

            <h1 className="hero-headline">
              Intelligent • Adaptive • <br />
              <span className="text-gradient-cyan">Autonomous Cyber Defense</span>
            </h1>

            <p className="hero-supporting-text">
              {companyInfo.description}
            </p>

            <div className="hero-cta-group">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Request Security Assessment
              </Button>
              <Button to="/products#acis" variant="secondary" size="lg" icon={ShieldCheck} iconPosition="left">
                Explore ACIS Platform
              </Button>
            </div>

            <div className="hero-trust-indicators">
              <div className="trust-indicator-item">
                <span className="trust-check-icon">✓</span>
                <span>Sub-15m Rapid Incident Containment</span>
              </div>
              <div className="trust-indicator-item">
                <span className="trust-check-icon">✓</span>
                <span>24/7/365 Dedicated SOC & SIEM</span>
              </div>
              <div className="trust-indicator-item">
                <span className="trust-check-icon">✓</span>
                <span>Zero-Trust Micro-Segmentation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Cyber Telemetry Visual */}
          <div className="hero-visual-col">
            <div className="hero-visual-stack">
              <CyberTerminal />
            </div>
          </div>
        </div>

        {/* Hero Bottom Stats Counter */}
        <div className="hero-stats-wrapper">
          <StatsCounter stats={companyInfo.stats} />
        </div>
      </div>
    </section>
  );
}
