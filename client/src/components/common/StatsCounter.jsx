import React from 'react';
import './StatsCounter.css';

export default function StatsCounter({ stats = [] }) {
  return (
    <div className="stats-counter-grid">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-card glass-card">
          <div className="stat-glow-effect" />
          <div className="stat-value text-gradient-cyan">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
          {stat.detail && <div className="stat-detail">{stat.detail}</div>}
        </div>
      ))}
    </div>
  );
}
