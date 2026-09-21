export const productsData = [
  {
    id: "acis",
    name: "ACIS",
    fullName: "Autonomous Cyber Immune System",
    badge: "Flagship Platform",
    tagline: "Single Agent • Single Console • Autonomous Cyber Defense",
    description: "Netcradus engineers the future of cyber defense. Through ACIS, we combine AI-driven threat detection, automated response, UEBA, SIEM, SOAR, and enterprise resilience to neutralize threats at machine speed — before they can disrupt operations.",
    features: [
      {
        title: "Autonomous Containment",
        desc: "Automated agentic playbook orchestration that isolates compromised hosts, revokes compromised tokens, and stops lateral movement in milliseconds."
      },
      {
        title: "Unified AI-SIEM & Telemetry",
        desc: "Sub-second event correlation across cloud, network, and endpoints with deep ML anomaly detection."
      },
      {
        title: "Adaptive Self-Healing Defense",
        desc: "Dynamic immune response adapting to novel zero-day vectors and evolving attacker tradecraft."
      },
      {
        title: "User & Entity Behavior Analytics (UEBA)",
        desc: "Baseline normal behavior to immediately flag credential theft, insider threats, and anomalous privilege spikes."
      }
    ],
    tiers: ["ACIS Lite", "ACIS Pro", "ACIS Enterprise"],
    stats: {
      detectionSpeed: "Sub-Second",
      correlationRate: "High-Throughput SIEM",
      containmentSLA: "Sub-15 Min SLA"
    }
  },
  {
    id: "netxdr",
    name: "Cyrix XDR / NetXDR",
    fullName: "Extended Detection & Response",
    badge: "Unified Endpoint & Network",
    tagline: "AI-Powered Unified Endpoint, Cloud & Network Protection",
    description: "Protect endpoints, servers, and multi-cloud workloads in real time. NetCradus Cyrix XDR unifies EDR, behavioral Next-Gen Antivirus (NGAV), network telemetry, and proactive threat hunting into one synchronized console.",
    features: [
      {
        title: "Behavioral NGAV & Anti-Ransomware",
        desc: "Memory protection, script control, and instantaneous ransomware rollback."
      },
      {
        title: "Proactive Threat Hunting",
        desc: "Continuous adversary emulation, IOC matching, and deep process tree analysis."
      },
      {
        title: "Cross-Layer Telemetry Fusion",
        desc: "Correlate endpoint process execution with network flows and cloud identity actions."
      }
    ],
    tiers: ["Standard XDR", "Advanced Enterprise XDR"],
    stats: {
      coverage: "Endpoint + Cloud + Network",
      huntingFeed: "Live Threat Feed",
      agentFootprint: "Lightweight Agent"
    }
  },
  {
    id: "netcrad",
    name: "NetCRAD",
    fullName: "AI-Powered Website Security & Vulnerability Scanner",
    badge: "Web Security Intelligence",
    tagline: "Automated Website Security Auditing & Compliance Intelligence",
    description: "An AI-powered website security auditing and vulnerability assessment platform that scans websites and web applications for security weaknesses, compliance issues, SSL misconfigurations, and performance risks with actionable remediation insights.",
    features: [
      {
        title: "Full-Stack Web Vulnerability Scan",
        desc: "Automated deep scan detecting OWASP Top 10 vulnerabilities, XSS, SQLi, and CORS flaws."
      },
      {
        title: "SSL / TLS & Header Compliance",
        desc: "Verify cryptographic hygiene, HSTS, CSP, and certificate expiration alerts."
      },
      {
        title: "Actionable Dev Remediation Guides",
        desc: "Developer-ready fix recommendations with exact code snippets and config templates."
      }
    ],
    tiers: ["Continuous Scanner", "Enterprise Audit"],
    stats: {
      scanDepth: "Full OWASP Top 10",
      reporting: "Actionable Dev Reports",
      frequency: "Continuous / On-Demand"
    }
  },
  {
    id: "crm",
    name: "Netcradus CRM",
    fullName: "Enterprise Relationship & Operations Platform",
    badge: "Enterprise Platform",
    tagline: "Secure, Scalable Enterprise Operations & Client Lifecycle Management",
    description: "Enterprise relationship and operations platform designed to streamline customer touchpoints, automate complex operational workflows, integrate disparate data nodes, and scale securely in hybrid cloud environments.",
    features: [
      {
        title: "Secure Enterprise Pipeline Management",
        desc: "End-to-end client lifecycle tracking with granular role-based encryption."
      },
      {
        title: "Workflow Automation & SLAs",
        desc: "Automate contract generation, ticket escalations, and compliance review approvals."
      },
      {
        title: "Integrated Cybersecurity Telemetry",
        desc: "Connect client accounts directly with security status monitoring and reporting portals."
      }
    ],
    tiers: ["Core CRM", "Enterprise Operations"],
    stats: {
      uptime: "99.9% Uptime",
      encryption: "AES-256 at Rest & In-Transit",
      integration: "REST APIs"
    }
  }
];

