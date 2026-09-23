import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Products from './pages/Products';
import Platform from './pages/Platform';
import NetCrad from './pages/NetCrad';
import ACIS from './pages/ACIS';
import CRM from './pages/CRM';
import NetXDR from './pages/NetXDR';
import ProductDetail from './pages/ProductDetail';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/index.css';
import './styles/animations.css';
import './styles/utilities.css';

// Scroll to top or hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/platform/endpoint-detection" element={<NetXDR />} />
            <Route path="/platform/xdr" element={<NetXDR />} />
            <Route path="/platform/:productId" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/solutions/:serviceId" element={<ServiceDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/xdr" element={<NetXDR />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/netcrad" element={<NetCrad />} />
            <Route path="/acis" element={<ACIS />} />
            <Route path="/netxdr" element={<NetXDR />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
