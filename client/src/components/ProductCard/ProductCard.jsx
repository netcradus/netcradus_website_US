import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, ArrowRight, Check, Layers, Activity } from 'lucide-react';
import Button from '../common/Button';
import './ProductCard.css';

export default function ProductCard({ product, featured = false }) {
  return (
    <div className={`cyber-product-card glass-panel ${featured ? 'product-featured' : ''}`}>
      {featured && <div className="featured-banner-tag">FLAGSHIP ARCHITECTURE</div>}
      
      <div className="product-card-header">
        <div className="product-badge-row">
          <span className="cyber-badge purple">
            <span className="badge-dot" />
            {product.badge}
          </span>
          {product.stats && product.stats.detectionSpeed && (
            <span className="speed-pill">
              <Activity size={12} className="pulse-icon" />
              <span>Speed: {product.stats.detectionSpeed}</span>
            </span>
          )}
        </div>

        <h3 className="product-name-title">{product.name}</h3>
        <span className="product-fullname">{product.fullName}</span>
        <p className="product-tagline-text">{product.tagline}</p>
      </div>

      <div className="product-card-body">
        <p className="product-desc-text">{product.description}</p>

        {product.features && (
          <div className="product-features-grid">
            {product.features.map((feat, idx) => (
              <div key={idx} className="product-feat-box">
                <div className="feat-title-row">
                  <Check size={14} className="feat-check" />
                  <strong>{feat.title}</strong>
                </div>
                <p className="feat-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        )}

        {product.tiers && (
          <div className="product-tiers-row">
            <span className="tiers-label">Deployment Editions:</span>
            <div className="tiers-tags">
              {product.tiers.map((tier, idx) => (
                <span key={idx} className="tier-tag">{tier}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="product-card-footer">
        <Button to={`/products#${product.id}`} variant={featured ? 'primary' : 'secondary'} size="md" icon={ArrowRight}>
          Explore {product.name} Architecture
        </Button>
      </div>
    </div>
  );
}
