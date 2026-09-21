import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Activity, 
  Cloud, 
  Cpu, 
  Network, 
  Crosshair, 
  KeyRound, 
  HeartPulse, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  ShieldCheck,
  Activity,
  Cloud,
  Cpu,
  Network,
  Crosshair,
  KeyRound,
  HeartPulse
};

export default function ServiceCard({ service, onSelect }) {
  const IconComponent = iconMap[service.icon] || ShieldCheck;

  return (
    <div className={`cyber-service-card glass-card accent-${service.accent || 'cyan'}`}>
      <div className="service-card-glow" />
      
      <div className="service-card-top">
        <div className={`service-icon-box ${service.accent || 'cyan'}`}>
          <IconComponent size={26} />
        </div>
        <span className="service-tag-badge">{service.tag}</span>
      </div>

      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDescription}</p>

      {service.capabilities && (
        <ul className="service-capabilities-list">
          {service.capabilities.slice(0, 3).map((cap, index) => (
            <li key={index} className="capability-item">
              <CheckCircle size={14} className="cap-icon" />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="service-card-footer">
        <div className="service-sla-badge">
          <span className="sla-dot" />
          <span>{service.sla}</span>
        </div>
        <Link to={`/services#${service.id}`} className="service-learn-more">
          <span>Explore Capabilities</span>
          <ArrowRight size={15} className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
}
