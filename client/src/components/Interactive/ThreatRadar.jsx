import React from 'react';
import { Shield, Lock, Eye, Cpu, Database, Server } from 'lucide-react';
import './ThreatRadar.css';

export default function ThreatRadar() {
  return (
    <div className="threat-radar-wrapper">
      <div className="radar-disk">
        <div className="radar-circle circle-1" />
        <div className="radar-circle circle-2" />
        <div className="radar-circle circle-3" />
        <div className="radar-axis-x" />
        <div className="radar-axis-y" />
        
        {/* Rotating Radar Scanner */}
        <div className="radar-scanner animate-radar" />

        {/* Central ACIS Core */}
        <div className="radar-center-node animate-pulse-glow">
          <Shield size={28} className="radar-core-icon" />
          <span className="radar-core-label">ACIS CORE</span>
        </div>

        {/* Satellite Security Nodes */}
        <div className="radar-node node-1 animate-float">
          <Cpu size={16} />
          <span className="node-tooltip">AI-SIEM</span>
        </div>
        <div className="radar-node node-2 animate-float-delayed">
          <Server size={16} />
          <span className="node-tooltip">Cyrix XDR</span>
        </div>
        <div className="radar-node node-3 animate-float">
          <Lock size={16} />
          <span className="node-tooltip">Zero Trust</span>
        </div>
        <div className="radar-node node-4 animate-float-delayed">
          <Eye size={16} />
          <span className="node-tooltip">24/7 SOC</span>
        </div>
        <div className="radar-node node-5 animate-float">
          <Database size={16} />
          <span className="node-tooltip">Cloud Shield</span>
        </div>
      </div>

      <div className="radar-status-bar">
        <div className="status-indicator">
          <span className="status-pulse" />
          <span>CYBER IMMUNE SYSTEM: 100% OPERATIONAL</span>
        </div>
        <span className="radar-telemetry">LATENCY: 1.2ms</span>
      </div>
    </div>
  );
}
