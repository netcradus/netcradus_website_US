import React from 'react';
import './SectionHeader.css';

export default function SectionHeader({
  badge,
  badgeVariant = 'cyan', // 'cyan', 'purple', 'green'
  title,
  highlightText,
  subtitle,
  centered = true,
  className = '',
  light = false
}) {
  return (
    <div className={`section-header-wrapper ${centered ? 'text-center' : ''} ${light ? 'light-mode' : ''} ${className}`}>
      {badge && (
        <div className="section-badge-container">
          <span className={`cyber-badge ${badgeVariant === 'purple' ? 'purple' : badgeVariant === 'green' ? 'green' : ''}`}>
            <span className="badge-dot" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="section-main-title">
        {title}{' '}
        {highlightText && (
          <span className={badgeVariant === 'purple' ? 'text-gradient-purple' : 'text-gradient-cyan'}>
            {highlightText}
          </span>
        )}
      </h2>
      {subtitle && <p className="section-sub-desc">{subtitle}</p>}
    </div>
  );
}
