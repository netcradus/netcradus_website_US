import React from 'react';
import vastraalaneImg from '../../assets/images/clients/vastraalane.png';
import oouraaImg from '../../assets/images/clients/oouraa.png';
import cyberhaxsImg from '../../assets/images/clients/cyberhaxs.png';
import onlinePantryImg from '../../assets/images/clients/online-pantry.png';

const logoMap = {
  'vastraalane': {
    src: vastraalaneImg,
    alt: 'Vastraalane Logo',
    bg: '#FFFFFF',
    padding: '3px 8px'
  },
  'oouraa': {
    src: oouraaImg,
    alt: 'OOURAA Logo',
    bg: '#000000',
    padding: '4px 10px'
  },
  'cyberhaxs': {
    src: cyberhaxsImg,
    alt: 'CyberHaxs Logo',
    bg: '#FFFFFF',
    padding: '4px 10px'
  },
  'online-pantry': {
    src: onlinePantryImg,
    alt: 'Online Pantry Logo',
    bg: '#FFFFFF',
    padding: '3px 8px'
  }
};

export default function ClientLogo({ logoKey, company, className = '' }) {
  const item = logoMap[logoKey];

  if (item && item.src) {
    return (
      <div 
        className={`client-logo-wrapper ${className}`} 
        style={{ 
          backgroundColor: item.bg,
          padding: item.padding
        }}
      >
        <img 
          src={item.src} 
          alt={item.alt || `${company} Logo`} 
          className="client-logo-img"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="client-logo-fallback">
      <strong>{company}</strong>
    </div>
  );
}
