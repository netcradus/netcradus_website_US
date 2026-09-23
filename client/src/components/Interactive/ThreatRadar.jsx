import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Cpu, Database, Server, Brain, Zap, CheckCircle2 } from 'lucide-react';
import './ThreatRadar.css';

const NODES_DATA = [
  {
    id: 'siem',
    label: 'AI-SIEM',
    icon: Cpu,
    role: 'Event Telemetry & Anomaly Analysis',
    status: 'ACTIVE',
    metric: '100k+ eps',
    color: '#FF9D2E',
    x: 24,
    y: 20
  },
  {
    id: 'xdr',
    label: 'Cyrix XDR',
    icon: Server,
    role: 'Endpoint & Network Neutralization',
    status: 'OPTIMAL',
    metric: '< 14ms response',
    color: '#FF7900',
    x: 78,
    y: 22
  },
  {
    id: 'zt',
    label: 'Zero Trust',
    icon: Lock,
    role: 'Continuous Identity & Host Quarantine',
    status: 'ENFORCING',
    metric: '100% Verified',
    color: '#34D399',
    x: 18,
    y: 72
  },
  {
    id: 'soc',
    label: '24/7 Autonomous SOC',
    icon: Eye,
    role: 'Agentic Threat Hunting & Response',
    status: 'MONITORING',
    metric: '0.00s Dwell Time',
    color: '#38BDF8',
    x: 82,
    y: 70
  },
  {
    id: 'cloud',
    label: 'Cloud Shield',
    icon: Database,
    role: 'Multi-Cloud Workload Protection',
    status: 'SHIELDED',
    metric: 'Multi-Region Sync',
    color: '#F59E0B',
    x: 88,
    y: 46
  },
  {
    id: 'ueba',
    label: 'Neural UEBA',
    icon: Brain,
    role: 'Behavioral Anomaly & Insider Defense',
    status: 'LEARNING',
    metric: '99.98% Precision',
    color: '#A78BFA',
    x: 12,
    y: 46
  }
];

const THREAT_LOGS = [
  { threat: 'Ransomware strain #C-893', action: 'Isolated Host & Revoked Tokens', time: '1.2ms' },
  { threat: 'Zero-day SQL Injection API payload', action: 'Payload Neutralized at Edge', time: '0.8ms' },
  { threat: 'Anomalous Admin Credential Spike', action: 'MFA Enforced & Session Frozen', time: '2.1ms' },
  { threat: 'Lateral SMB Movement Probe', action: 'Micro-segmentation Locked', time: '1.4ms' }
];

export default function ThreatRadar() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [threatIndex, setThreatIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setThreatIndex((prev) => (prev + 1) % THREAT_LOGS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const activeThreat = THREAT_LOGS[threatIndex];

  return (
    <div className="threat-radar-wrapper">
      {/* Top Live Threat Neutralization Banner */}
      <div className="radar-threat-ticker">
        <div className="ticker-badge">
          <Zap size={13} className="ticker-zap-icon" />
          <span>LIVE AUTO-DEFENSE</span>
        </div>
        <div className="ticker-content" key={threatIndex}>
          <span className="ticker-threat">{activeThreat.threat}</span>
          <span className="ticker-arrow">→</span>
          <span className="ticker-action">{activeThreat.action}</span>
          <span className="ticker-time">({activeThreat.time})</span>
        </div>
      </div>

      {/* Main Radar Sphere */}
      <div className="radar-disk">
        {/* Radar HUD Grids & Rings */}
        <div className="radar-circle circle-1" />
        <div className="radar-circle circle-2" />
        <div className="radar-circle circle-3" />
        <div className="radar-circle circle-4" />
        <div className="radar-axis-x" />
        <div className="radar-axis-y" />
        <div className="radar-axis-diag-1" />
        <div className="radar-axis-diag-2" />

        {/* HUD Degree Marks */}
        <span className="radar-degree deg-0">000°</span>
        <span className="radar-degree deg-90">090°</span>
        <span className="radar-degree deg-180">180°</span>
        <span className="radar-degree deg-270">270°</span>

        {/* Rotating Multi-Layer Radar Scanner */}
        <div className="radar-scanner animate-radar" />
        <div className="radar-scanner-secondary animate-radar-reverse" />
        <div className="radar-pulse-ring" />

        {/* SVG Circuit Lines connecting Center to Nodes */}
        <svg className="radar-circuits-svg" viewBox="0 0 100 100">
          {NODES_DATA.map((node) => {
            const isSelected = selectedNode?.id === node.id;
            return (
              <g key={node.id}>
                <line
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  className={`circuit-line ${isSelected ? 'circuit-line-active' : ''}`}
                  stroke={node.color}
                />
                <circle
                  cx={(50 + node.x) / 2}
                  cy={(50 + node.y) / 2}
                  r="0.8"
                  className="circuit-pulse"
                  fill={node.color}
                />
              </g>
            );
          })}
        </svg>

        {/* Central ACIS Immune Core */}
        <div 
          className="radar-center-node animate-pulse-glow"
          onClick={() => setSelectedNode(null)}
          title="ACIS Autonomous Core"
        >
          <div className="radar-core-glow-ring" />
          <div className="radar-core-inner">
            <Shield size={26} className="radar-core-icon" />
            <span className="radar-core-label">ACIS CORE</span>
            <span className="radar-core-sub">IMMUNE HUB</span>
          </div>
        </div>

        {/* Orbiting Security Nodes */}
        {NODES_DATA.map((node) => {
          const NodeIcon = node.icon;
          const isSelected = selectedNode?.id === node.id;

          return (
            <div
              key={node.id}
              className={`radar-node node-${node.id} ${isSelected ? 'node-active' : ''}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setSelectedNode(node)}
              onMouseLeave={() => setSelectedNode(null)}
              onClick={() => setSelectedNode(node)}
            >
              <div className="node-glow-halo" style={{ background: node.color }} />
              <NodeIcon size={16} style={{ color: node.color }} />
              <span className="node-badge-label">{node.label}</span>

              {/* Tactical Detail Tooltip */}
              <div className={`node-tooltip-card ${isSelected ? 'show' : ''}`}>
                <div className="tooltip-header" style={{ color: node.color }}>
                  <NodeIcon size={14} />
                  <span>{node.label}</span>
                  <span className="tooltip-status-tag">{node.status}</span>
                </div>
                <p className="tooltip-role">{node.role}</p>
                <div className="tooltip-metric">
                  <span>METRIC:</span> <strong>{node.metric}</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cyber Immune Telemetry Status Bar */}
      <div className="radar-status-bar">
        <div className="status-indicator">
          <span className="status-pulse" />
          <span className="status-title">CYBER IMMUNE SYSTEM: 100% AUTONOMOUS</span>
        </div>
        <div className="status-right-metrics">
          <span className="radar-telemetry">LATENCY: <strong>1.1ms</strong></span>
          <span className="radar-divider">|</span>
          <span className="radar-rate"><CheckCircle2 size={11} style={{ color: '#34D399', verticalAlign: 'middle', marginRight: 3 }} />99.998% DEFENSE</span>
        </div>
      </div>
    </div>
  );
}
