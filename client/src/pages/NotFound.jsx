import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';
import Button from '../components/common/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="page-notfound cyber-grid-bg">
      <div className="container text-center">
        <div className="notfound-card glass-panel">
          <ShieldAlert size={64} className="notfound-icon" />
          <h1 className="notfound-code text-gradient-cyan">404</h1>
          <h2 className="notfound-title">Target Node Not Found</h2>
          <p className="notfound-desc">
            The security path or resource you are attempting to access does not exist on this network layer or has been isolated by the ACIS defense grid.
          </p>
          <div className="notfound-actions">
            <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Return to Safe Perimeter (Home)
            </Button>
            <Button to="/services" variant="secondary" size="md">
              View Services Catalogue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
