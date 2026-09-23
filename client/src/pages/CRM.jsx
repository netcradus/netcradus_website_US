import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Zap, 
  Sparkles, 
  Activity, 
  Shield, 
  ShieldCheck, 
  TrendingUp, 
  Mail, 
  Headphones, 
  FolderKanban, 
  CreditCard, 
  BarChart3, 
  Briefcase, 
  CheckCircle2, 
  Calendar, 
  FileSpreadsheet, 
  LifeBuoy, 
  Lock, 
  Key, 
  UserCheck, 
  FileText, 
  Server, 
  Star,
  ArrowRight,
  Bot
} from 'lucide-react';
import crmHeroImg from '../assets/images/crm-hero.png';
import './CRM.css';

// 1. CRM Core Features
const crmFeatures = [
  {
    title: "Lead Management",
    description: "Capture, qualify, and segment incoming prospect leads dynamically. Automate lead scoring based on user interactions.",
    icon: Target
  },
  {
    title: "Sales Automation",
    description: "Automate follow-ups, sync outreach templates, schedule calls, and focus on closing deals.",
    icon: Zap
  },
  {
    title: "Contact Management",
    description: "Keep complete customer context with rich timelines, emails, document logs, and transaction details.",
    icon: Users
  },
  {
    title: "AI Insights",
    description: "Forecast pipeline velocities and scan ticket data to identify churn risk before it happens.",
    icon: Sparkles
  },
  {
    title: "Workflow Automation",
    description: "Build custom workflow maps to automate manual data syncs and internal notifications.",
    icon: Activity
  },
  {
    title: "Enterprise Security",
    description: "Constructed on bank-grade security baselines featuring hardware authentication key configurations.",
    icon: Shield
  }
];

// 2. Bento Modular Workspace
const bentoModules = [
  {
    title: "Sales CRM",
    description: "Track pipelines, deals, and compile custom proposals.",
    icon: TrendingUp,
    size: "bento-wide"
  },
  {
    title: "Marketing CRM",
    description: "Build audience segmentation lists and manage campaigns.",
    icon: Mail,
    size: ""
  },
  {
    title: "Customer Support",
    description: "Centralize omnichannel support queries and live chats.",
    icon: Headphones,
    size: ""
  },
  {
    title: "Project Workspace",
    description: "Linked milestone trackers, files, and project boards.",
    icon: FolderKanban,
    size: "bento-wide"
  },
  {
    title: "Finance & Billing",
    description: "Integrate Stripe invoices and recurring subscriptions.",
    icon: CreditCard,
    size: ""
  },
  {
    title: "Reports & Analytics",
    description: "Generate deep-dive conversion and revenue logs.",
    icon: BarChart3,
    size: ""
  },
  {
    title: "HR Workspace",
    description: "Coordinate remote onboarding and team rosters.",
    icon: Briefcase,
    size: "bento-wide"
  }
];

// 3. AI Assistant Highlights
const aiTags = [
  { label: "Smart Reply Engine" },
  { label: "Predictive Analytics" },
  { label: "Auto Lead Qualifier" },
  { label: "Sentiment Tracker" }
];

// 4. Visual Automation Pipeline
const automationNodes = [
  { step: "Lead", desc: "Form captures client info", icon: Sparkles },
  { step: "Qualified", desc: "Scored by predictive engine", icon: CheckCircle2 },
  { step: "Assigned", desc: "Dispatched to regional rep", icon: UserCheck },
  { step: "Meeting", desc: "Calendar synced automatically", icon: Calendar },
  { step: "Proposal", desc: "Dynamic quotes generated", icon: FileSpreadsheet },
  { step: "Won", desc: "Sign-offs recorded securely", icon: ShieldCheck },
  { step: "Support", desc: "SLA dashboard provisioned", icon: LifeBuoy }
];

// 5. Enterprise Security Standards
const securityBadges = [
  {
    title: "AES-256 Encryption",
    desc: "Protects database entries both in-transit and at-rest on mirrored nodes.",
    icon: Lock
  },
  {
    title: "MFA Authentication",
    desc: "Enforce biometric and security key options for all staff logins.",
    icon: Key
  },
  {
    title: "Role-Based Access",
    desc: "Restricted visibility masks client files dynamically by credentials.",
    icon: UserCheck
  },
  {
    title: "Audit Logs",
    desc: "Immutable history logs track data exports and user settings changes.",
    icon: FileText
  },
  {
    title: "Single Sign-On (SSO)",
    desc: "Sync directory hubs using Okta, Azure, or Google Cloud IAM standards.",
    icon: Shield
  },
  {
    title: "Cloud Backup",
    desc: "Real-time replica backups stored across multiple storage servers.",
    icon: Server
  }
];

