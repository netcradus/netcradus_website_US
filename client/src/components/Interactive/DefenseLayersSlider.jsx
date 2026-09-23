import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Pause, 
  Play, 
  Bot,
  ShieldCheck
} from 'lucide-react';
import { acisDefenseLayers } from '../../data/productsData';
import CyberRobot from './CyberRobot';
import './DefenseLayersSlider.css';

const LAYER_TITLES_SHORT = [
  '01 SIEM & Log Explorer',
  '02 Correlation & Threat Intel',
  '03 SOAR Playbooks',
  '04 Red Team Emulation',
  '05 File & Supply Chain Security'
];

export default function DefenseLayersSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [robotPose, setRobotPose] = useState('presenting'); // 'idle' | 'pointing' | 'preparing_push' | 'pushing' | 'presenting'
  const [cardPhase, setCardPhase] = useState('active'); // 'entering' | 'active' | 'exiting'
  const [isPaused, setIsPaused] = useState(false);
  const [statusText, setStatusText] = useState('ANALYZING DEFENSE LAYER 01...');
  const [isScanning, setIsScanning] = useState(true);

  const totalLayers = acisDefenseLayers.length;
  const isPausedRef = useRef(isPaused);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  }, []);

  const addTimeout = useCallback((fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  // Automated Synchronized Presentation Cycle
  const runSlideCycle = useCallback(() => {
    clearAllTimeouts();

    if (isPausedRef.current) return;

    const layerNum = String(activeIdx + 1).padStart(2, '0');
    const layerName = acisDefenseLayers[activeIdx].title.split('—')[0].trim();

    // Step 1 (0.0s): Card Enters from right, Laser Scan starts, Robot Welcomes
    setCardPhase('entering');
    setRobotPose('presenting');
    setIsScanning(true);
    setStatusText(`ANALYZING DEFENSE LAYER ${layerNum}...`);

    // Step 2 (0.75s): Card Settles in center, Scan Completes, Robot Points Laser at Title
    addTimeout(() => {
      if (isPausedRef.current) return;
      setCardPhase('active');
      setRobotPose('pointing');
      setIsScanning(false);
      setStatusText(`PRESENTING: ${layerName.toUpperCase()}`);
    }, 750);

    // Step 3 (1.8s): Robot Enters Attentive Floating Idle (User reads content)
    addTimeout(() => {
      if (isPausedRef.current) return;
      setRobotPose('idle');
      setStatusText(`DEFENSE MATRIX ${layerNum}: FULLY ACTIVE`);
    }, 1800);

    // Step 4 (4.7s): Robot Prepares Arm & Charges Plasma Palm
    addTimeout(() => {
      if (isPausedRef.current) return;
      setRobotPose('preparing_push');
      setStatusText(`PREPARING NEXT DEFENSE LAYER...`);
    }, 4700);

    // Step 5 (5.3s): Robot Performs Kinetic Thrust Forward! Push Wave Fires! Card Slides Away
    addTimeout(() => {
      if (isPausedRef.current) return;
      setRobotPose('pushing');
      setCardPhase('exiting');
      setStatusText(`SHIFTING DEFENSE LAYER →`);
    }, 5300);

    // Step 6 (5.9s): Next Slide Transitions
    addTimeout(() => {
      if (isPausedRef.current) return;
      setActiveIdx((prev) => (prev + 1) % totalLayers);
    }, 5900);
  }, [activeIdx, totalLayers, addTimeout, clearAllTimeouts]);

  // Trigger cycle whenever activeIdx changes (and not paused)
  useEffect(() => {
    if (!isPaused) {
      runSlideCycle();
    } else {
      clearAllTimeouts();
    }

    return () => clearAllTimeouts();
  }, [activeIdx, isPaused, runSlideCycle, clearAllTimeouts]);

  // Jump to specific layer via tab dot
  const handleDotClick = (idx) => {
    if (idx === activeIdx) return;
    clearAllTimeouts();
    setActiveIdx(idx);
  };

  // Pause on desktop hover or mobile tap
  const handleMouseEnter = () => {
    clearAllTimeouts();
    setIsPaused(true);
    setRobotPose('idle');
    setStatusText('PRESENTATION PAUSED (READING MODE)');
  };
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchToggle = () => {
    setIsPaused((prev) => {
      const next = !prev;
      if (next) {
        clearAllTimeouts();
        setRobotPose('idle');
        setStatusText('PRESENTATION PAUSED (READING MODE)');
      }
      return next;
    });
  };

  const activeLayer = acisDefenseLayers[activeIdx];

  return (
    <div 
      className={`defense-presentation-container ${isPaused ? 'presentation-paused' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="ACIS 5 Core Defense Layers Automated Presentation"
    >
      {/* Top Header Controls / Telemetry */}
      <div className="defense-presentation-topbar">
        <div className="topbar-left">
          <div className="presentation-badge">
            <Bot size={15} className="bot-icon" />
            <span className="badge-text">AUTONOMOUS CYBER AI AGENT</span>
          </div>
          <div className="layer-counter-pill">
            <Layers size={13} />
            <span className="counter-curr">{String(activeIdx + 1).padStart(2, '0')}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{String(totalLayers).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Live Hover/Tap Status */}
        <div className="topbar-right">
          <button 
            type="button" 
            className="pause-toggle-btn" 
            onClick={handleTouchToggle}
            aria-label={isPaused ? "Resume Presentation" : "Pause Presentation"}
          >
            {isPaused ? <Play size={13} /> : <Pause size={13} />}
            <span>{isPaused ? 'RESUME PLAY' : 'HOVER/TAP TO PAUSE'}</span>
          </button>
        </div>
      </div>

      {/* Main Presentation Stage: Robot Presenter + Active Card */}
      <div className="defense-stage-layout" onClick={handleTouchToggle}>
        {/* Futuristic Cyber Robot Presenter */}
        <div className="stage-robot-slot">
          <CyberRobot 
            pose={robotPose} 
            isPaused={isPaused} 
            activeIdx={activeIdx}
            statusText={statusText}
          />
        </div>

        {/* Card Stage with Dynamic Motion Transition & Staggered Content */}
        <div className="stage-card-viewport">
          <div 
            className={`defense-stage-card card-phase-${cardPhase} layer-${activeLayer.accent}`}
            key={activeLayer.num}
          >
            {/* Subtle Cybersecurity Circuit Grid Background */}
            <div className="stage-card-cyber-grid" />

            {/* Top Laser Accent Sweep */}
            <div className="stage-card-laser-line" />

            {/* 700ms Top-to-Bottom Cyber Laser Scan Sweep */}
            {isScanning && <div className="card-scanner-beam" />}

            {/* Staggered Element 1: Card Header Top */}
            <div className="layer-card-top stagger-1">
              <div className="layer-num-box">
                <span className="layer-num-text">{activeLayer.num}</span>
              </div>

              <div className="layer-title-group">
                <span className="layer-badge-tag">{activeLayer.badge}</span>
                <h3 className="layer-main-title">{activeLayer.title}</h3>
                <span className="layer-sub-tagline">{activeLayer.tagline}</span>
              </div>

              <div className="layer-stat-badge">
                <Sparkles size={15} className="text-orange" />
                <span>{activeLayer.metrics}</span>
              </div>
            </div>

            {/* Staggered Element 2: Description */}
            <p className="layer-description-text stagger-2">{activeLayer.description}</p>

            {/* Staggered Element 3: 2-Column Feature List */}
            <div className="layer-feats-grid stagger-3">
              {activeLayer.features.map((feat, fIdx) => (
                <div key={fIdx} className="layer-feat-item">
                  <CheckCircle2 size={16} className="feat-check-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Staggered Element 4: Card Footer */}
            <div className="layer-card-footer stagger-4">
              <div className="layer-active-indicator">
                <ShieldCheck size={14} className="shield-active-icon" />
                <span>DEFENSE MATRIX: LIVE MONITORING</span>
              </div>
              <div className="layer-interactive-pill">
                <span>{isPaused ? '⏸️ PAUSED (READING MODE)' : '🤖 LIVE AUTONOMOUS PRESENTATION'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Connected Bottom Progress Bar */}
      <div className="defense-presentation-footer">
        <div className="connected-progress-track">
          <div 
            className="connected-progress-bar"
            style={{ width: `${((activeIdx + 1) / totalLayers) * 100}%` }}
          />
        </div>

        {/* 5 Layer Indicators with Active Orange Pulse */}
        <div className="presentation-dots-group" role="tablist">
          {acisDefenseLayers.map((layer, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={layer.num}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Jump to Layer ${layer.num}: ${layer.title}`}
                className={`presentation-dot-pill ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDotClick(idx);
                }}
              >
                <span className="pill-dot-indicator" />
                <span className="pill-dot-title">{LAYER_TITLES_SHORT[idx]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
