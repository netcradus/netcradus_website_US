import React, { useState, useEffect } from 'react';
import { Terminal, Activity } from 'lucide-react';
import './CyberTerminal.css';

const logsData = [
  { time: '13:24:01', type: 'INFO', msg: 'ACIS Core Engine initialized across 7 security tiers.' },
  { time: '13:24:08', type: 'WARN', msg: 'Anomalous egress detected on subnet perimeter 10.14.82.0/24' },
  { time: '13:24:09', type: 'ALERT', msg: 'Zero-Day Prompt Injection vector identified on LLM Gateway.' },
  { time: '13:24:10', type: 'ACTION', msg: 'Autonomous SOAR Playbook triggered: Host isolated in sub-second SLA.' },
  { time: '13:24:12', type: 'SUCCESS', msg: 'Credential token revoked & threat signature neutralized.' },
  { time: '13:24:15', type: 'STATUS', msg: '24/7 SOC Telemetry stream synchronized. Status: 100% SECURE.' }
];

export default function CyberTerminal() {
  const [activeLogs, setActiveLogs] = useState(logsData.slice(0, 3));
  const status = 'ACTIVE DEFENSE';

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogs(prev => {
        const nextIdx = (prev.length) % logsData.length;
        const newLogs = [...prev, logsData[nextIdx]];
        if (newLogs.length > 5) newLogs.shift();
        return newLogs;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cyber-terminal-container glass-panel">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-title">
          <Terminal size={14} className="terminal-icon" />
          <span>ACIS://live-immune-telemetry.netcradus.com</span>
        </div>
        <div className="terminal-badge">
          <Activity size={12} className="pulse-icon" />
          <span>{status}</span>
        </div>
      </div>

      <div className="terminal-body">
        <div className="terminal-telemetry-banner">
          <div className="banner-item">
            <span className="banner-label">CORRELATION</span>
            <span className="banner-value">Sub-Second AI SIEM</span>
          </div>
          <div className="banner-item">
            <span className="banner-label">CONTAINMENT SLA</span>
            <span className="banner-value highlight">&lt; 15 Mins SLA</span>
          </div>
          <div className="banner-item">
            <span className="banner-label">ZERO TRUST</span>
            <span className="banner-value green">ENFORCED</span>
          </div>
        </div>

        <div className="terminal-code-stream">
          {activeLogs.map((log, index) => (
            <div key={index} className={`log-line ${log.type.toLowerCase()}`}>
              <span className="log-time">[{log.time}]</span>
              <span className={`log-badge ${log.type.toLowerCase()}`}>{log.type}</span>
              <span className="log-msg">{log.msg}</span>
            </div>
          ))}
          <div className="terminal-cursor-line">
            <span className="prompt-symbol">&gt;</span>
            <span className="typing-stream">Monitoring endpoint telemetry across enterprise nodes...</span>
            <span className="cursor-blink" />
          </div>
        </div>
      </div>
    </div>
  );
}