// 6. Testimonials
const testimonials = [
  {
    rating: 5,
    quote: "NetCradus CRM has completely streamlined our sales pipelines. Releasing manual follow-ups gave our sales reps more hours to focus on high-value client relationships.",
    name: "Vikram Malhotra",
    title: "VP of Business Development, Apex Digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    rating: 5,
    quote: "We chose NetCradus CRM because of its clean White & Orange aesthetic and built-in security details. It matches our brand identity and is incredibly fast to navigate.",
    name: "Sarah Jenkins",
    title: "Director of CRM Strategy, CloudMatrix Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    rating: 5,
    quote: "The visual automation flow and Stripe billing integration made customer onboarding automatic. Highly recommended for expanding startup organizations.",
    name: "Marcus Dupont",
    title: "Chief Executive Officer, FinTrust International",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

export default function CRM() {
  useEffect(() => {
    document.title = "NetCradus CRM | Clean, Modern AI-Powered Customer CRM Platform";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="crm-wrapper">
      <div className="crm-dot-pattern" />
      <div className="crm-mesh-gradient" />

      {/* 1. HERO SECTION */}
      <section className="crm-hero">
        <div className="crm-container">
          <div className="crm-hero-grid">
            <div className="crm-hero-content">
              <div className="crm-hero-badge">
                ✨ AI-Powered Enterprise CRM
              </div>
              <h1 className="crm-hero-title">
                Manage Customer Relationships<br />
                <span>Smarter.</span> Faster. <span>Better.</span>
              </h1>
              <p className="crm-hero-desc">
                NetCradus CRM helps businesses automate sales, manage leads, improve customer relationships, and increase revenue with AI-powered automation.
              </p>

              <div className="crm-hero-buttons">
                <Link to="/contact" className="crm-primary-btn">
                  <span>Schedule Demo</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#features" className="crm-secondary-btn">
                  <span>Explore Features</span>
                </a>
              </div>

              <div className="crm-hero-stats-row">
                <div className="crm-hero-stat-item">
                  <span className="crm-hero-stat-val">10K+</span>
                  <span className="crm-hero-stat-lbl">Active Customers</span>
                </div>
                <div className="crm-hero-stat-item">
                  <span className="crm-hero-stat-val">98%</span>
                  <span className="crm-hero-stat-lbl">Customer Satisfaction</span>
                </div>
                <div className="crm-hero-stat-item">
                  <span className="crm-hero-stat-val">35%</span>
                  <span className="crm-hero-stat-lbl">Sales Velocity Growth</span>
                </div>
                <div className="crm-hero-stat-item">
                  <span className="crm-hero-stat-val">24/7</span>
                  <span className="crm-hero-stat-lbl">Live Support SLA</span>
                </div>
              </div>
            </div>

            <div className="crm-hero-image-wrapper">
              <img 
                src={crmHeroImg} 
                alt="NetCradus System Overview CRM Dashboard" 
                className="crm-hero-dashboard-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES SECTION */}
      <section className="crm-section alt-bg" id="features">
        <div className="crm-container">
          <div className="crm-section-header">
            <h2 className="crm-section-title">
              Spacious Tools built for <span>Better Output.</span>
            </h2>
            <p className="crm-section-subtitle">
              NetCradus CRM unifies lead scoring, drip marketing, contract records, and communication histories into a clean workspace.
            </p>
          </div>

          <div className="crm-features-grid">
            {crmFeatures.map((feat) => {
              const IconComponent = feat.icon;
              return (
                <div className="crm-white-card" key={feat.title}>
                  <div className="card-icon-box">
                    <IconComponent size={22} strokeWidth={2} />
                  </div>
                  <h3>{feat.title}</h3>
                  <p>{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BENTO MODULAR WORKSPACE */}
      <section className="crm-section">
        <div className="crm-container">
          <div className="crm-section-header">
            <h2 className="crm-section-title">
              Modular CRM Bento Workspace.<br />
              <span>Tailored for Multi-Team Workflows.</span>
            </h2>
            <p className="crm-section-subtitle">
              Scale CRM tools dynamically. Choose features, set permissions, and coordinate operations instantly.
            </p>
          </div>

          <div className="crm-bento-grid">
            {bentoModules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <div className={`bento-card ${mod.size}`} key={mod.title}>
                  <div className="bento-glow-overlay" />
                  <div className="bento-icon">
                    <IconComponent size={22} />
                  </div>
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. AI SALES ASSISTANT */}
      <section className="crm-section alt-bg">
        <div className="crm-container">
          <div className="ai-assistant-grid">
            <div className="ai-assistant-visual-area">
              <div className="ai-mesh-glow" />
              <div className="ai-avatar-core">
                <Bot size={120} strokeWidth={1} />
              </div>
              <div className="floating-chat-bubble bubble-1">
                <span className="bubble-tag-orange">AI Email draft ready</span>
                <span className="bubble-subtext">Drafted follow-up deal terms in 0.4 seconds.</span>
              </div>
              <div className="floating-chat-bubble bubble-2">
                <span className="bubble-tag-purple">Lead Scored: 98/100</span>
                <span className="bubble-subtext">High purchase intent identified.</span>
              </div>
            </div>

            <div className="ai-assistant-text">
              <h2 className="crm-section-title">
                Work Smarter with Your<br />
                <span>AI Sales Assistant.</span>
              </h2>
              <p className="crm-section-subtitle">
                Automate outbound email replies, summarize virtual audio conferences, compile quotes, and qualify client profiles automatically.
              </p>
              <div className="ai-tags-row">
                {aiTags.map((tag) => (
                  <div className="ai-tag-badge" key={tag.label}>
                    <Sparkles size={18} className="ai-tag-icon" />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISUAL WORKFLOW AUTOMATION TRACK */}
      <section className="crm-section">
        <div className="crm-container">
          <div className="crm-section-header">
            <h2 className="crm-section-title">
              Visual Workflow Automation.<br />
              <span>Map Pipelines Effortlessly.</span>
            </h2>
            <p className="crm-section-subtitle">
              Route leads, synchronize outreach, and close deals automatically.
            </p>
          </div>

          <div className="crm-automation-track">
            {automationNodes.map((node, index) => {
              const NodeIcon = node.icon;
              return (
                <div className="automation-node" key={node.step}>
                  <div className="automation-node-circle">
                    <NodeIcon size={22} />
                  </div>
                  <div className="automation-node-name">{node.step}</div>
                  <div className="automation-node-desc">{node.desc}</div>
                  {index < automationNodes.length - 1 && (
                    <div className="automation-node-line" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ENTERPRISE CYBERSECURITY & PRIVACY */}
      <section className="crm-section">
        <div className="crm-container">
          <div className="security-content-grid">
            <div className="security-text-col">
              <h2 className="crm-section-title">
                Enterprise Cybersecurity.<br />
                <span>Data Privacy Guaranteed.</span>
              </h2>
              <p className="crm-section-subtitle" style={{ marginBottom: "2.5rem" }}>
                All databases are fully isolated with AES-256 standards, restricting client files dynamically by access credentials.
              </p>

              <div className="security-badges-grid">
                {securityBadges.map((badge) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div className="security-badge-item" key={badge.title}>
                      <div className="security-badge-icon-box">
                        <BadgeIcon size={20} />
                      </div>
                      <div className="security-badge-info">
                        <h3>{badge.title}</h3>
                        <p>{badge.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="security-illustrations-container">
              <div className="crm-mesh-glow" />
              <div className="security-large-shield">
                <Shield size={160} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="crm-section alt-bg">
        <div className="crm-container">
          <div className="crm-section-header">
            <h2 className="crm-section-title">
              Trusted by <span>Revenue Teams worldwide.</span>
            </h2>
            <p className="crm-section-subtitle">
              Read how scaling organizations manage workflows with NetCradus CRM.
            </p>
          </div>

          <div className="testimonials-row-grid">
            {testimonials.map((test) => (
              <div className="testimonial-card-item" key={test.name}>
                <div>
                  <div className="testimonial-stars">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{test.quote}"</p>
                </div>
                <div className="testimonial-profile">
                  <img src={test.avatar} alt={test.name} className="testimonial-photo" />
                  <div className="testimonial-info">
                    <h4>{test.name}</h4>
                    <p>{test.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="crm-final-cta-section">
        <div className="crm-container">
          <div className="final-cta-gradient-card">
            <h2>
              Ready to Grow Your Business<br />
              with NetCradus CRM?
            </h2>
            <p>
              Automate follow-ups, forecast deal values, compile proposals, and coordinate workflows in one secure, modern platform.
            </p>
            <div className="final-cta-buttons">
              <Link to="/contact" className="crm-primary-btn">
                <span>Get Started with NetCRM</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