export const platformTiers = [
  {
    id: "endpoint-detection",
    title: "Endpoint Detection & Hunting",
    subtitle: "AI-Powered Threat Hunting & Behavioral NGAV",
    description: "Real-time process monitoring, memory inspection, and zero-day threat neutralization across all workstations and servers.",
    icon: "Monitor",
    capabilities: ["Process Tree Graphing", "Memory Exploit Guard", "Ransomware Rollback", "USB & Device Control"]
  },
  {
    id: "siem",
    title: "NetCradus SIEM",
    subtitle: "AI-Powered Log Management, Detection & Correlation",
    description: "Centralized high-throughput log aggregation, machine learning threat correlation, and automated regulatory compliance reporting.",
    icon: "Database",
    capabilities: ["Sub-Second Search", "UEBA Correlation", "Pre-Built Compliance Packs", "Cross-Cloud Ingestion"]
  },
  {
    id: "soar",
    title: "NetCradus SOAR",
    subtitle: "Security Orchestration, Automation & Response",
    description: "Orchestrate incident response at machine speed with visual playbooks, API integrations, and autonomous host isolation.",
    icon: "Zap",
    capabilities: ["Automated Playbooks", "Host Isolation", "Threat Intel Enrichment", "Ticketing Integration"]
  },
  {
    id: "cti",
    title: "Cyber Threat Intelligence (CTI)",
    subtitle: "Global Threat Research & Adversary Tradecraft",
    description: "Real-time adversary feeds, dark web monitoring, IOC enrichment, and tactical MITRE ATT&CK mapping.",
    icon: "Globe",
    capabilities: ["Global IOC Feeds", "Adversary Profiling", "Dark Web Leak Monitoring", "MITRE Heatmaps"]
  },
  {
    id: "pam",
    title: "Privileged Access Management (PAM)",
    subtitle: "Credential Vaulting & Zero Trust Session Trails",
    description: "Eliminate standing privileges with Just-In-Time access elevation, encrypted secret vaults, and live session recording.",
    icon: "Lock",
    capabilities: ["Just-In-Time Access", "Session Video Logs", "Automated Credential Rotation", "Zero Trust MFA"]
  },
  {
    id: "grc",
    title: "Governance, Risk & Compliance (GRC)",
    subtitle: "Automated Auditing & Risk Mapping",
    description: "Automate compliance tracking across ISO 27001, SOC 2, HIPAA, and GDPR with continuous automated asset evidence gathering.",
    icon: "FileCheck",
    capabilities: ["Continuous Audit Proof", "Vendor Risk Scoring", "Policy Versioning", "One-Click Compliance Exports"]
  },
  {
    id: "ai-security-tier",
    title: "AI Security Shield",
    subtitle: "LLM Defense & Prompt Sanitization",
    description: "Comprehensive firewall for generative AI apps, model APIs, and autonomous agents preventing injection and unauthorized data leakage.",
    icon: "Cpu",
    capabilities: ["Prompt Injection Filter", "Model Output Redaction", "API Rate Limiting", "Rogue Agent Sandboxing"]
  }
];
