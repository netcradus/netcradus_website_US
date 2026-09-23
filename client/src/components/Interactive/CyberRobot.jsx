import React from 'react';
import './CyberRobot.css';

const LAYER_HOLOGRAMS = [
  { tag: 'LAYER 01 ONLINE', sub: 'SIEM ML INGESTION', status: 'MONITORING 100k+ EPS' },
  { tag: 'LAYER 02 READY', sub: 'AUTONOMOUS SOAR', status: 'CONTAINMENT < 14ms' },
  { tag: 'LAYER 03 ACTIVE', sub: 'RED TEAM ADVERSARY', status: '200+ MITRE TTPs' },
  { tag: 'LAYER 04 SYNCED', sub: 'THREAT INTEL SWARM', status: 'GLOBAL COLLECTIVE' },
  { tag: 'LAYER 05 ARMED', sub: 'SELF-HEALING DECEPTION', status: 'ZERO DOWNTIME' }
];

export default function CyberRobot({ 
  pose = 'idle', 
  isPaused = false, 
  activeIdx = 0,
  statusText = 'ACIS AI ONLINE'
}) {
  const currentHolo = LAYER_HOLOGRAMS[activeIdx] || LAYER_HOLOGRAMS[0];

  return (
    <div className={`cyber-robot-wrapper pose-${pose} ${isPaused ? 'is-paused' : ''}`}>
      {/* Holographic Speech / Telemetry Bubble */}
      <div className="robot-holo-bubble">
        <div className="holo-bracket top-left" />
        <div className="holo-bracket top-right" />
        <div className="holo-bracket bottom-left" />
        <div className="holo-bracket bottom-right" />
        <div className="holo-header">
          <span className="holo-dot" />
          <span className="holo-tag">{currentHolo.tag}</span>
        </div>
        <div className="holo-sub">{currentHolo.sub}</div>
        <div className="holo-meta">{currentHolo.status}</div>
        <div className="holo-projector-line" />
      </div>

      {/* Dynamic Terminal Status Pill */}
      <div className="robot-status-tag">
        <span className="robot-status-dot" />
        <span className="robot-status-text">{statusText}</span>
      </div>

      {/* Main Robot Figure */}
      <div className="robot-figure">
        {/* Soft Ambient Thruster Light / Ground Energy */}
        <div className="robot-ground-light" />
        
        {/* Thruster Jet Beam */}
        <div className="robot-thruster-energy">
          <div className="thrust-beam" />
        </div>

        {/* High-Resolution Vector Robot SVG */}
        <svg 
          className="robot-svg" 
          viewBox="0 0 190 230" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="robotDarkArmor" x1="0" y1="0" x2="190" y2="230" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#222838" />
              <stop offset="45%" stopColor="#141722" />
              <stop offset="100%" stopColor="#0B0D13" />
            </linearGradient>

            <linearGradient id="robotChestPlate" x1="50" y1="30" x2="140" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#333F54" />
              <stop offset="60%" stopColor="#1E2638" />
              <stop offset="100%" stopColor="#111622" />
            </linearGradient>

            <linearGradient id="robotOrangeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF7900" />
              <stop offset="100%" stopColor="#FFB347" />
            </linearGradient>

            <linearGradient id="robotCyanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            <filter id="robotOrangeGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="robotCyanGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating Shadow */}
          <ellipse cx="95" cy="222" rx="42" ry="6" fill="#FF7900" opacity="0.18" filter="url(#robotOrangeGlowFilter)" />

          {/* === MAIN BODY / TORSO === */}
          <g className="robot-body-group">
            {/* Thruster Housing Ring */}
            <path d="M72 176 Q95 188 118 176 L112 196 Q95 204 78 196 Z" fill="url(#robotDarkArmor)" stroke="#FF7900" strokeWidth="1.4" />
            
            {/* Torso Chassis Base */}
            <path 
              d="M62 108 Q95 98 128 108 L134 166 Q95 180 56 166 Z" 
              fill="url(#robotDarkArmor)" 
              stroke="#2A3447" 
              strokeWidth="1.6" 
            />
            
            {/* Chest Shield Plate */}
            <path 
              d="M68 114 Q95 106 122 114 L126 154 Q95 166 64 154 Z" 
              fill="url(#robotChestPlate)" 
              stroke="#404E6B" 
              strokeWidth="1.2" 
            />

            {/* Central ACIS Core Reactor */}
            <circle cx="95" cy="136" r="12" fill="#080A0E" stroke="#FF7900" strokeWidth="1.6" />
            <circle cx="95" cy="136" r="7.5" fill="url(#robotOrangeGrad)" filter="url(#robotOrangeGlowFilter)" className="robot-core-pulse" />
            <path d="M90 136 L100 136 M95 131 L95 141" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />

            {/* Telemetry Accent Lines */}
            <path d="M74 124 L84 124" stroke="#38BDF8" strokeWidth="1.2" filter="url(#robotCyanGlowFilter)" />
            <path d="M106 124 L116 124" stroke="#38BDF8" strokeWidth="1.2" filter="url(#robotCyanGlowFilter)" />
            <path d="M76 148 L84 148" stroke="#FF7900" strokeWidth="1" />
            <path d="M106 148 L114 148" stroke="#FF7900" strokeWidth="1" />
          </g>

          {/* === LEFT STABILIZER ARM === */}
          <g className="robot-arm-left">
            <circle cx="58" cy="114" r="7" fill="url(#robotChestPlate)" stroke="#2A3447" strokeWidth="1.2" />
            <path d="M56 120 L44 146 Q38 160 46 170" stroke="url(#robotDarkArmor)" strokeWidth="9" strokeLinecap="round" />
            <circle cx="44" cy="170" r="5" fill="#141722" stroke="#FF7900" strokeWidth="1.2" />
          </g>

          {/* === RIGHT ACTIVE PRESENTER & PUSHING ARM === */}
          <g className="robot-arm-right">
            {/* Shoulder Joint */}
            <circle cx="132" cy="114" r="8" fill="url(#robotChestPlate)" stroke="#FF7900" strokeWidth="1.4" />
            
            {/* Articulated Limb Group */}
            <g className="arm-limb-group">
              {/* Upper Arm */}
              <path 
                className="arm-segment-1" 
                d="M132 116 L150 138" 
                stroke="url(#robotDarkArmor)" 
                strokeWidth="10" 
                strokeLinecap="round" 
              />
              {/* Elbow Node */}
              <circle cx="150" cy="138" r="6" fill="#0B0D13" stroke="#38BDF8" strokeWidth="1.2" />
              
              {/* Forearm */}
              <path 
                className="arm-segment-2" 
                d="M150 138 L172 130" 
                stroke="url(#robotDarkArmor)" 
                strokeWidth="8.5" 
                strokeLinecap="round" 
              />
              
              {/* Hand with Kinetic Plasma Emitter */}
              <g className="robot-hand">
                <circle cx="174" cy="129" r="6.5" fill="#080A0E" stroke="#FF7900" strokeWidth="1.8" />
                <circle cx="174" cy="129" r="3.8" fill="#FFB347" filter="url(#robotOrangeGlowFilter)" className="palm-emitter-glow" />
                
                {/* Articulated Micro Claws */}
                <path d="M176 124 L184 121" stroke="#FFB347" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M178 129 L186 129" stroke="#FFB347" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M176 134 L184 137" stroke="#FFB347" strokeWidth="1.8" strokeLinecap="round" />
              </g>

              {/* Kinetic Push Energy Blast Wave */}
              <g className="push-energy-wave">
                <path d="M184 112 Q196 129 184 146" stroke="#FF7900" strokeWidth="3" strokeLinecap="round" filter="url(#robotOrangeGlowFilter)" />
                <path d="M190 106 Q204 129 190 152" stroke="#FFB347" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              </g>

              {/* Holographic Pointer Beam */}
              <g className="pointer-laser-beam">
                <line x1="184" y1="129" x2="230" y2="129" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 3" filter="url(#robotCyanGlowFilter)" />
                <circle cx="230" cy="129" r="3.5" fill="#38BDF8" filter="url(#robotCyanGlowFilter)" />
              </g>
            </g>
          </g>

          {/* === ROBOT HEAD & HELMET === */}
          <g className="robot-head-group">
            {/* Neck Pillar */}
            <rect x="88" y="90" width="14" height="10" rx="2" fill="#141722" stroke="#2A3447" strokeWidth="1.2" />
            
            {/* Head Helmet Shell */}
            <path 
              d="M60 54 Q95 38 130 54 L134 86 Q95 98 56 86 Z" 
              fill="url(#robotDarkArmor)" 
              stroke="#2A3447" 
              strokeWidth="1.8" 
            />

            {/* Neural Antenna Sensor */}
            <line x1="95" y1="40" x2="95" y2="20" stroke="#4B5B75" strokeWidth="2.2" />
            <circle cx="95" cy="18" r="4" fill="#FF7900" filter="url(#robotOrangeGlowFilter)" className="antenna-beacon" />

            {/* Cyber Acoustic Ear Pods */}
            <rect x="50" y="58" width="7" height="18" rx="2.5" fill="#1E2638" stroke="#38BDF8" strokeWidth="1.2" />
            <rect x="133" y="58" width="7" height="18" rx="2.5" fill="#1E2638" stroke="#38BDF8" strokeWidth="1.2" />

            {/* Panoramic Cyber Visor Faceplate */}
            <path 
              d="M62 56 Q95 44 128 56 L124 80 Q95 90 66 80 Z" 
              fill="#05070B" 
              stroke="#FF7900" 
              strokeWidth="1.4" 
            />

            {/* Glowing Cyber Eyes (Visor Scanner) */}
            <g className="robot-eyes">
              <rect x="74" y="60" width="14" height="8" rx="2" fill="url(#robotOrangeGrad)" filter="url(#robotOrangeGlowFilter)" className="eye-left" />
              <rect x="102" y="60" width="14" height="8" rx="2" fill="url(#robotOrangeGrad)" filter="url(#robotOrangeGlowFilter)" className="eye-right" />
              <line x1="68" y1="74" x2="122" y2="74" stroke="#38BDF8" strokeWidth="0.9" opacity="0.75" />
            </g>
          </g>
        </svg>
      </div>

      {/* Floating Data Sparks & Laser Energy Bridge to Card */}
      <div className="robot-energy-bridge">
        <div className="energy-stream-line" />
        <span className="spark-particle sp-1" />
        <span className="spark-particle sp-2" />
        <span className="spark-particle sp-3" />
        <span className="spark-particle sp-4" />
      </div>
    </div>
  );
}
