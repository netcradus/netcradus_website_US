import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import StatsCounter from '../common/StatsCounter';
import { companyInfo } from '../../data/companyInfo';
import './Hero.css';

export default function Hero() {
  return (
    <section className="cyber-hero-section">
      {/* Background Video Layer */}
      <div className="hero-video-container" aria-hidden="true">
        <video
          className="hero-bg-video"
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div className="hero-orange-overlay" />
      </div>

      <div className="hero-glow-sphere" />

      <div className="container hero-container-content">
        <div className="hero-content-grid">
          {/* Messaging & CTAs */}
          <div className="hero-text-col">
            <h1 className="hero-headline">
              Intelligent • Adaptive • <br />
              <span className="hero-highlight-text">Autonomous Cyber Defense</span>
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

